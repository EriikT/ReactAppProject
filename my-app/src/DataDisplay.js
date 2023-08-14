import React from "react";
import './App.css';

function DataDisplay(props) {
    const {content} = props; 
    
    return (
        <p>{content}</p>
    );
}
export default DataDisplay;