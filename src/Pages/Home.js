import React from 'react';
import '../Styles/home.css';
import '../Styles/common.css';
import Subtitle from '../Components/Subtitle';
import OutlineButton from '../Components/OutlineButton';
import Heading from '../Components/Heading';
import SubHeading from '../Components/SubHeading';
import HeroSection from '../Components/HeroSection';
import Card from '../Components/Card';
import CardMapping from '../Components/CardMapping';

function Home(props) {
    return (
        <div >
            <section className='HeroSectionWrapper'>
               <HeroSection/>
            </section>
            <section className='container'>
                <div className='row as'>
                    <div className='col-6'>
                        <h2 className='a'>As a veterinarian and <br></br>lover of animals.</h2>
                        <Subtitle className='black_sub_title' content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words." />
                        <OutlineButton name="Our Service" />
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <img src={require('../images/img-2.png')} />
                    </div>
                </div>
            </section>
            <section className='sectionWrapper'>
                <div className='container'>
                    <Heading className="white_heading pt_100" name="Title Here" />
                    <SubHeading className="white_sub_heading text-center" name=" Lorem Ipsum available, but the majority have suffered alteration in some form. " />
                  <Card/>
                  <CardMapping/>
                </div>
            </section>
        </div>
    );
}

export default Home;