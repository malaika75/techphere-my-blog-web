import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image';
import { FiArrowRight } from "react-icons/fi"; 

interface postType {
  summary: string,
  headline: string,
  title: string,
  slug: string
  image: {
    _ref: string
  },
  alt?: string
}

export default async function Home() {

  const query = `*[_type == 'post']{
    title,headline,summary,image,
    "slug":slug.current,
  }`;

  const post = await client.fetch(query);

  return (
    <>
      <div>
        <div className="">
          <Image src='/image/tech-123.jpg' alt='banner' height={100} width={100} className='relative w-screen overflow-hidden object-cover' unoptimized quality={100}></Image>
        </div>
      </div>

      <div className='w-9/12 sm:h-[350px] bg-blue-950 lg:mx-40 md:mx-16 md:top-[400px] top-[260px] mx-12 absolute xl:top-[550px] border-2 border-gray-100 border-opacity-20 text-white shadow-2xl shadow-blue-950 rounded-md -mt-10 sm:mx-20'>
        <p className='text-center text-semibold text-2xl p-4 sm:mt-6 font-mono'>TechSphere</p>
        <p className='w-9/12 mx-auto sm:mt-4 text-semibold text-center'>Explore the world of technology with TechSphere where innovation meets inspiration.</p>
        <p className='hidden sm:flex text-center mx-auto '>Discover blogs that ignite curiosity and empower ideas! From the latest breakthroughs in tech to practical insights for everyday life, TechSphere is your trusted guide in this ever evolving digital era. Join us as we decode complex trends, share expert perspectives, and bring you closer to the future of technology. At TechSphere, we don&apos;t just talk about innovation we live it.</p>
      </div>

      <h1 className='text-4xl font-serif font-semibold xl:mt-40 mt-48 md:mt-56 sm:mx-20 mx-4'>Recent posts</h1>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:w-[1300px]"> 
      {post.map((post: postType) => (
        <div key={post.slug} className="p-4">
          <div className="h-full border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 ease-in-out">
            {post.image && (
              <Image
                src={urlFor(post.image).width(400).url()} // Set image width dynamically
                alt={post.title}
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                height={200} 
                width={400}
                quality={100}
                unoptimized
              />
            )}
            <div className="p-6 bg-white"> 
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {post.title}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {post.headline}
              </h1>
              <p className="leading-relaxed mb-3 text-gray-600">{post.summary}</p>
              <div className="flex items-center flex-wrap">
                <Link href={`/blogs/${post.slug}`}>
                  <button className="text-blue-900 inline-flex items-center font-semibold">
                    Read More
                    <FiArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
</>
  );
}
