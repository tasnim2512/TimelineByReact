import React from 'react';
import Card from './UI/Card';
import Commnets from './Commnets';
import Users from './Users';

export default function Post({ user, post, comments }) {

  return (
    <Card className='px-8 py-4 bg-white my-4'>

      {/* user component to show user name  */}
      <Users user={user} />

      {/* post title and body by user */}
      <div className='w-full py-4'>
        <h1 className='font-medium '>{post.title}</h1>
        <p className='text-gray-400 text-sm'>{post.body}</p>
      </div>

      {/* comments component to show comments on each post  */}
      <Commnets comments={comments} />

    </Card>
  );
}
