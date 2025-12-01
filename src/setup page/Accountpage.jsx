import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/sidebar";

const Account = () => {

    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;

        if (value === "Home") {
            navigate("/");
        }
    };

    return (
        <div className="px-56 m-10">
            <Sidebar/>
            <h1>This is Accountpage.</h1>
            <button value="Home" onClick={handleChange}>
                Back
            </button>
        </div>
    );
};

export default Account;
