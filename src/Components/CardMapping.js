import React from 'react';
import CardData from '../Data/CardData';
import Card from './Card';

function CardMapping(props) {
    
        return (
            <div className='row'>
               {
              CardData.map((e)=>{
                    <div className='col-4'>
                        {
                            <Card 
                            title={e.title}
                            text={e.text}
                            />
                        }
                    </div>
                })
               }
            </div>
        );
    
}

export default CardMapping;