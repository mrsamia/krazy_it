import React from 'react';
import RecentPostData from '../Data/RecentPostData';
import PostCardItems from './PostCardItems';

function PostCard(props) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    RecentPostData.map((e) => {
                        return (
                            <div className='col-sm-12 col-lg-4'>
                                <PostCardItems
                                    img={e.img}
                                    title={e.title}
                                    date={e.date}
                                    content={e.content}
                                />
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default PostCard;