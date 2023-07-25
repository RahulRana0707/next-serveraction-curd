import React from 'react'
import PostCard from './PostCard'

export default function PostList({posts}) {
  return (
    <div style={{display:'flex',gap:20,flexWrap:'wrap'}}>
        {posts.map(post=>(
            <PostCard key={post._id} post={post}/>
        ))}
    </div>
  )
}
