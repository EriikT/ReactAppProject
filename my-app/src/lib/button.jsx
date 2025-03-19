import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Button = () => {
    const { user, loading, signIn, signOut } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        if (isLoading) return; // Prevent multiple clicks

        console.log("Button clicked. User:", user);
        setIsLoading(true); // Set loading state

        try {
            if (user) {
                console.log("Signing out...");
                await signOut(); // Sign out
                console.log("Signed out. Navigating to /");
                navigate("/"); // Navigate to "/" after sign-out
            } else {
                console.log("Signing in...");
                await signIn(); // Sign in
                console.log("Signed in. Navigating to /Home");
                navigate("/Home"); // Navigate to "/Home" after sign-in
            }
        } catch (error) {
            console.error("Error during sign-in/sign-out:", error);
        } finally {
            console.log("Reset loading state");
            setIsLoading(false); // Reset loading state
        }
    };

    return (
        <>
            {!loading && (
                <button
                    type="button"
                    onClick={handleClick}
                    disabled={isLoading} // Disable button while loading
                >
                    {isLoading ? "Loading..." : user ? "Sign Out" : "Sign In With Google"}
                </button>
            )}
        </>
    );
};

export default Button;