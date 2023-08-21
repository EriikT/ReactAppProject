import React from "react"
import './Home.css';
import DataDisplay from "../components/DataDisplay"
import Navbar from "../components/Navbar"


export default function Home() {
    return (
        <>
            {/* <div className="">
                <Navbar />
            </div> */}
            <div className='title'>
                <h1>Word of the Day</h1>
            </div>
            <div className='WordContainer'>
                <DataDisplay />
            </div>
        </>
    )
}
