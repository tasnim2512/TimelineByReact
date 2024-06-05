import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Users from '../JsonFiles/users.json';
import Posts from '../JsonFiles/posts.json';
import Comments from '../JsonFiles/comments.json';
import Card from './UI/Card';
import { ChevronLeftIcon } from '@heroicons/react/outline';
import UserImage from '../Images/User.jpg';

export default function UserDetail() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const [expandedPostId, setExpandedPostId] = useState(null);
    const [activeTab, setActiveTab] = useState('posts');

    const user = Users.find(user => user.id.toString() === userId);
    const userPosts = Posts.filter(post => post.userId.toString() === userId);
    const userComments = Comments.filter(comment => userPosts.some(post => post.id === comment.postId));

    const toggleComments = (postId) => {
        setExpandedPostId(expandedPostId === postId ? null : postId);
    };

    return (
        <div className='container'>
            {user ? (
                <>
                    <div className='flex justify-between dark:text-white'>
                        <div className='flex items-center'>
                            <img src={UserImage} alt='User' className='w-32 h-32 rounded-full' />
                            <h1 className='text-2xl font-bold px-2'>{user.name} <br /> <span className='text-sm text-gray-500 font-medium px-2'>@{user.username}</span></h1>
                        </div>
                        <div>
                            <button className='flex items-center font-medium mb-4 px-2 text-xs py-1 rounded-md text-white bg-darkBlue2' onClick={() => navigate(-1)}>
                                <ChevronLeftIcon className='w-4 h-4 mr-1' /> Back to Timeline
                            </button>
                        </div>
                    </div>

                    <div className='flex space-x-4 border-b dark:text-white'>
                        <h2 className={`text-lg font-semibold mt-4 cursor-pointer border-t border-l border-r rounded-t-md px-2 ${activeTab === 'posts' ? 'bg-darkBlue2 text-white' : ''}`}
                            onClick={() => setActiveTab('posts')}>
                            Posts
                        </h2>
                        <h2 className={`text-lg font-semibold mt-4 cursor-pointer border-t border-l border-r rounded-t-md px-2 ${activeTab === 'about' ? 'bg-darkBlue2 text-white' : ''}`}
                            onClick={() => setActiveTab('about')}>
                            About
                        </h2>
                    </div>

                    {/* User's Posts */}
                    {activeTab === 'posts' && userPosts.map(post => (
                        <Card key={post.id} className='border p-4 mt-4 bg-white'>
                            <h3 className='font-semibold'>{post.title}</h3>
                            <p className='text-gray-600'>{post.body}</p>
                            <button className='text-blue-600 font-medium mt-2'
                                onClick={() => toggleComments(post.id)} >
                                {expandedPostId === post.id ? 'Hide Comments' : 'Show Comments'}
                            </button>
                            {expandedPostId === post.id && (
                                <div className=''>
                                    {userComments
                                        .filter(comment => comment.postId === post.id)
                                        .map(comment => (
                                            <div key={comment.id} className='border-t pt-2 mt-2'>
                                                <p className='font-medium'>{comment.name}</p>
                                                <p className='text-gray-400 text-sm'>{comment.body}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </Card>
                    ))}

                    {/* User's info */}
                    {activeTab === 'about' && (
                        <Card className='w-full p-4 mt-4 dark:text-white'>
                            <div className='py-4'>
                                <h1 className='font-medium'>Email</h1>
                                <p className='text-gray-600 dark:text-white'>{user.email}</p>
                            </div>
                            <div className='py-4 border-t'>
                                <h1 className='font-medium'>Phone</h1>
                                <p className='text-gray-600 dark:text-white'>{user.phone}</p>
                            </div>
                            <div className='py-4 border-t'>
                                <h1 className='font-medium'>Website</h1>
                                <p className='text-gray-600 dark:text-white'>{user.website}</p>
                            </div>
                        </Card>
                    )}
                </>
            ) : (
                <p className='text-xl font-medium text-red-800'>User not found!</p>
            )}
        </div>
    );
}
