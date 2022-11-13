import React from 'react';
import Heading from './Heading';
import PostCard from './PostCard';
import SubHeading from './SubHeading';

function RecentPost(props) {
    return (
        <div className='container' style={{ paddingBottom: "100px" }}>
            <Heading className="heading pt_100" name="Recent Posts" />
            <SubHeading className="sub_heading text-center" name=" Lorem Ipsum available, but the majority have suffered alteration in some form. " />
            <PostCard />
        </div>
    );
}

export default RecentPost;