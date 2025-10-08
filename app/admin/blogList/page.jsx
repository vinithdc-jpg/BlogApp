"use client"
import BlogTableItem from '@/components/AdiminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [blogs, setBlogs] = useState([])

  const fetchBlogs = async () => {
    const response = await axios.get('/api/blog');
    setBlogs(response.data.blogs)
  }

  const deleteBlog = async (mongoId) => {
    const response = await axios.delete('/api/blog', {
      params: {
        id: mongoId
      }
    })
    toast.success(response.data.msg);
    fetchBlogs();
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6 md:px-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">All Blogs</h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="w-full border-collapse text-left">
          <thead className="bg-gray-100">
            <tr>
              <th scope="col" className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Author
              </th>
              <th scope="col" className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Blog Title
              </th>
              <th scope="col" className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide">
                Date
              </th>
              <th scope="col" className="py-4 px-6 text-gray-700 font-semibold text-sm uppercase tracking-wide text-center">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {blogs.map((item, index) => (
              <BlogTableItem
                key={index}
                mongoId={item._id}
                title={item.title}
                author={item.author}
                authorImg={item.authorImg}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>

  )
}

export default page
