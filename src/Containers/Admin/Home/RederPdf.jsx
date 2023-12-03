import React from "react";
import BasicDocument from "./document";



const RenderPdf = () => {

    console.log(window.location)

    return (
        <>
             <BasicDocument date={window.location}/>
        </>
    )
}

export default RenderPdf;