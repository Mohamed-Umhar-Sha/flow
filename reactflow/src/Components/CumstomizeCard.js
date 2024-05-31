import React from 'react';
import { motion } from 'framer-motion';
const Card = ({ title, description, imageUrl }) => {
    return (
      
    <motion.div
    className="max-w-sm rounded overflow-hidden shadow-lg h-fit"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <motion.img
      className="w-full object-cover rounded-lg "
      src={imageUrl}
      alt="Sunset in the mountains"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
    />
    <div className="px-6 py-4">
      <div className='flex justify-center'>
        <h3 className="font-bold text-lg">User Name:</h3>
        <motion.h3
          className="text-green-700  text-lg"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 120 }}
        >
          {title}
        </motion.h3>
      </div>
      <div className='flex justify-center'>
        <h3 className="font-bold text-lg">Password:</h3>
        <motion.p
          className="text-green-700 text-base  text-lg "
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
        >
          {description}
        </motion.p>
      </div>
    </div>
  </motion.div>

    );
  };
  
  export default Card;