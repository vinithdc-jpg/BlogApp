"use client"
import { assets, blog_data } from '@/Assets/assets';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Footer from '@/components/Footer';
import Link from 'next/link';
import axios from 'axios';

const page = ({ params }) => {
    const resolvedParams = React.use(params);
    const [data, setData] = useState(null);

    const fetchBlogData = async () => {
        try {
            const response = await axios.get(`/api/blog?id=${resolvedParams.id}`);
            if (response.data) {
                setData(response.data);
            }
        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    }

    useEffect(() => {
        fetchBlogData();
    }, [resolvedParams.id])

    return (data ? <>
        <div className="bg-black text-white min-h-screen py-10 px-6 md:px-12 lg:px-32">
            {/* ---------- Navbar ---------- */}
            <div className="flex items-center justify-between mb-12">
                <Link href="/">
                    <Image
                        src={assets.logo}
                        width={180}
                        alt="Logo"
                        className="invert w-[130px] sm:w-auto"
                    />
                </Link>
                <button className="flex items-center gap-2 font-medium py-2 px-5 sm:py-3 sm:px-6 border border-white text-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white hover:text-black transition-all duration-300">
                    Get started
                    <Image src={assets.arrow} alt="arrow" className="w-4 invert" />
                </button>
            </div>

            {/* ---------- Blog Header ---------- */}
            <div className="max-w-4xl mx-auto text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">
                    {data.title}
                </h1>

                <div className="flex items-center justify-center gap-3 mb-6">
                    <Image
                        src={data.authorImg}
                        width={60}
                        height={60}
                        alt="Author"
                        className="rounded-full border border-gray-700"
                    />
                    <p className="text-gray-300 text-lg">{data.author}</p>
                </div>
            </div>

            {/* ---------- Blog Image ---------- */}
            <div className="max-w-5xl mx-auto mb-12 overflow-hidden rounded-2xl shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                <Image
                    src={data.image}
                    width={1280}
                    height={720}
                    alt={data.title}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            {/* ---------- Blog Content ---------- */}
            <div className="max-w-4xl mx-auto space-y-8 text-gray-300 leading-relaxed">
                <div>
                    <h2 className="text-2xl font-semibold text-white mb-3">Introduction:</h2>
                    <p>{data.description}</p>
                </div>

            </div>

            {/* ---------- Social Share Section ---------- */}
            <div className="max-w-4xl mx-auto mt-16 border-t border-gray-800 pt-10 text-center">
                <p className="text-gray-400 mb-6">
                    Share this article on social media
                </p>
                <div className="flex justify-center gap-6">
                    <Image
                        src={assets.facebook_icon}
                        width={45}
                        alt="Facebook"
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    <Image
                        src={assets.twitter_icon}
                        width={45}
                        alt="Twitter"
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                    <Image
                        src={assets.googleplus_icon}
                        width={45}
                        alt="Google Plus"
                        className="cursor-pointer hover:scale-110 transition-transform duration-300"
                    />
                </div>
            </div>
        </div>
        <Footer />
    </> : <></>
    )
}

export default page
