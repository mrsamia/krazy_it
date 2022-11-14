import React from 'react';
import Footer from '../Components/Footer';
import HaDeVa from '../Components/HaDeVa';
import HeroSection from '../Components/HeroSection';
import OutlineButton from '../Components/OutlineButton';
import Subtitle from '../Components/Subtitle';

function About(props) {
    return (
        <div>
            <HeroSection name="About Us" />
            <section className='container'>
                <div className='row as'>
                    <div className='col-6  '>
                        <img src={require('../images/img-2.png')} />
                    </div>
                    <div className='col-6 flex-row-reverse '>
                        <h2 className='a text-end'>As a veterinarian and <br></br>lover of animals.</h2>
                        <Subtitle className='Sub_Title text-end' content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words." />
                        <div className='d-flex justify-content-end'>
                            <OutlineButton name="Our Service" />
                        </div>
                    </div>
                </div>
            </section>
            <HaDeVa />
            <Footer />
        </div>
    );
}

export default About;