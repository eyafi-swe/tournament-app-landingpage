import React from "react";
import { RxCross2 } from "react-icons/rx";

const CommingSoonModal = ({
    message = "Comming Soon",
    setShowModal
}) => {
    return (
        <>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
                <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative p-5  mx-auto bg-white rounded-md shadow-lg w-1/4 ">
                        <div className="flex justify-end">
                            <RxCross2
                                className="text-2xl cursor-pointer"
                                onClick={() => setShowModal(false)}
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <div className="w-10">

                            </div>
                            <h2 className="text-center text-3xl font-semibold mt-5 text-black">
                                {message}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommingSoonModal;