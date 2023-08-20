import React from "react"
import './Home.css';
import DataDisplay from "../components/DataDisplay"


export default function Home() {
    return (
        <>
            <div className='title'>
                <h1>Word of the Day</h1>
            </div>
            <div className='WordContainer'>
                 <DataDisplay/>
            </div>
        </>
    )
}
