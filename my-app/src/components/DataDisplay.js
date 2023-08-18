import React from "react";

function DataDisplay(props) {
    const {content} = props; 
    
    return (
        <p>{content}</p>
    );
}
export default DataDisplay;