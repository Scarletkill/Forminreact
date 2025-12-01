import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";


const UserForm2 = ({closeDetail}) => {
    const [provice_option, setprovice_option] = useState("");
    const navigate = useNavigate(); 

    const handleChange = (event) => {
        setprovice_option(event.target.value)
    }
    
    const handleCancel = (event) => {
            const value = event.target.value;

            if (value === "Home") {
                navigate("/");
            }
        }
        
    return (
        <div className="h-min-screen w-60% bg-white m-4 p-12  rounded-2xl shadow-black shadow-2xl">
            <div className="items-center justify-center px-100 m-6 ">
                <h className='size-6 font-serif font-bold'>Official Details</h>
            </div>
            <form className="grid grid-cols-2 gap-4">
                <div>
                    <div className="md:flex grid grid-rows-2">
                        <div>
                            <label>
                                Coorperative Name:
                            </label>
                            <input type="text" className="border-2 rounded-xl shadow-black w-64" />
                        </div>
                        <div>
                            <label htmlFor="registernumber">
                                Reg Number:
                            </label>
                            <input type="number" className="border-2 rounded-xl shadow-black w-64" />
                        </div>
                    </div>
                    <div className="md:flex grid grid-rows-2 ">
                        <div>
                            <label htmlFor="pannumber">
                                Pan Number:
                            </label>
                            <input type="number" className="border-2 rounded-xl shadow-black w-62" />
                        </div>
                        <div>
                            <label htmlFor="districtname">
                                District:
                            </label>
                            <input type="text" className="border-2 rounded-xl shadow-black w-64 " />
                        </div>
                    </div>
                    <div className="md:flex grid grid-rows-2 ">
                        <div>
                            <label htmlFor="pannumber">
                                VDC/Municipality
                            </label>
                            <input type="number" className="border-2 rounded-xl shadow-black w-62" />
                        </div>
                        <div>
                            <label htmlFor="districtname">
                                Province:
                                <select value={provice_option} onChange={handleChange} className="border-2 rounded-xl shadow-black w-64" >
                                    <option value=" "></option>
                                    <option value="Bagmati">Bagmati</option>
                                    <option value="Gandagi">Gandagi</option>
                                    <option value="Karnali">Karnali</option>
                                </select>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="px-20">
                    <div className="w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6" id="dropzone">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" />
                        <div className="text-center">
                            <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt />
                            <h3 className="mt-2 text-sm font-medium text-gray-900">
                                <label htmlFor="file-upload" className="relative cursor-pointer">
                                    <span>Drag and drop</span>
                                    <span className="text-indigo-600"> or browse</span>
                                    <span>to upload your citizenship.</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                            </h3>
                            <p className="mt-1 text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                            </p>
                        </div>
                        <img src className="mt-4 mx-auto max-h-40 hidden" id="preview" />
                    </div>
                </div>
            </form>
            <div className="flex items-center justify-around">
                <button className="text-white font-semibold bg-black shadow-2xl shadow-black hover:bg-[#51791d] px-7 py-1.5 rounded-2xl justify-center items-center">
                    Sumit
                </button>
                <button value="Home" onClick={closeDetail} className="text-white font-semibold bg-black shadow-2xl shadow-black  hover:bg-[#51791d] px-7 py-1.5 rounded-2xl justify-center items-center">
                    Cancel
                </button>
            </div>
        </div>

    );
}

export default UserForm2;



