import React from "react";
import Hero from "./Hero";
import DreamHome from "./DreamHome";
import DreamSpace from "./DreamSpace";
import InnovativeDesign from "./InnovativeDesign";
import UniqueDesign from "./UniqueDesign";
import AmazingHome from "./AmazingHome";
import CustomerFeedback from "./CustomerFeedback";

export default function Home() {
  return (
    <React.Fragment>
        <Hero/>
        <DreamHome/>
        <DreamSpace/>
        <InnovativeDesign/>
        <UniqueDesign/>
        <AmazingHome/>
        <CustomerFeedback/>
    </React.Fragment>
  )
}
