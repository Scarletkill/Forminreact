import React, { useState } from "react";

const UserForm = () => {

    const [open, setOpen] = useState(false);
    const[query, setQuery] =useState("");
    const[selected, IsSetselected] = useState("");

    const Option = ['apple','banana'];

    const filteredOptions = Option.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div>
            <form>
                <h1>Register User</h1>
                <div>
                    <label>
                        Branch Id:
                        <input type="text" className="border mx-2 px-2"
                            value={selected || query}
                            onChange={(e)=>{
                                setQuery(e.target.value);
                                IsSetselected("");
                                setOpen(true);
                            }}
                            onClick={()=>setOpen(!open)}
                         />
                    </label>
                    {open && (
                        <ul>
                            {filteredOptions.length > 0 ? (
                                filteredOptions.map((Option)=>(
                                    <li key={Option} 
                                    onClick={() => {IsSetselected(Option);
                                        setOpen(false);
                                        setQuery("");}}
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
                <label>
                    Branch Name:
                    <input type='text' className="w-ful border"/>
                </label>
            </form>
        </div>
    )
}

export default UserForm;