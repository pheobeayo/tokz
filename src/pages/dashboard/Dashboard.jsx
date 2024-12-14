
import Banner from "../../components/Banner";


const Dashboard = () => {
   

  return (
    <main className="bg-[#040927] w-[100%] h-full">
      <Banner />
      <section>
        <div className="lg:w-[95%] md:w-[95%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
          <h2 className="px-4 lg:px-0 md:px-0 lg:text-[28px] md:text-[28px] text-[20px] font-[700]  mx-auto font-montserrat items-center text-center lg:text-left md:text-left text-white ">
            No Deployed Tokens
          </h2>
        </div>
      </section>
      

    </main>
  );
};

export default Dashboard;
