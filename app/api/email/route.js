import { ConnetDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";


export async function POST(request) {
    await ConnetDB()
    const formData = await request.formData();
    const emailData = {
        email:`${formData.get('email')}`,

    }
    await EmailModel.create(emailData);
    return NextResponse.json({success:true, msg:"Email subscription"})

}

export async function GET(request) {
    await ConnetDB();
    const emails = await EmailModel.find({});
    return NextResponse.json({emails});
}

export async function DELETE(request) {
    const id = await request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(id);
    return NextResponse.json({success:true,msg:"Email Deleted"})
}