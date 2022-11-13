import React from 'react';
import TeamCardData from '../Data/TeamCardData';
import Icon from './Icon';
import TeamCardItems from './TeamCardItems';

function TeamCard(props) {
    return (
        <div className='container'>
            <div className='row'>
                {
                    TeamCardData.map((e) => {
                        return (
                            <div className='col-4'>
                                <TeamCardItems
                                    img={e.img}
                                    name={e.name}
                                    title={e.title}
                                />
                            </div>
                        );
                    })
                }
            </div>

        </div>
    );
}

export default TeamCard;