
import heroImage from "../assets/heroImage2.jpg";
import aboutImage from "../assets/aboutImage.webp";



const Hero = () => {


    return (
        <main className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] w-screen">
            <section className="bg-gradient-to-r from-[#080B2A] via-[#2A3E84] to-[#080B2A]">
                <div
                    className=" bg- lg:w-[100%] md:w-[100%] w-[100%] mx-auto text-center p-8 lg:px-0 md:px-0  bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroImage})`,
                        backgroundSize: "cover",
                    }}
                >
                    <h1 className=" text-white lg:text-[38px] md:text-[38px] text-[30px] font-montserrat font-[700] my-4">
                        Make your <span className="text-[#040927]">Tokens </span> Deployment
                        <br />without <span className="text-[#040927]">sweat and</span> easily
                    </h1>
                    <div className="mt-6">
                        <button className="bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A] rounded-3xl p-4 text-white mr-4 lg:text-[20px] md:text-[20px] text-[18px]">
                            Deploy Token
                        </button>

                    </div>
                </div>
            </section>
            <section className='bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]'>
                <h2 className="text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center">
                    About Tokz
                </h2>
                <div>
                    <div className="lg:w-[95%] md:w-[95%] flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <ul className="text-white lg:w-[50%] md:w-[50%] w-[90%] mx-10">
                            <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 "><strong>Get Started</strong>: Begin by connecting your wallet on the Toz platform.</li>
                            <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 "><strong>Proceed to deploy your erc20 Tokens</strong>: Provide details about the recyclable materials of your tokens</li>
                            <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 "><strong>Users get directed to their dashboards to view their deployed tokens</strong>: You can view the history of your deployed contracts</li>
                            <li className="lg:text-[24px] md:text-[24px] text-[18px] list-disc mb-4 "><strong>Secure Blockchain Deployment</strong>: As user you can deploy your tokens in various chains with ease</li>
                        </ul>
                        <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                            <img src={aboutImage} alt="" className="w-[100%] border border-[fff] rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>






        </main>
    );
};

export default Hero;
