import { motion } from 'framer-motion';
import { FC } from 'react';

interface SkillProps {
  name: string,
  alt: string;
  image: string
}

const Skill: FC<SkillProps> = ({
  name,
  alt,
  image
}) => {
  return (
    <motion.div 
      whileHover={{
        scale: 1.2
      }}
      className="flex flex-col items-center m-4 w-[50px] md:w-[60px]">
      <div className="flex items-center h-[90px]">
        <img className="w-full" src={image} data-src={image} data-srcset={image} srcSet={image} alt={alt} />
      </div>
      <p className="mt-2">{name}</p>
    </motion.div>
  );
};

export default Skill;