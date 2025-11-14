import React, { useState } from "react";
import UserForm from "../Components/UserForm";

const Home = () => {
    const [openModal, setopenModal] = useState(true);

    return(
        <>
            <div className="text-2xl flex flex-col items-center justify-center h-screen transition-all ">
                <div >
                    Click for the form buttom!
                <button onClick= {()=>setopenModal(!openModal)} 
                 className="font-bold  text-white bg-[#4D7C0F] border-black-1 px-3  rounded cursor-pointer">
                    Form
                </button>
                </div>
                
                <div>
                    {openModal && (
                        <>
                           
                             <UserForm/>
                           
                        </>
                    )
                }
                </div>
            </div>     
        </>
    )

}
export default Home;