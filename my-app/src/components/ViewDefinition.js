import React from "react";
import "./ViewDefinition.css"

export default function ViewDefinition(){
    function togglePopup(){
        document.getElementById("popup-2").classList.toggle("active");
    }
    return(
        <>
            <div className="popup" id="popup-2">
                <div className="overlay"></div>
                <div className="popup_content">
                    <div className="close-btn " onClick={togglePopup}>&times;</div>
                    <h1 className="fh">Word</h1>
                    <p>Definition</p>
                </div>
            </div>
            <h3 className="sh3" onClick={togglePopup}>View Definition</h3>

        </>
    )
}