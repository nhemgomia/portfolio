import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

interface NavbarProps {
  isDarkMode: boolean,
  setDarkMode: (isDarkMode: boolean) => void;
}

const Navbar: FC<NavbarProps> = ({
  isDarkMode,
  setDarkMode
}) => {
  const [nav, setNav] = useState<boolean>(false);
  
  const handleNav = () => {
    setNav(!nav);
  }

  const Icon = isDarkMode ? MdDarkMode : MdLightMode;
  
  return (
    <div className="bg-white text-gray-600 dark:bg-black  dark:text-gray-400  h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-3xl font-bold primary-color ml-4 mr-2">N. Gomia</h1>
        <motion.div whileHover={{ scale: 1.2, }} whileTap={{ scale: 0.8, rotate: 720 }}>
          <Icon onClick={() => setDarkMode(isDarkMode)} size={25} className="hover:text-gray-950 hover:dark:text-gray-100"/>
        </motion.div>
      </div>
      <ul className="hidden md:flex">
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="p-5 nav-hover font-semibold">
          <a href="#about">About</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="p-5 nav-hover font-semibold">
          <a href="#work">Work</a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="p-5 nav-hover font-semibold">
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>
      <div onClick={handleNav} className='block md:hidden mr-6'>
        { nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
      </div>

      <div className={nav ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 z-10" : "fixed left-[-100%]"}>
        <h1 className="text-3xl primary-color m-4">N. Gomia</h1>
        <ul className="p-8 text-2xl">
          <li className="p-2"><a href="#about">About</a></li>
          <li className="p-2"><a href="#work">Work</a></li>
          <li className="p-2"><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;