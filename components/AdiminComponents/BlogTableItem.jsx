import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({ authorImg, title, author, date, deleteBlog, mongoId }) => {
    const BlogDate = new Date(date)
    return (
        <tr className="hover:bg-gray-50 transition-all duration-200">
            {/* Author */}
            <th scope="row" className="py-4 px-6 flex items-center gap-3 text-left">
                <Image
                    src={authorImg ? authorImg : assets.profile_icon}
                    width={40}
                    height={40}
                    alt="Author"
                    className="rounded-full object-cover border border-gray-300"
                />
                <p className="text-gray-800 font-medium text-sm">
                    {author ? author : "No author"}
                </p>
            </th>

            {/* Blog Title */}
            <td className="py-4 px-6 text-gray-700 text-sm font-normal">
                {title ? title : "No title"}
            </td>

            {/* Date */}
            <td className="py-4 px-6 text-gray-500 text-sm">
                {BlogDate ? BlogDate.toDateString() : "No date"}
            </td>

            {/* Actions */}
            <td className="py-4 px-6 text-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium text-sm mr-4 transition-all">
                    Edit
                </button>
                <button onClick={()=>deleteBlog(mongoId)} className="text-red-500 hover:text-red-700 font-medium text-sm transition-all">
                    Delete
                </button>
            </td>
        </tr>

    )
}

export default BlogTableItem
