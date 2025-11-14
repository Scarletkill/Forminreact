import React, { useState } from "react";

const UserForm = () => {

    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, IsSetselected] = useState("");


    const Option = ['Batch 01', 'Batch 02'];


    const filteredOptions = Option.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="h-min-screen w-80% bg-white shadow-2xl border-2 m-4 p-12 transition-all hover:bg-[#b4db81] rounded">
            <form>
                <h1>Register User</h1>
                <div className="flex flex-col p-4 m-4 gap-3.5">
                    <div className="relative grid grid-cols-2 ">
                        <label className="">
                            Branch Id:
                        </label>
                        <input type="text" className="border bg-white"
                            value={selected || query}
                            onChange={(e) => {
                                setQuery(e.target.value);
                                IsSetselected("");
                                setOpen(true);
                            }}
                            onClick={() => setOpen(!open)}
                        />
                        {open && (
                            <ul className="absolute mx-68 mt-10 border w-3xs bg-white">
                                {filteredOptions.length > 0 ? (
                                    filteredOptions.map((Option) => (
                                        <li key={Option}
                                            onClick={() => {
                                                IsSetselected(Option);
                                                setOpen(false);
                                                setQuery("");
                                            }}
                                            className="px-3 py-2 hover:bg-blue-100 cursor-pointer">
                                            {Option}
                                        </li>
                                    ))
                                ) : (
                                    <li> Found no option </li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div className="grid grid-cols-2">
                        <label>
                            Branch Name:
                        </label>
                        <input type='text' className="w-ful border bg-white" />
                    </div>
                    <div className="grid grid-cols-2 gap-5">
                        <div className="grid grid-rows-2">
                            <label >
                                User Name:
                            </label>
                            <input type="text" className="bg-white border border-gray-500" />
                        </div>
                        <div className="grid grid-rows-2">
                            <label>
                                User ID:
                            </label>
                            <input type="number" className="bg-white border border-gray-500 justify-around" />
                        </div>
                    </div>
                    <div className="grid grid-cols-4">
                        <div className=" w-30 col-span-1">
                            <label>Is Staff</label>
                            <div className="grid grid-cols-2 gap-4">
                               

                                    <label>
                                        <input type="radio" id="Yes" value="Yes" name="isStaff" />
                                        Yes

                                    </label>
                                    <label>
                                        <input type="radio" id="No" value="No" name="isStaff" />
                                        No

                                    </label>
                                
                        </div>
                            </div>
                            <div className="col-span-1">
                                <div className="grid grid-rows-2">
                                    <label>Staff No.</label>
                                <input list="Number" id="Staffno" name="Staffno" className="bg-white rounded border w-16" />
                                <datalist id="Number">
                                    <option value="01" />
                                    <option value="02" />
                                    <option value="03" />
                                    <option value="04" />
                                    <option value="05" />
                                </datalist>
                                </div>

                            </div>
                            <div className="col-span-2">
                                <div className="">
                                    <label>
                                    Staff Name:
                                </label>
                                </div>
                                <input type="text" className="bg-white rounded border"/>

                            </div>
                    </div>




                </div>
                <div className="flex items-center justify-center">
                    <button className="text-white font-semibold bg-black hover:bg-[#4D7C0F] px-7 py-1.5 rounded justify-center items-center">
                        Sumit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default UserForm;