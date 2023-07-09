import React, { Fragment } from "react";

function Collapse({about}) {
    return (
        <Fragment>
        <div> {about.title}</div> 
        <div> {about.description}</div> 
       </Fragment>
    )
}

export default Collapse;