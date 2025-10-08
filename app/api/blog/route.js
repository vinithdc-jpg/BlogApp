import { NextResponse } from "next/server";
import { ConnetDB } from "@/lib/config/db";
import { writeFile } from 'fs/promises'
import path from "path";
import BlogModel from "@/lib/models/blogmodel";
import fs from 'fs'

export const runtime = "nodejs";

export async function GET(request) {
    try {
        await ConnetDB();
        const blogId = request.nextUrl.searchParams.get("id")
        if (blogId) {
            const blog = await BlogModel.findById(blogId);
            return NextResponse.json(blog);
        }
        else {
            const blogs = await BlogModel.find({});
            return NextResponse.json({ blogs });
        }
    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await ConnetDB();
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        if (!image || typeof image.arrayBuffer !== 'function') {
            return NextResponse.json({ error: "No valid image file provided" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);

        const originalName = image.name || `upload_${timestamp}.jpg`;
        const safeName = originalName.replace(/[^a-zA-Z0-9._-]/g, "_");
        const fileName = `${timestamp}_${safeName}`;

        const filePath = path.join(process.cwd(), "public", fileName);
        await writeFile(filePath, buffer);
        const imgUrl = `/${fileName}`;

        const blogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            category: `${formData.get('category')}`,
            author: `${formData.get('author')}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get('authorImg')}`
        }

        await BlogModel.create(blogData);
        console.log("Blog Saved")

        return NextResponse.json({ success: true, msg: "blog added" });
    } catch (error) {
        console.error("POST Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(id);
    fs.unlink(`./public${blog.image}`,()=>{});
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({msg:"Blog deleted"})
}