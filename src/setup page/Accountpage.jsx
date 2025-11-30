import React from "react";
import { useNavigate } from "react-router-dom";

const Account = () => {

    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;

        if (value === "Home") {
            navigate("/");
        }
    };

    return (
        <div>
            <h1>This is Accountpage.</h1>
            <button value="Home" onClick={handleChange}>
                Back
            </button>
        </div>
    );
};

export default Account;
