import React, { useState } from "react";
import UserForm from "../Components/UserForm";
import UserForm2 from "../form";

const Home = () => {
    const [openModal, setopenModal] = useState(false);
    const [detailModal, setDetailModal] = useState(false);

    return (
        <>
            <div className="text-2xl flex flex-col items-center justify-center h-screen gap-3 ">
                <div className="items-center justify-center" >
                    Click for the Forms!
                    <button onClick={() => setopenModal(!openModal)}
                        className="font-bold  text-white bg-[#4D7C0F] border-black-1 px-3  rounded-2xl cursor-pointer">
                        Registration Form
                    </button>
                    <div>
                        {openModal && (
                            <>

                                <UserForm />

                            </>
                        )
                        }
                    </div>
                </div>


                <div className="items-center justify-center ">
                    <div>
                        <h1>
                            Click for the Details Forms!
                            <button onClick={() => setDetailModal(!detailModal)} className="font-bold text-white bg-[#4D7C0F] border-black-1 px-3  rounded-2xl cursor-pointer" >
                                Official Details
                            </button>
                        </h1>
                    </div>
                    <div>
                        {detailModal && (
                            <>
                                <UserForm2 />
                            </>
                        )}
                    </div>
                </div>
            </div>

        </>
    )

}
export default Home;