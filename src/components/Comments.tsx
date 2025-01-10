"use client"
import React from 'react'
import { useState , useEffect } from 'react'
import {client} from '@/sanity/lib/client'

const Comments = ({postId}:{postId:string}) => {

    const [comments , setComments] = useState<{name:string,email:string,comment:string}[]>([])
    const [newComments , setNewcomments] = useState("")
    const [name, setName] = useState("")
    const [email , setEmail] = useState("")

    const fetchComments = async () => {
    const query = `*[_type == "comment" && post._ref == $postId]{
      name,
      email,
      comment
    }`;

    const result = await client.fetch(query, { postId });
    setComments(result);
  };

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const newEntry = {
            _type: 'comment',
            name,
            email,
            comment:newComments,
            post: {
        _type: 'reference',
        _ref: postId,  // Linking comment to the current postId
      },
        }
        console.log(newEntry)
        try {
            await client.create(newEntry);
            setComments([...comments, newEntry]);
            setName('');
            setEmail('');
            setNewcomments('');
          } catch (error) {
            console.error('Error adding comment:', error);
            alert('Failed to add comment');
          }
    }
  return (
    <>
    <div className='border-t border-gray-600 p-10 max-w-xl mt-10 mx-auto'> 
      <div className='sm:-ml-24'>
<p className='text-xs text-blue-800 uppercase font-bold'>Enjoyed this article?</p>
<p className='sm:text-3xl text-xl font-semibold'>Leave a Comment Below!</p>
</div>
<form className='sm:-ml-24' onSubmit={handleSubmit}>
  <label className='flex flex-col'>
    <span className='font-semibold text-base mt-8'>Name</span>
    <input  value={name} onChange={(e) => setName(e.target.value)} className='outline-none border-b p-2 border-blue-950 shadow-md shadow-blue-950 mt-2' placeholder='Enter your name' type='text' required></input>
  </label>

  <label className='flex flex-col'>
    <span className='font-semibold text-base mt-8'>Email</span>
    <input value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none border-b p-2 border-blue-950 shadow-md shadow-blue-950 mt-2' placeholder='Enter your email' type='email'></input>
  </label>

  <label className='flex flex-col'>
    <span className='font-semibold text-base mt-8'>Comment</span>
    <textarea value={newComments} onChange={(e) => setNewcomments(e.target.value)} className='outline-none border-b p-2 border-blue-950 shadow-md shadow-blue-950 mt-2' placeholder='Enter your comment' rows={6} required></textarea>
  </label>
  <button className='bg-blue-950 p-2 mt-5 text-white w-full rounded-sm active:bg-blue-700' type='submit'>Submit</button>
</form>

<div className="mt-5">
        {comments.length > 0 ? (
          comments.map((entry, index) => (
            <div key={index} className="p-2 border-b border-gray-300">
              <p>
                <strong>{entry.name}</strong> ({entry.email})
              </p>
              <p>{entry.comment}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
    </>
  )
}

export default Comments