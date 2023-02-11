import { Card } from '@mui/material';
import React, { ReactElement } from 'react'
import Show from './Show';
import classes from './UpcomingConcerts.module.css';


const PLACEHOLDER_DATA = [
    {
        id: 1,
        bandName: 'Phish',
        location: 'Los Angeles',
        tourName: 'phish-spring-tour',
        venueName: 'Hollywood Bowl',
        date: '4/21/2023'
    },
    {
        id: 2,
        bandName: 'Goose',
        location: 'Chicago',
        tourName: 'goose-spring-tour',
        venueName: 'Salt-Shed',
        date: '4/14/2023'
    }
]

const UpcomingConcerts = (): ReactElement => {

    const tempShows = PLACEHOLDER_DATA.map(show => (
        <Show
          key={show.id}
          id={show.id}  
          bandName={show.bandName}  
          location={show.location}  
          tourName={show.tourName}  
          venueName={show.venueName}  
          date={show.date}  
        /> 
    ))

    return <div className={classes.shows}>
        <Card>
            <ul>{tempShows}</ul>
        </Card>
    </div>
};

export default UpcomingConcerts;