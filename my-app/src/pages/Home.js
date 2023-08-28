import React from "react"
import './Home.css';
import DataDisplay from "../components/DataDisplay"
import Navbar from "../components/Navbar"


export default function Home() {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="word-container">
                <div className='title-container'>
                    <h1>Word of the Day</h1>
                </div>
                <div className='data-container'>
                    <DataDisplay />
                </div>
            </div>
        </>
    )
}
