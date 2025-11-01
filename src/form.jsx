import React from 'react';
import { useState } from 'react';

const Form = () => {
    const options = ["sadhasye ko num", "From backend"]
    const [query, setQuery] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = options.filter(opt =>
        opt.toLowerCase().includes(query.toLowerCase())
    );
    return (
        <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
            <h2 className="mt-y text-lg font-bold text-black-700 bg-green-700 px-8 m-8">LMS</h2>
            <form className='bg-white rounded-lg shadow-lg w- 1/4 gap-8 grid grid-row-3 m-8 p-8'>
                <div className=' flex flex-row'>
                    <label className='block font-small mb-2 gap-2 flex-col '>
                        <span className='mb-1 text-gray-700 font-medium'>सदस्य न. :</span>
                        <input
                            type="text"
                            value={query}
                            placeholder='type or choose'
                            className="px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue medium cursor-pointer"
                            onChange={(e) => {
                                setQuery(e.target.value)
                                setOpen(true)
                            }}
                            onFocus={() => setOpen(true)}
                        /></label>
                    {open && (
                        <div className='absolute w-1/3 bg-white border rounded shadow m-8 overflow-y-auto'>
                            {filtered.length === 0 && (
                                <p className='px-3 py-2 text-gray-500'>No matches...</p>
                            )}
                            {filtered.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => {
                                        setQuery(opt)
                                        setOpen(false)
                                    }} className='block w-full text-left px-3 py-2 hover:bg-gray-100'>
                                    {opt}
                                </button>
                            ))}
                        </div>
                    )}
                    <label className='block font-medium mb-2'>सदस्यको नाम :
                        <input
                            type="text"
                            className="px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>ऋणको नया न. :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>पान न  :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                </div>
                <div className='flex flex-row gap-4'>
                    <label className='block font-medium mb-2'>ऋणीको श्रोतको विवरण :
                        <input
                            type="text"
                            className="  border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>ऋणको उदेश्य वा परियोजना  :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>ऋणको माग रकम रु.	:
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>ऋणको किसिम वा बर्गिकरण  :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                </div>
                <div className='flex flex-row'>
                    <label className='block font-medium mb-2'>Base Rate of Interest on Loan  :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>Loan Amount In Words :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>
                    <label className='block font-medium mb-2'>जमानी बस्नेको नाम थर	  :
                        <input
                            type="text"
                            className=" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                        /></label>

                </div>
            </form>
        </div>
    )

}
export default Form;