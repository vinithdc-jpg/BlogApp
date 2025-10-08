import { blog_data } from '@/Assets/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {

    const [menu, setMenu] = useState("All")
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.get('/api/blog');
            if (response.data && response.data.blogs) {
                setBlogs(response.data.blogs);
                console.log('Fetched blogs:', response.data.blogs);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setBlogs([]);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div className="bg-black py-10 px-6 md:px-12 lg:px-28 text-center">
            <div className="flex flex-wrap justify-center gap-4 py-8 bg-black">
                <button
                    onClick={() => setMenu("All")}
                    className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${menu === "All"
                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            : "border border-gray-700 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    All
                </button>

                <button
                    onClick={() => setMenu("Technology")}
                    className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${menu === "Technology"
                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            : "border border-gray-700 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    Technology
                </button>

                <button
                    onClick={() => setMenu("Startup")}
                    className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${menu === "Startup"
                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            : "border border-gray-700 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    Startup
                </button>

                <button
                    onClick={() => setMenu("Lifestyle")}
                    className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ${menu === "Lifestyle"
                            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                            : "border border-gray-700 text-white hover:bg-white hover:text-black"
                        }`}
                >
                    Lifestyle
                </button>
            </div>

            <div className="bg-black py-16 px-6 md:px-12 lg:px-28">
                <h2 className="text-white text-4xl font-bold mb-10 text-center">
                    Latest Blogs
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((item, index) => (
                         <BlogItem
                            key={index}
                            id={item._id}
                            image={item.image}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>

        </div>
    )
}

export default BlogList
