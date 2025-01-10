import React from 'react'
import {client} from '@/sanity/lib/client'
import { PortableText , PortableTextReactComponents} from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Comments from '@/components/Comments';

interface Post {
  _id: string;
  content: Array<
    | { _type: 'block'; children: Array<{ text: string }>; style: string } // Text Block
    | { _type: 'image'; asset: { _ref: string }; alt?: string } // Image Block
  >
}

interface ImageType {
  asset: {
    _ref: string
  }
  alt?: string
}

async function Blogpage({params}:{params:{slug:string}}) {

    const {slug} = params;

    const query= `*[_type == "post" && slug.current == $slug][0]{
        _id,
        content
      }`

const post:Post = await client.fetch(query, {slug})



const serializers: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: { value: ImageType}) => (
      <Image
        src={urlFor(value.asset).width(800).url()} // Generate image URL with desired width
        alt={value.alt || 'Post Image'}
        style={{ maxWidth: '100%', borderRadius: '8px', margin: '20px 0' ,}}
        height={400}
        width={900}
        quality={100}
        unoptimized className=''>
          </Image>
    ),
  },
   block: {
    h1: ({ children }: { children?: React.ReactNode }) => (
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{children}</h1>
    ),
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold' }}>{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 style={{ fontSize: '1rem', marginBottom: '1rem', fontWeight: 'bold' }}>{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>{children}</p>
    ),
  },
};


  return (
    <>
    <div style={{ marginLeft: '20%' , marginRight: '20%'  }}>
        <PortableText value={post.content} components={serializers} />
    </div>

    <Comments postId={post._id} />

    </>
  )
}

export default Blogpage



