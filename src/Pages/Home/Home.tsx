import React from "react";
import Hero from "./Hero";
import DreamHome from "./DreamHome";
import DreamSpace from "./DreamSpace";
import InnovativeDesign from "./InnovativeDesign";

export default function Home() {
  return (
    <React.Fragment>
        <Hero/>
        <DreamHome/>
        <DreamSpace/>
        <InnovativeDesign/>
    </React.Fragment>
  )
}
