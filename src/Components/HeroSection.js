import React from 'react';
import FilledButton from './FilledButton';
import HeroHeading from './HeroHeading';
import OutlineButton from './OutlineButton';
import Subtitle from './Subtitle';

function HeroSection(props) {
    return (
        <div className='HeroSectionWrapper vh-100 '>
            <div className='container'>
                <div className='row d-flex justify-content-center align-items-center'>
                    <div className='col-6'>
                        <HeroHeading name={props.name}/>
                        <Subtitle className="Sub_Title text-white" content="Lorem Ipsum available but the majority have suffered alteration in some form, by injected humour randomised words. " />
                        <div className='d-flex '>
                            <FilledButton name="Contact Us" />
                            <div className='pl_35'>
                                <OutlineButton name="Our Service" />
                            </div>
                        </div>
                    </div>
                    <div className='col-6 d-flex justify-content-end'>
                        <img className='img_1' src={require('../images/img-1.png')} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;