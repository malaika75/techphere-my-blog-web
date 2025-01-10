import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa"; 

function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font bg-gray-200">
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="w-full lg:w-1/4 md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <FaLaptopCode className="w-10 h-10 text-white p-2 bg-blue-950 rounded-full" />
              <span className="ml-3 text-xl">TechSphere</span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Stay Geeky, Stay Ahead with TechSphere!
            </p>
          </div>

          {/* Links Section */}
          <div className="flex-grow flex flex-wrap md:pl-20 md:text-left text-center">
            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Links
              </h2>
              <ul className="list-none mb-4">
                <Link href="/">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    Blog
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    Contact
                  </li>
                </Link>
                <Link href="/about">
                  <li className="hover:text-purple-800 hover:underline cursor-pointer">
                    About
                  </li>
                </Link>
              </ul>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/4 px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                Support
              </h2>
              <ul className="list-none mb-4">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">FAQs</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className="w-full lg:w-1/4 px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              Subscribe
            </h2>
            <h3 className="text-2xl font-semibold mb-4">
              We’d love to hear from you!
            </h3>
            <p className="mb-4">
              Share your thoughts and tell us what kind of content you’d like to
              see.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Feedback"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 mb-4 md:mb-0"
              />
              <button className="ml-4 inline-flex text-white bg-blue-950 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Social and Copyright Section */}
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between">
            <p className="text-gray-800 text-sm text-center sm:text-left font-semibold">
              © 2024 TechSphere — @malaika57680@gmail.com
            </p>
            <div className="flex justify-center sm:justify-start">
              <a className="text-gray-500 ml-3">
                <FaFacebook size={24} />
              </a>
              <a className="text-gray-500 ml-3">
                <FaTwitter size={24} />
              </a>
              <a className="text-gray-500 ml-3">
                <FaInstagram size={24} />
              </a>
              <a className="text-gray-500 ml-3">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
