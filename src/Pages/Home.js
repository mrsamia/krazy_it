import React from 'react';
import '../Styles/home.css';
import '../Styles/common.css';
import Subtitle from '../Components/Subtitle';
import OutlineButton from '../Components/OutlineButton';
import Heading from '../Components/Heading';
import SubHeading from '../Components/SubHeading';
import HeroSection from '../Components/HeroSection';
import CardMapping from '../Components/CardMapping';
import TeamCard from '../Components/TeamCard';
import HaDeVa from '../Components/HaDeVa';
import Footer from '../Components/Footer';
import RecentPost from '../Components/RecentPost';

function Home(props) {
    return (
        <div >
            <section>
                <HeroSection name="First I Wanted to be a veterinarian" />
            </section>
            <section className='container'>
                <div className='row as'>
                    <div className='col-sm-12 col-lg-6'>
                        <h2 className='a'>As a veterinarian and <br></br>lover of animals.</h2>
                        <Subtitle className='Sub_Title' content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words." />
                        <OutlineButton name="Our Service" />
                    </div>
                    <div className='col-sm-12 col-lg-6 d-flex justify-content-end'>
                        <img src={require('../images/img-2.png')} />
                    </div>
                </div>
            </section>
            <section className='sectionWrapper '>
                <div className='container '>
                    <Heading className="heading text-white pt_100" name="Title Here" />
                    <SubHeading className="sub_heading text-center text-white" name=" Lorem Ipsum available, but the majority have suffered alteration in some form. " />
                    <CardMapping />
                </div>
            </section>
            <section>
                <div className='container pb_100'>
                    <Heading className="heading pt_100" name="The vetcare team" />
                    <SubHeading className="sub_heading text-center" name=" Lorem Ipsum available, but the majority have suffered alteration in some form. " />
                    <TeamCard />
                </div>
            </section>      
                <HaDeVa />
                <RecentPost name="Recent Posts" />
                <Footer />
        

        </div>
    );
}

export default Home;