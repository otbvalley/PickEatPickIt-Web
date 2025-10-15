// import React from 'react'

import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { Navbar } from "../component/Navbar";
import { Link } from "react-router-dom";
interface supo {
  icon: React.ReactNode;
  text1: string;
  text2: string;
}

const Support: React.FC = () => {
  const supo: supo[] = [
    {
      icon: (
        <Mail
          className="w-5 h-5 text-[#525252]"
          style={{
            background: "linear-gradient(0deg, #F9F9F9 -9900%, #FFFFFF 100%)",
          }}
        />
      ),
      text1: "Email Our Support",
      text2: "Support@pickeatpickit.com",
    },
    {
      icon: <MessageCircle className="w-5 h-5 text-green-600" />,
      text1: "Chat PickItPickEat Support on Whatsapp",
      text2: "+234 901 2345 678",
    },
  ];
  return (
    <>
      {/* container */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50/30 to-gray-50 px-6 py-4">
        <Navbar />
        <div className=" px-6 py-4 border-b border-gray-100 ">
          <Link to="/profile"></Link>
          <button className="p-2 -ml-2 hover:bg-gray-100 rounded-xl transition-all active:scale-95">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
        </div>
        <p className="text-[#228B22] bg-[#FFFFFF] font-family-sans text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold mt-3 p-3 shadow-sm">
          Support
        </p>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mt-12 font-family-sans font-bold text-[#525252]">
          PickEat PickIt Support
        </p>
        <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mt-2 font-family-sans font-bold text-[#525252]">
          Chat with PickEat PickIt Customer care support
        </p>
        {supo.map((item, index) => (
          <div key={index}>
            <div className="flex items-center gap-4 mb-3">
              {item.icon}
              <div>
                <p className="text-[#525252] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-family-sans font-bold">
                  {item.text1}
                </p>
                <p className="text-[#228B22] text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-family-sans font-semibold">
                  {item.text2}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* container */}
    </>
  );
};
export default Support;
