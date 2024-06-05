import React, { useState } from 'react';
import { ChatIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/outline';
import './comments.css';

export default function Comments({ comments }) {
    const [showComments, setShowComments] = useState(false);

    const toggleComments = () => {
        setShowComments(!showComments);
    };

    return (
        <div>
            <div className='flex cursor-pointer justify-end items-center pb-4' onClick={toggleComments}>
                <ChatIcon className='w-6 h-6' />
                <p className='text-sm px-1'>{comments.length} Comments</p>
            </div>
            <div className={`comment-section ${showComments ? 'expanded' : ''}`}>
                {comments.map(comment => (
                    <div key={comment.id} className='border-t py-3 flex items-start'>
                        <div className='icon-bg'>
                            <UserIcon className='w-4 h-4 text-white' />
                        </div>
                        <div>
                            <p className='font-medium'>{comment.name}</p>
                            <p className='text-gray-400 text-xs py-2'>{comment.body}</p>
                            <div className='flex items-center mt-2'>
                                <div className=''>
                                    <ThumbUpIcon className='w-4 h-4 text-darkBlue2 cursor-pointer' />
                                </div>
                                    <p className='text-xs text-gray-400 ml-1'>Like</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
