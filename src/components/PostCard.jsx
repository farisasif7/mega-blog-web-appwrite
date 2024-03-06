import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  // console.log('$id', $id)
  // console.log('title', title)
  // console.log('featuredImage', featuredImage)
    
  // return (
  //   <Link to={`/post/${$id}`}>
  //       <div className='w-full bg-gray-100 rounded-xl p-4'>
  //           <div className='w-full justify-center mb-4'>
  //               <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
  //               className='rounded-xl' />

  //           </div>
  //           <h2
  //           className='text-xl font-bold'
  //           >{title}</h2>
  //       </div>
  //   </Link>
  // )

  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className='rounded-xl w-full' />
            </div>
            <h2 className='text-xl font-bold text-gray-800'>{title}</h2>
        </div>
    </Link>
);
}


export default PostCard