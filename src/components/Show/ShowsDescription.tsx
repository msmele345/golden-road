import React, { ReactElement } from 'react';
import classes from './ShowDescription.module.css';


const ShowsDescription = (): ReactElement => {
    return <div className={classes.description}>
        <h2>Welcome to the Golden Road</h2>
        <p>Track The Road Ahead On Tour</p>
    </div>
};

export default ShowsDescription;