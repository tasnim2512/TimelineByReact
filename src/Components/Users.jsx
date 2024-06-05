import React from 'react';
import { Link } from 'react-router-dom';
import UserImage from '../Images/User.jpg';

export default function Users({ user }) {
  return (
    <div className='flex items-center'>
      <img src={UserImage} alt='User' className='w-10 h-10 rounded-full' />
      <div className='px-2'>
        {/* userdetail to show user specifiq posts and info of user by user id */}
        <Link to={`/user/${user.id}`}>
          <h1 className='font-medium text-sm w-full username cursor-pointer'>{user.name}</h1>
        </Link>
        <p className='text-gray-400 text-xs'>@{user.username}</p>
      </div>
    </div>
  );
}
