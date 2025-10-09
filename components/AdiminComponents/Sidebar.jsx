import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="bg-[#0d0d0d] text-white w-64 min-h-screen p-6 flex flex-col justify-between border-r border-gray-800">
      {/* --------- Logo Section --------- */}
      <div>
        <div className="flex items-center justify-center mb-10">
          <Link href='/'>
          <Image src={assets.logo} width={120} alt="Logo" className="invert" />
          </Link>
        </div>

        {/* --------- Navigation Links --------- */}
        <div className="flex flex-col gap-4">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <Image src={assets.add_icon} alt="Add Blogs" width={24} />
            <p className="font-medium text-sm">Add Blogs</p>
          </Link>

          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <Image src={assets.blog_icon} alt="Blog List" width={24} />
            <p className="font-medium text-sm">Blogs List</p>
          </Link>

          <Link
            href="/admin/subscription"
            className="flex items-center gap-3 py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300"
          >
            <Image src={assets.email_icon} alt="Subscription" width={24} />
            <p className="font-medium text-sm">Subscription</p>
          </Link>
        </div>
      </div>

      {/* --------- Footer / Logout Section (optional) --------- */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Blogger Admin
      </div>
    </div>
  )
}

export default Sidebar

