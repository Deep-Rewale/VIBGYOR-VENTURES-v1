import React from "react";
import EventsHero from "../components/Events/EventsHero";
import EventSolutions from "../components/Events/EventSolutions";
import Approach from "../components/Events/Approach";
import Portfolio from "../components/home/Portfolio";
import Brands from "../components/home/Brands";
import Testmonial from "../components/home/Testmonial";

const Event = () => {
  return (
    <>
      <EventsHero />
      <EventSolutions />
      <Approach />
      <Portfolio />
      <Brands />
      <Testmonial />
    </>
  );
};

export default Event;
