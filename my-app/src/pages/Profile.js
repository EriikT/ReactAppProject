import React from "react"
import './Profile.css'
import Navbar from "../components/Navbar"
import Button from "../lib/button";
import { useAuth } from "../context/AuthContext";


export default function Profile() {
    const { user } = useAuth();
    

    return (
        <> 
            <div>
                <Navbar/>
            </div>
           <div className="Profile-Container">
                <div className="bet-container">


                    <div className="Profile__top">
                        <h1>Profile</h1>
                        <div className="edit-p">
                            <div> 
                                <img  className="Profile_img" src= "https://pathwayactivities.co.uk/wp-content/uploads/2016/04/Profile_avatar_placeholder_large-circle-300x300.png" alt=""/>
                            </div>
                            
                            <div className="eh4">
                                <h4>Name:{user ? "\t" + user.displayName : "\tGuest"}</h4>
                                <h4>Email:{user ? "\t" + user.email : "\tGuest"}</h4>
                            </div>

                            <div className="seh4">
                                 <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                                <span className="material-symbols-outlined">
                                chevron_right
                                </span>
                            </div>
                        </div>
                        
                        <hr></hr>
                    </div>
                    
                    <div className="Profile_bottom">

                        <h3>Setting</h3>

                        <div>
                            <h4>Personal Information</h4>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                            <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                        </div>
                        
                        
                        <div>
                            <h4>Login and Security</h4>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                            <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                        </div>
                        
                        <div>
                            <h4>Notifications</h4>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                            <span className="material-symbols-outlined">
                             chevron_right
                            </span>
                        </div>
                        
                        <div>
                            <h4>Personalization</h4>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                            <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                        </div>

                        <div>
                            <h4>Log Out</h4>
                            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                            <span className="material-symbols-outlined">
                            chevron_right
                            </span>
                        </div>
                        <div>
                            <h4>
                                <Button/>
                            </h4>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}