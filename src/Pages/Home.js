import React from 'react';
import '../Styles/home.css';
import '../Styles/common.css';
import HeroHeading from '../Components/HeroHeading';
import Subtitle from '../Components/Subtitle';
import OutlineButton from '../Components/OutlineButton';
import FilledButton from '../Components/FilledButton';

function Home(props) {
    return (
        <div >
            <section className='sectionWrapper'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <HeroHeading name="First I Wanted to be a veterinarian" />
                            <Subtitle className="white_Sub_Title" content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words. " />
                            <div className='d-flex '>
                                <FilledButton name="Contact Us" />
                                <div className='btn_pad'>
                                    <OutlineButton name="Our Service" />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex justify-content-end'>
                            <img className='img_1' src={require('../images/img-1.png')} />
                        </div>
                    </div>
                </div>
            </section>
            <section className='container'>
                <div className='row as'>
                    <div className='col-6'>
                        <h2 className='a'>As a veterinarian and <br></br>lover of animals.</h2>
                        <Subtitle className='black_sub_title' content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words." />
                        <OutlineButton name="Our Service" />
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <img src={require('../images/img-2.png')}/>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;