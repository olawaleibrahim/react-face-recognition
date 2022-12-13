import React from "react";

const Navigation = ({ onRouteChange }) => {
    return (
        <nav className="f3 link dim black underline pa3 pointer"
             style={{display: "flex", justifyContent: "flex-end"}}>
            <p onClick={() => onRouteChange("signin")}>Sign Out</p>
        </nav>
    )
}

export default Navigation;