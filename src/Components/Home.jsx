import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import UserForm2 from "../form";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [openModal, setOpenModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);
    const [setup, setSetup] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        const value = event.target.value;
        setSetup(value);

        if (value === "Account Setup") {
            navigate("/Account");
        }
    };

    return (
        <>
            <div className="relative text-2xl flex flex-col items-center justify-center h-screen gap-3">
                
                {/* Registration Form */}
                <div>
                    Click for the Forms!
                    <button
                        onClick={() => setOpenModal(!openModal)}
                        className="font-bold text-white bg-[#4D7C0F] px-3 rounded-2xl cursor-pointer ml-2"
                    >
                        Registration Form
                    </button>
                </div>

                {openModal && (
                    <div className="absolute z-10">
                        <UserForm />
                    </div>
                )}

                {/* Details Form */}
                <div>
                    <h1>
                        Click for the Details Forms!
                        <button
                            onClick={() => setDetailModal(!detailModal)}
                            className="font-bold text-white bg-[#4D7C0F] px-3 rounded-2xl cursor-pointer ml-2"
                        >
                            Official Details
                        </button>
                    </h1>
                </div>

                {detailModal && (
                    <div className="absolute z-10">
                        <UserForm2 />
                    </div>
                )}

                {/* System Setup Dropdown */}
                <div className="mt-5">
                    <h1>
                        Click for the System Setup Update
                        <select
                            value={setup}
                            onChange={handleChange}
                            className="font-bold text-white bg-[#4D7C0F] px-3 rounded-2xl cursor-pointer ml-2"
                        >
                            <option value="" disabled>
                                -- Select Setup Type --
                            </option>
                            <option value="Account Setup">Account Setup</option>
                            <option value="Item Setup">Item Setup</option>
                            <option value="Group Setup">Group Setup</option>
                            <option value="System">System</option>
                            <option value="Staff">Staff</option>
                        </select>
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Home;
