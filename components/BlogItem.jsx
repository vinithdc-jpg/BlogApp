import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { assets, blog_data } from '@/Assets/assets'

const BlogItem = ({ title, description, category, image, id }) => {
    return (
        <div className="bg-[#0d0d0d] text-white rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300 hover:-translate-y-2">
            {/* Image */}
            <div className="overflow-hidden">
                <Link href={`/blogs/${id}`}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={400}
                    className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
                />
                </Link>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
                <p className="uppercase text-sm tracking-wide text-gray-400">{category}</p>
                <h5 className="text-2xl font-semibold bg-gradient-to-r from-gray-100 to-gray-400 text-transparent bg-clip-text">
                    {title}
                </h5>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Read More */}
                <Link href={`/blogs/${id}`} className="flex items-center gap-2 text-white mt-4 font-medium cursor-pointer hover:text-gray-300 transition-colors">
                    <span>Read More</span>
                    <Image src={assets.arrow} alt="arrow" className="w-4 invert" />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
