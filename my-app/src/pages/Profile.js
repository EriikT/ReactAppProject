import React from "react"
import './Profile.css'


export default function Profile() {
    return (
        <>
           <div className="Profile">
                <div className="Profile__top">
                    <h1>Profile</h1>
                    <h3>Name</h3>
                    <h3>View My Profile</h3>
                    <hr></hr>
                </div>
                <div className="Profile_bottom">
                    <h4>Personal Information
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        chevron_right
                        </span>
                    </h4>
                    <h4>Login and Security
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        chevron_right
                        </span>
                    </h4>
                    <h4>Notifications
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        chevron_right
                        </span>
                    </h4>
                    <h4>Personalization
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        chevron_right
                        </span>
                    </h4>
                    <h4>Log Out
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
                        <span class="material-symbols-outlined">
                        chevron_right
                        </span>
                    </h4>
                </div>
            


           </div>
        </>
    )
}