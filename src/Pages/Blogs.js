import React from 'react';
import FilledButton from '../Components/FilledButton';
import Footer from '../Components/Footer';
import Heading from '../Components/Heading';
import HeroSection from '../Components/HeroSection';
import RecentPost from '../Components/RecentPost';
import SubHeading from '../Components/SubHeading';

function Blogs(props) {
    return (
        <div>
            <HeroSection name="Blogs you may like " />
            <RecentPost name="Latest Blogs" />
            <section className='sectionWrapper pb_100'>
                <div className='container'>
                    <Heading className="heading text-white pt_100" name="Title Here" />
                    <SubHeading className="sub_heading text-center text-white" name=" Lorem Ipsum available, but the majority have suffered alteration in some form. " />
                    <div className='row'>
                        <div className='col-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={require('../images/dog-1.png')} />
                            </div>
                            <div className='padTB_30'>
                                <h3 className='text-white font_37 text-center'>$50  $30</h3>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <FilledButton name="Buy Now" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={require('../images/dog-2.png')} />
                            </div>
                            <div className='padTB_30'>
                                <h3 className='text-white font_37 text-center'>$40  $25</h3>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <FilledButton name="Buy Now" />
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='d-flex justify-content-center'>
                                <img src={require('../images/dog-3.png')} />
                            </div>
                            <div className='padTB_30'>
                                <h3 className='text-white font_37 text-center'>$45  $20</h3>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <FilledButton name="Buy Now" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Blogs;