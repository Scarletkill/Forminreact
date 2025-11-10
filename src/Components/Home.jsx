import React from "react";
import UserForm from "../Components/UserForm";

const Home = () => {
    const [openModal, setopenModal] = useState(false);
    const ISopenModal = () =>setopenModal(true)

    return(
        <>
            <div className="font-bold text-2xl text-green-600 flex items-center justify-center h-screen">
                Click for the form buttom!
                <button onClick= {ISopenModal}
                 className="font-extrabold text-white bg-black border-2 rounded cursor-pointer">
                    Form
                </button>
                {openModal && (
                        <>
                            <UserForm/>
                        </>
                    )
                }
            </div>
        </>
    )

}
export default Home;