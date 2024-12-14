import marque from "../assets/superchain.svg";
import marque2 from "../assets/alephium.svg";


const Marque = () => {
    return (

        <div className="relative flex overflow-x-hidden">
            <div className="py-12 animate-marquee whitespace-nowrap flex gap-4">
                <img src={marque} alt="marque" className='h-[100px] w-[300px]' />
                <img src={marque2} alt="marque2" className='h-[100px]  w-[300px]' />
                <img src={marque} alt="marque" className='h-[100px] w-[300px]' />
                <img src={marque2} alt="marque2" className='h-[100px]  w-[300px]' />
                <img src={marque} alt="marque" className='h-[100px] w-[300px]' />
                <img src={marque2} alt="marque2" className='h-[100px]  w-[300px]' />
            </div>


        </div>


    );
};

export default Marque;