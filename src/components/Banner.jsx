import { useState } from "react";
import heroImage from "../assets/heroImage.webp";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";


const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    color: "white",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    border: "1px solid #110A03",
    backgroundColor: "#02080B",
    p: 4,
};

const Banner = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <section className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] ">
            <div
                className="lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover bg-center"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                }}
            >
                <h1 className=" text-white lg:text-[38px] md:text-[38px] text-[30px] font-montserrat font-[700] my-4">
                    Deploying your Tokens
                    <br />with great ease
                </h1>

                <div className="mt-6">
                    <button
                        className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] rounded-3xl p-4 text-white mr-4 lg:text-[20px] md:text-[20px] text-[18px]"
                        onClick={handleOpen}
                    >
                        Deploy Token
                    </button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <input
                                type="text"
                                placeholder="Token Name"
                                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Token Symbol"
                                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Token Sum"
                                className="text-white rounded-lg w-[100%] p-4 bg-transparent border border-white backdrop-blur-lg mb-4 outline-none"
                            />
                            <button className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] hover:bg-[#15BFFD] text-white py-2 px-4 rounded-lg lg:text-[20px] md:text-[20px] font-bold text-[16px] w-[100%] my-4">
                                {" "}
                                Deploy
                            </button>

                        </Box>
                    </Modal>

                </div>
            </div>
        </section>
    );
};

export default Banner;
