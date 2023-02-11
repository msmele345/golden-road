import React, { ReactElement } from "react";
import ShowsDescription from "./ShowsDescription";
import UpcomingConcerts from "./UpcomingConcerts";
 
export interface ShowProps {
    id: number;
    bandName: string;
    location: string;
    tourName?: string;
    venueName: string;
    date?: string | Date;
    venueLink?: string;
}

const Shows = (): ReactElement => {
    return <>
        <ShowsDescription/>
        <UpcomingConcerts/>
    </>
};

export default Shows;