import React from 'react';

const Form =() =>{
    return( 
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100">
        <h2 className="mt-y text-lg font-bold text-black-700 bg-green-700 px-8 m-8">LMS</h2>
        <form className='space-y-4 p-6'>
            <div className='flex  gap-4'>
                <label className='block font-medium  gap-4 flex-col '>
                    <span className='mb-1 text-gray-700 font-medium'>सदस्य न. :</span> 
                <input
                    type  = "text"
                    className ="px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue medium cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>सदस्यको नाम : 
                <input
                    type  = "text"
                    className ="px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>ऋणको नया न. : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>पान न  : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>ऋणीको श्रोतको   विवरण : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>ऋणको उदेश्य वा परियोजना  : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>ऋणको माग रकम रु.	: 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>ऋणको किसिम वा बर्गिकरण  : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>Base Rate of Interest on Loan  : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>Loan Amount In Words : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                <label className='block font-medium flex-col gap-4'>जमानी बस्नेको नाम थर	  : 
                <input
                    type  = "text"
                    className =" px-2 w-1/2 border border-gray-300 rounded-lg focus:outline-none cursor-pointer"
                /></label>
                
                
                

            </div>
        </form>
    </div>
    )
       
    }
export default Form;