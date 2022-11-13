import React from 'react';
import FooterData from '../Data/FooterData';
import FooterItems from './FooterItems';
import '../Styles/footer.css'

function Footer(props) {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between'>
                <div className='d-flex'>
                    <div className='about-wrapper'>
                        <div className='header font_37 text-white  pb_40'>About</div>
                        <FooterItems items={FooterData.about} />
                    </div>

                    <div className='service-wrapper'>
                        <div className='header font_37 text-white pb_40'>Service</div>
                        <FooterItems items={FooterData.service} />
                    </div>
                </div>

                <div className='social-wrapper'>
                    <div className='header font_37 text-white d-flex justify-content-end'>Title here</div>
                    <div className='font_25 text-white'> Lorem Ipsum available, but the majorit </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;