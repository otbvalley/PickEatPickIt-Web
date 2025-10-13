import { Link } from "react-router-dom";
import logo from "../../assets/Logo SVG 1.png";
import Button from "../../component/button";

export const Home = () => {
  return (
    <div className="con">
      {/* Logo - Top Right */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10">
        <img
          src={logo}
          alt="PickEAT PickIT Logo"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-2xl"
        />
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">
        {/* Heading */}
        <h1 className="text-white font-extrabold text-center leading-tight mb-8 max-w-2xl">
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Taking Orders for
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
            Fast Deliveries
          </span>
        </h1>
        <Link to="/signup">
          {/* CTA Button */}
          <Button text="Get Started" />
        </Link>
        <Link to="/login">
          {/* CTA Button */}
          <Button text="Login" />
        </Link>
      </div>
    </div>
  );
};
