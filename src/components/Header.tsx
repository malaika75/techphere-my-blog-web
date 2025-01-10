import React from 'react'
import Link from 'next/link'
import { FaLaptopCode } from "react-icons/fa"; 
import { FaBookBookmark } from "react-icons/fa6"; 
import { AiOutlineUser} from "react-icons/ai";


function header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex justify-between flex-wrap p-5 items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <FaLaptopCode className="w-10 h-10 text-white p-2 bg-blue-950 rounded-full" />
            <span className="ml-3 text-xl font-mono">TechSphere</span>
          </a>
          <nav className="md:ml-auto ml-6 flex flex-wrap items-center text-xl md:text-2xl gap-6 justify-center font-semibold">
            <Link href='/'>
              <FaBookBookmark className="text-blue-950 hover:text-blue-600" />
            </Link>
            <Link href='/signup'>
              <AiOutlineUser className="text-blue-950 hover:text-blue-600" />
            </Link>
          </nav>
        </div>
      </header>
    </>
  )
}

export default header;
