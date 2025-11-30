import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-52 h-screen fixed left-0 top-0 bg-gray-900 text-white flex flex-col gap-4 p-5">
            <h2 className="text-xl font-semibold">Form's</h2>
            <Link to="/form1">
                <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-300">
                    UserRegistration
                </button>
            </Link>
            <Link to="/form2">
                <button className="w-full bg-white text-black py-2 rounded-md hover:bg-gray-300">
                    Account Registration
                </button>
            </Link>
        </div>
    )
}

export default Sidebar
