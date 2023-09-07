import React from 'react';

export default function DateComponent() {

    // Create a new Date object to get the current date
    const currentDate = new Date();

    // Define arrays for day names and month names
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // Get the day of the week and date
    const dayOfWeek = daysOfWeek[currentDate.getDay()];
    const date = currentDate.getDate();

    // Get the month and year
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    // Create the message
    const message = `${dayOfWeek} ${date} ${month} ${year}`;

    return (
        <>
        {message}
        </>

    );
}