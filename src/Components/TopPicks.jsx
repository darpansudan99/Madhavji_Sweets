import React, { memo } from 'react';
import topPicks from '../Assests/data/Picks.json'

import TopCard from './cards/topCard';


const TopPicks = () => {

    return (
        <div id="topPicks">
            <div className="container">
                <h1>
                    Our Top Picks
                </h1>
                <div id="topPicksList">
                    <TopCard val={topPicks[0]} />
                    <TopCard val={topPicks[1]} />
                    <TopCard val={topPicks[2]} />
                    <TopCard val={topPicks[3]} />
                    <TopCard val={topPicks[4]} />
                    <TopCard val={topPicks[5]} />
                    <TopCard val={topPicks[6]} />
                    <TopCard val={topPicks[7]} />
                </div>
            </div>
        </div>
    )
}

export default memo(TopPicks) 
