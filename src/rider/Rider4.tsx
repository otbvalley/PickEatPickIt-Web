import { Link } from "react-router-dom";
import welCat from "../assets/undraw_season-change_ohe6 1.png";
export const Rider4 = () => {
  return (
    <>
      {/* container */}
      <div>
        {/* skip */}
        <Link to="/welcome5">
          <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#228B22] font-sans font-bold text-right p-4 cursor-pointer">
            Skip
          </p>
        </Link>
        {/* end of  skip */}
        <p className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#228B22] font-sans font-bold text-center">
          Set Your Availability
        </p>

        {/* welcom */}
        <div className="max-w-[300px] max-h-[153px] mx-auto animate-bounce mt-[150px] shadow-lg shadow-[white] rounded-[10px] p-4">
          <img src={welCat} alt="" className="object-cover" />
        </div>
        {/* cart welcome image */}
        {/* welcome text */}
        <p className="max-w-[340px] text-center text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#7A7A7A] font-sans  font-semibold mx-auto mt-[5rem] ">
          Choose when you're available to take on orders and deliver to clients
        </p>
        {/* welcome text */}
        {/* butt */}
        <div className="flex  justify-center ">
          <Link to="/welcome5" className="w-full flex justify-center">
            {" "}
            <button className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-[#E3EAF2] font-sans font-bold max-w-[289px] w-full   bg-[#228B22] max-h-[49px] h-[30px] lg:[49px] rounded-[10px] mt-[5rem] *:hover:bg-[#1e6f1e] cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-300 mb-[2rem]">
              Next
            </button>
          </Link>
        </div>
        {/* butt */}
      </div>
      {/* end of  container */}
    </>
  );
};
