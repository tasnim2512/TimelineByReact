import React from 'react'
import Post from './Post'
import Users from '../JsonFiles/users.json';
import Posts from '../JsonFiles/posts.json';
import Comments from '../JsonFiles/comments.json';


export default function timeline() {
  return (
    <div className='container'>
      {/* Fetching data from json files for each user */}
      {Posts.map(post => {
        const user = Users.find(user => user.id === post.userId);
        const postComments = Comments.filter(comment => comment.postId === post.id);
        return <Post key={post.id} user={user} post={post} comments={postComments} />;
      })}
    </div>
  )
}
