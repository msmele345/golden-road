import React, { ReactElement } from "react";
import { ShowProps } from "./Shows";
import classes from './Show.module.css'
 

const Show = ({
    id,
    bandName,
    location,
    tourName,
    venueName,
    date
}: ShowProps): ReactElement => {
    return (
        <li className={classes.show}>
        <div>
          <h3>{bandName}</h3>
          <div className={classes.band}>{location}</div>
          <div className={classes.venue}>{venueName}</div>
        </div>
        <div>
          {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
        </div>
      </li>
    )
};

export default Show;