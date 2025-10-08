"use client"
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {

  const [image, setImage] = useState(false)
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Startup",
    author: "Alex Bennett",
    authorImg: "/author_img.png"
  })

  const onChangeHandlier = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
    console.log(data)
  }

  const onSubmitHaandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('category', data.category);
    formData.append('author', data.author);
    formData.append('authorImg', data.authorImg);
    formData.append('image', image);
    const respose = await axios.post('/api/blog', formData);
    if (respose.data.success) {
      toast.success(respose.data.msg)
      setImage(false);
      setData({
        title: "",
        description: "",
        category: "Startup",
        author: "Alex Bennett",
        authorImg: "/author_img.png"
      })
    }
    else {
      toast.error("Error")
    }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center items-start py-10">
        <form
          onSubmit={onSubmitHaandler}
          encType="multipart/form-data"
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl border border-gray-100"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Add New Blog</h2>

          {/* ---------- Upload Thumbnail ---------- */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Upload Thumbnail</p>
            <label
              htmlFor="image"
              className="flex justify-center items-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition-all"
            >
              <Image
                src={!image ? assets.upload_area : URL.createObjectURL(image)}
                width={200}
                height={120}
                alt="Upload area"
                className="object-cover rounded-lg"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              required
              hidden
            />
          </div>

          {/* ---------- Blog Title ---------- */}
          <div className="mb-5">
            <p className="text-gray-700 font-medium mb-2">Blog Title</p>
            <input
              name="title"
              onChange={onChangeHandlier}
              value={data.title}
              type="text"
              placeholder="Type here..."
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          {/* ---------- Blog Description ---------- */}
          <div className="mb-5">
            <p className="text-gray-700 font-medium mb-2">Blog Description</p>
            <textarea
              name="description"
              onChange={onChangeHandlier}
              value={data.description}
              placeholder="Write your content here..."
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200 resize-none"
            />
          </div>

          {/* ---------- Blog Category ---------- */}
          <div className="mb-6">
            <p className="text-gray-700 font-medium mb-2">Blog Category</p>
            <select
              onChange={onChangeHandlier}
              name="category"
              value={data.category}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="Startup">Startup</option>
              <option value="Technology">Technology</option>
              <option value="LifeStyle">Lifestyle</option>
            </select>
          </div>

          {/* ---------- Submit Button ---------- */}
          <button
            type="submit"
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all"
          >
            Add Blog
          </button>
        </form>
      </div>
    </>
  )
}

export default page
