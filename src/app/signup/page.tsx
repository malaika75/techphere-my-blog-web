import React from 'react'

function page() {
  return (
    <>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 className="title-font font-medium text-3xl text-gray-900">
      Welcome to TechSphere! 
      Join the TechSphere Community!
      </h1>
      <p className="leading-relaxed mt-4">
      Stay updated with the latest tech trends, tips, and exclusive content all in one place.&quot;
      </p>
    </div>
    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
        Sign Up
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          className="w-full bg-white rounded border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="text-white bg-blue-950 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
        sign up
      </button>
      <p className="text-sm text-gray-500 mt-3">Already have an account? <a href="/login" className='text-blue-600'>Log in here</a>.</p>
    </div>
  </div>
</section>

    </>
  )
}

export default page