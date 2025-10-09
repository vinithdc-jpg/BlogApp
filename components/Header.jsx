import React, { useState } from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';
import Link from 'next/link';

const Header = () => {

    const [email, setEmail] = useState("");

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        const response = await axios.post('/api/email', formData);
        if (response.data.success) {
            toast.success(response.data.msg)
            setEmail("");
        }
        else {
            toast.error("Error")
        }
    }

    return (
        <div className="bg-black text-white py-12 px-6 md:px-16 lg:px-28">
            {/* Navbar Section */}
            <div className="flex items-center justify-between mb-12">
                <Image
                    src={assets.logo}
                    width={180}
                    alt="Logo"
                    className="w-[130px] sm:w-auto brightness-200 invert"
                />
                <Link href='/admin'>
                    <button className="flex items-center gap-2 font-medium py-2 px-5 sm:py-3 sm:px-6 border border-white text-white rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-white hover:text-black transition-all duration-300">
                        Get started
                        <Image
                            src={assets.arrow}
                            alt="arrow"
                            className="w-5 invert"
                        />
                    </button>
                </Link>
            </div>

            {/* Content Section */}
            <div className="text-center max-w-2xl mx-auto">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-500 text-transparent bg-clip-text">
                    Latest Blog
                </h1>
                <p className="text-gray-300 mb-8 leading-relaxed">
                    Stay updated with our latest articles and stories. We share insights, tutorials, and inspiration to help you grow and learn.
                </p>

                {/* Subscription Form */}
                <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        className="w-full sm:w-auto flex-1 py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all"
                    />
                    <button
                        type="submit"
                        className="py-3 px-6 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-all duration-300 shadow-lg"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Header
