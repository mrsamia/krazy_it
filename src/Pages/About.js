import React from 'react';
import Footer from '../Components/Footer';
import HaDeVa from '../Components/HaDeVa';
import HeroSection from '../Components/HeroSection';
import OutlineButton from '../Components/OutlineButton';
import Subtitle from '../Components/Subtitle';

function About(props) {
    return (
        <div>
              <HeroSection name="About Us"/>
              <section className='container'>
              <div className='row as'>
                    <div className='col-6'>
                        <h2 className='a'>As a veterinarian and <br></br>lover of animals.</h2>
                        <Subtitle className='Sub_Title' content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words." />
                        <OutlineButton name="Our Service" />
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <img src={require('../images/img-2.png')} />
                    </div>
                </div>
              </section>
              <HaDeVa/>
              <Footer/>
        </div>
    );
}

export default About;