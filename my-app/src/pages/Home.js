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
            <form className="search-container">
                <input className="search-bar" placeholder="search"></input>
            </form>
            <div className="word-container">
                <div className="info-box">
                    <div className='title-container'>
                        <h1 id="title">Word of the Day</h1>
                    </div>
                    <div className='data-container'>
                        <DataDisplay />
                    </div>
                </div>
            </div>
            <div className="button-container">
                <button id="view-all-button">View All</button>
            </div>
            <div className="block-containers">
                <button className="blocks">Button</button>
                <button className="blocks">Button</button>
                <button className="blocks">Button</button>
                <button className="blocks">Button</button>    
            </div>
        </>
    )
}
