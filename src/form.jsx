import React, { useState } from "react";


const UserForm2 = () => {
    const [provice_option, setprovice_option] = useState("");

    const handleChange = (event) => {
        setprovice_option(event.target.value)
    }

    return (
        <div className="relative h-min-screen w-80% bg-white m-4 p-12  rounded-2xl shadow-black shadow-2xl">
            <div className="items-center justify-center px-100 m-6 ">
                <h className='size-6 font-serif font-bold'>Account Register</h>
            </div>
            <form className="grid grid-cols-2">
                <div className="bg-white shadow-2xl h-60% w-60%">
                    <div className="md:flex grid grid-rows-2">
                        <div>
                            <label>
                                Coorperative Name:
                            </label>
                            <input type="text" className="border-2 rounded-xl shadow-black" />
                        </div>
                        <div>
                            <label htmlFor="registernumber">
                                Registration Number:
                            </label>
                            <input type="number" className="border-2 rounded-xl shadow-black" />
                        </div>
                    </div>
                    <div className="md:flex grid grid-rows-2 ">
                        <div>
                            <label htmlFor="pannumber">
                                Pan Number:
                            </label>
                            <input type="number" className="border-2 rounded-xl shadow-black" />
                        </div>
                        <div>
                            <label htmlFor="districtname">
                                District Name:
                            </label>
                            <input type="text" className="border-2 rounded-xl shadow-black" />
                        </div>
                    </div>
                    <div className="md:flex grid grid-rows-2 ">
                        <div>
                            <label htmlFor="municipalityname">
                                Municipality Name:
                            </label>
                            <input type="text" className="border-2 rounded-xl shadow-black" />
                        </div>
                        <div>
                            <label htmlFor="province">
                                Province Name:
                            </label>

                            <select value={provice_option} onChange={handleChange} className="border-2 rounded-xl shadow-black" >
                                <option value=" "> </option>
                                <option value="Bagmati">Bagmati</option>
                                <option value="Gandagi">Gandagi</option>
                                <option value="Karnali">Karnali</option>
                            </select>

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
                                    <span>to upload</span>
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
        </div>

    );
}

export default UserForm2;


