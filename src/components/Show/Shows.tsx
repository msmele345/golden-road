import React, { ReactElement, useEffect } from "react";
import ShowsDescription from "./ShowsDescription";
import ConcertCalendar from "./ConcertCalendar";
import AddShowForm from "../Form/AddShowForm";

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

  useEffect(() => {
      //apiCall here
      //set shows on concertCalendar
  }, [])


  const onAddConcert = () => {
    ///on add concert
  }

  return (
    <>
      <ShowsDescription/>
      <ConcertCalendar/>
      <AddShowForm />
    </>
  );
};

export default Shows;
