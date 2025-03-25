import React, { useEffect, useState } from "react";
import './Home.css';
import DataDisplay from "../components/DataDisplay";
import Navbar from "../components/Navbar";
import ViewDefinition from "../components/ViewDefinition";
import DateComponent from "../components/DateComponent";
import { useAuth } from "../context/AuthContext";
import { getUserProfile } from "../lib/firestore";

export default function Home() {
    const { user } = useAuth();
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserProfile = async () => {
            if (user) {
                try {
                    setLoading(true);
                    const profile = await getUserProfile(user.uid);
                    setUserProfile(profile);
                } catch (error) {
                    console.error("Error fetching profile:", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        
        fetchUserProfile();
    }, [user]);

    if (loading && user) {
        return <div>Loading...</div>;
    }

    // Determine the name to display
    const displayName = userProfile?.fullName || 
                       (userProfile?.firstName && userProfile?.lastName 
                        ? `${userProfile.firstName} ${userProfile.lastName}`
                        : user?.displayName || "Guest");

    return (
        <>  
            <div>
                <Navbar/>
                <div className="welcome-banner">
                    <h1>Welcome {displayName} to WorkWord!</h1>
                </div>
                <form className="search-container">
                    <input className="search-bar" placeholder="search"></input>
                </form>
                <div className="word-container">
                    <div className="info-box">
                        <div className="date-message">
                            <DateComponent />
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