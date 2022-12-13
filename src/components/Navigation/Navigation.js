import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav className="f3 link dim black underline pa3 pointer"
                 style={{display: "flex", justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange("signout")}>Sign Out</p>
            </nav>
        )
    } else {
        return (
            <nav className="f3 link dim black underline pa3 pointer"
                 style={{display: "flex", justifyContent: "flex-end"}}>
                <p onClick={() => onRouteChange("register")}>Register</p>
                <p onClick={() => onRouteChange("signin")}>Sign In</p>
            </nav>
        )
    }
    
}

export default Navigation;