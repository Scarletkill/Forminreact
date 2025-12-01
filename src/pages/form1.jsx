import React from "react";
import {useState} from "react";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
import UserForm from "../modals/UserForm";

const Form1 = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <div className="flex ml-56">
            <Sidebar />

            <section className="relative w-full max-w-5xl mx-auto mt-10 items-center justify-center">
                <h1 className="text-2xl font-semibold mb-6">Cooperative Information</h1>
                <div className="p-6">
                    <h1>If you haven't user Register!Click
                        <u onClick={() => setOpenModal(!openModal)} >here</u>
                    </h1>
                    {openModal && (
                        <div className="absolute z-10">
                            <UserForm />
                        </div>
                    )}
                </div>

                <form className="border rounded-xl p-8 shadow-sm space-y-10">

                    {/* Two Column Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* LEFT SIDE */}
                        <div className="space-y-6">
                            {/* Cooperative Name */}
                            <label className="block">
                                <span className="text-sm font-medium">Cooperative Name:</span>
                                <input
                                    type="text"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* Registration Number */}
                            <label className="block">
                                <span className="text-sm font-medium">Registration Number:</span>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* Registration Date */}
                            <label className="block">
                                <span className="text-sm font-medium">Registration Date:</span>
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* PAN Number */}
                            <label className="block">
                                <span className="text-sm font-medium">PAN Number:</span>
                                <input
                                    type="number"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-6">

                            {/* Type */}
                            <label className="block">
                                <span className="text-sm font-medium">Cooperative Type:</span>
                                <select
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                >
                                    <option value="">Select Cooperative Type</option>
                                    <option value="Saving&Creadit">Saving & Credit Cooperative</option>
                                    <option value="Multipurpose">Multipurpose Cooperative</option>
                                    <option value="Agriculture">Agriculture</option>
                                </select>
                            </label>

                            {/* Registration Certificate */}
                            <label className="block">
                                <span className="text-sm font-medium">Registration Certificate:</span>
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* Citizenship */}
                            <label className="block">
                                <span className="text-sm font-medium">Chairperson Citizenship:</span>
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* Logo */}
                            <label className="block">
                                <span className="text-sm font-medium">Cooperative Logo:</span>
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>

                            {/* PAN Certificate */}
                            <label className="block">
                                <span className="text-sm font-medium">PAN Certificate:</span>
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    className="border border-gray-300 rounded-lg focus:ring-blue-400 focus:outline-none w-full"
                                />
                            </label>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="flex justify-between mt-6">
                        <button className="bg-black text-white font-semibold px-8 py-2 rounded-xl shadow hover:bg-[#51791d] transition">
                            Submit
                        </button>

                        <Link to="/">
                            <button className="bg-black text-white font-semibold px-8 py-2 rounded-xl shadow hover:bg-[#51791d] transition">
                                Back
                            </button>
                        </Link>
                    </div>

                </form>
            </section>
        </div>
    );
};

export default Form1;
