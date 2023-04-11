import { ReactElement } from "react";
import classes from './Show.module.css';
import { ShowProps } from "./Shows";

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
          <div className={classes.location}>{location}</div>
          <div className={classes.venue}>{venueName}</div>
        </div>
        {/* <div> */}
          {/* <MealItemForm onAddToCart={addToCartHandler} /> */}
        {/* </div> */}
      </li>
    )
};

export default Show;