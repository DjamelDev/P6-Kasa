import React from "react";
import abouts from '../../assets/data/logements.json';
import Collapse from "../../components/collapse";


function About() {
    return (
        abouts.map((about, index) => {
            return <Collapse key={index} about={about}></Collapse>
       })
    )
}

export default About