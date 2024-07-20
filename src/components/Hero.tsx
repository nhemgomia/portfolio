import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import MyImage from "../assets/me.png";
import UserImage from "../assets/user.png";
import UserImageDarkMode from "../assets/user-dark.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 max-w-[1200px] h-[70vh] mx-auto py-8 bg-white dark:bg-black text-black dark:text-white ">
      
      <div className="col-span-1 my-auto mx-auto w-[300px] h-[400px] md:w-[270px] lg:w-[350px]">
        <img src={UserImage} alt="Hero Image" className="block dark:hidden"/>
        <img src={UserImageDarkMode} alt="Hero Image" className="hidden dark:block"/>
        <motion.img
          className="hidden sm:block"
          animate={{
            scale: 1.1,
            y: -270,
            x: 20
          }}
          src={MyImage}
        />
        <motion.img
          className="block sm:hidden"
          animate={{
            scale: 1.1,
            y: -250,
          }}
          src={MyImage}
        />
      </div>

      <div className="col-span-2 px-5 my-auto md:max-xl:ml-8">
        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="primary-color">
            I'm a 
            </span> <br/>
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                1000,
                "The End",
                1000
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
        </h1>
        <p className="sm:text-lg my-6 lg:text-xl">
          My name is Nehemiah Renel Gomia and I have 5 years of experience in software development.
        </p>

        <div className="my-8 flex sm:inline">
          <a href="/" className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-cyan-300 to-blue-500 text-white">
            Download CV
          </a>
          <a href="#contact" className="px-6 py-3 w-full rounded-xl mr-4 flex sm:inline justify-center items-center
              border border-gray-400 hover:bg-gradient-to-br from-cyan-300 to-blue-500 hover:border-none hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;