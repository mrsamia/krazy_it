import React from 'react';
import CardData from '../Data/CardData';
import Card from './Card';

function CardMapping(props) {
    
        return (
            <div className='container'>
            <div className='row'>
                {
                    CardData.map((e)=>{
                        return(
                            <div className='col-4'>
                            <Card
                                title={e.title}
                                text={e.text}
                            />
                            </div>
                        );
                    })
                }
            </div>
        </div>
        );
    
}

export default CardMapping;