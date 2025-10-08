import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Footer = () => {
  return (
    <div className="bg-black text-white py-8 px-6 md:px-12 lg:px-28 flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Logo & Copyright */}
      <div className="flex flex-col items-center md:items-start gap-3">
        <Image
          src={assets.logo_light}
          alt="Logo"
          width={120}
          className="invert"
        />
        <p className="text-gray-400 text-sm">
          All rights reserved. © Blogger
        </p>
      </div>

      {/* Social Icons */}
      <div className="flex gap-6">
        <Image
          src={assets.facebook_icon}
          alt="Facebook"
          width={40}
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
        <Image
          src={assets.twitter_icon}
          alt="Twitter"
          width={40}
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
        <Image
          src={assets.googleplus_icon}
          alt="Google Plus"
          width={40}
          className="hover:scale-110 transition-transform duration-300 cursor-pointer"
        />
      </div>
    </div>

  )
}

export default Footer
