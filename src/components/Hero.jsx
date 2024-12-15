import heroImage2 from "../assets/heroImage2.jpg";
import heroImage from "../assets/heroImage.webp";
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
                        Unleash the Power of Tokenization:
                        <br />Simplified token deployment and management
                        <br />with advanced features at your fingertips.
                    </h1>
                    <p className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-titiliumweb font-[500] my-4">Empower your blockchain projects with Tokz:
                        <br />Deploy, manage, and innovate—securely and efficiently.</p>
                    <div className="mt-6">
                        <button className="bg-[#15BFFD] hover:bg-[#2A3E84] rounded-3xl p-4 text-white mr-4 lg:text-[20px] md:text-[20px] text-[18px]">
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
                            <h1 className="lg:text-[24px] md:text-[24px] text-[18px] text-justify">At Tokz, we empower developers to seamlessly build and manage tokens for the decentralized future. Our platform is designed to simplify token deployment, enhance cross-chain functionality, and provide powerful tools to track and optimize token performance. We bridge technical expertise with usability, ensuring every developer—from novice to expert—has access to cutting-edge tokenization tools.
                            </h1>
                        </ul>
                        <div className="lg:w-[45%] md:w-[45%] w-[100%]">
                            <img src={aboutImage} alt="" className="w-[100%] border border-[fff] rounded-xl" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-gradient-to-r  from-[#080B2A] via-[#2A3E84] to-[#080B2A]'>
                <h2 className="text-white lg:text-[36px] md:text-[36px] text-[26px] font-[700] my-8 text-center">
                    Why Us
                </h2>
                <div>
                    <div className="lg:w-[95%] md:w-[95%] flex justify-between flex-col lg:flex-row md:flex-row items-center px-4 lg:px-0 md:px-0">
                        <div className="lg:w-[45%] md:w-[45%] w-[100%] mx-10">
                            <img src={heroImage2} alt="" className="w-[100%] h-[450px] border border-[fff] rounded-xl my-4" />
                        </div>
                        <ul className="text-white lg:w-[50%] md:w-[50%] w-[90%] ">
                        <li className="lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify "><strong>Streamlined Workflow</strong>Deploy tokens effortlessly with our user-friendly interface, saving you time and reducing errors.
                            </li>
                            <li className="lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify"><strong> Innovative Features
                            </strong>Utilize advanced functionalities like Superchain ERC20 conversion, cross-chain minting, and burning—all while maintaining a single contract address.
                            </li>
                            <li className="lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify"><strong>Comprehensive Insights
                            </strong>Access a detailed history of deployed tokens, total supply, and balances through a centralized dashboard.
                            </li>
                            <li className="lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify "><strong>Developer-Centric
                            </strong>Built with developers in mind, we integrate seamlessly with popular wallets and provide robust security for token management.</li>
                            <li className="lg:text-[20px] md:text-[20px] text-[15px] list-disc mb-4 text-justify"><strong>Future-Proof

                            </strong>Stay ahead of the curve with our commitment to innovation and multi-chain compatibility.</li>
                        </ul>

                    </div>
                </div>
            </section>






        </main>
    );
};

export default Hero;
