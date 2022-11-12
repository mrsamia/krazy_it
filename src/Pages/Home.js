import React from 'react';
import '../Styles/home.css';
import '../Styles/common.css';
import Button from '../Components/Button';
import Header from '../Components/Header';
import Subtitle from '../Components/Subtitle';

function Home(props) {
    return (
       <div className='homePageWrapper'>
         <div className='container pt-5'>
            <Header name="First I Wanted to be a veterinarian"/>
            <Subtitle content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "/>
            <Button className="bttn" name="Contact Us"/>
            <Button name="Our Service"/>
        </div>
       </div>
    );
}

export default Home;