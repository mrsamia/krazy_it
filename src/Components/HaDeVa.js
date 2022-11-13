import React from 'react';
import Heading from './Heading';

function HaDeVa(props) {
    return (
        <div className='bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                       <div className='icon'>
                       <img  src={require('../images/icon-1.png')}/>
                       </div>
                        <p className='font_37 text-white text-center'>+347934</p>
                        <p className='font_37 text-white  text-center'>Happy Clients</p>
                    </div>
                    <div className='col-4'>
                       <div className='icon'>
                       <img  src={require('../images/icon-2.png')}/>
                       </div>
                        <p className='font_37 text-white  text-center'>+45382</p>
                        <p className='font_37 text-white  text-center'>Departament</p>
                    </div>
                    <div className='col-4'>
                       <div className='icon'>
                       <img  src={require('../images/icon-3.png')}/>
                       </div>
                        <p className='font_37 text-white  text-center'>+54762</p>
                        <p className='font_37 text-white  text-center'>Vaccinations</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HaDeVa;