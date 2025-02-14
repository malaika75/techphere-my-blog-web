import React from 'react'
import Image from 'next/image'



function page() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        Our Team
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Welcome to TechSphere! Our mission is to simplify technology for everyone by delivering insightful blogs, latest trends, and practical tips. Whether you&apos;re a tech enthusiast or just starting your journey, we&rsquo;re here to guide you every step of the way!.
      </p>
    </div>
    <div className="flex flex-wrap -m-2">
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/Writer-img.jpg" height={100} width={100}></Image>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Holden Caulfield
            </h2>
            <p className="text-gray-500">UI Designer</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/img-123.jpg" height={100} width={100}></Image>
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Henry Letham
            </h2>
            <p className="text-gray-500">Founder</p>
          </div>
        </div>
      </div>
      <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <Image
            alt="team"
            className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
            src="/image/founder-img.jpeg" height={100} width={100}></Image>

          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">
              Oskar Blinde
            </h2>
            <p className="text-gray-500">Writter</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default page