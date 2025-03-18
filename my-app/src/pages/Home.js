import React from "react";
import './Home.css';
import DataDisplay from "../components/DataDisplay";
import Navbar from "../components/Navbar";
import ViewDefinition from "../components/ViewDefinition";
import DateComponent from "../components/DateComponent";
import { useAuth } from "../context/AuthContext";


export default function Home() {
    const { user } = useAuth();

    return (
        <>  
            <div>
                <Navbar/>
                <div className="welcome-banner">
                    <h1>Welcome {user ? user.displayName : "Guest"} to WorkWord!</h1>
                </div>
                <form className="search-container">
                    <input className="search-bar" placeholder="search"></input>
                </form>
                <div className="word-container">
                    <div className="info-box">
                        <div className="date-message">
                            < DateComponent />
                        </div>
                        <div className='title-container'>
                            <h1 id="title">Word of the Day</h1>
                        </div>
                        <div className='data-container'>
                            <DataDisplay />
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <ViewDefinition/>
                </div>
                <div className="button-container">
                
                    <button id="view-all-button">View All</button>
                </div>
                <div className="block-containers">
                    <button className="blocks">About</button>
                    <button className="blocks">FAQ</button>
                    <button className="blocks">Blog</button>
                    <button className="blocks">Contact</button>
                </div>
            </div>
        </>
    )
}
