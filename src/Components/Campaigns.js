import React from 'react'
import  Campaign  from '../assests/campiagn.png'
import { motion } from 'framer-motion';
function Campaigns(){
  return (
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 justify-center p-10">
          <div className="max-w-lg rounded-lg drop-shadow-2xl bg-white hover:scale-110 group  hover:bg-green-400 transition duration-1000 skew-x-10 h-2/3" >
            <div className="p-6">
              <h5 className="mb-2 text-xl text-center font-bold text-gray-900 group-hover:text-white">
                Create Campaign 
              </h5>
              <hr/>
              <div className='p-6'>
                 <input type="text" name="Camoieg_name" placeholder='Enter a Campieg Name' className='rounded-lg bg-gray-100' />
              </div>
              <div className='p-6'>
                 <input type="text" name="Camoieg_name" placeholder='Enter a Campieg Name' className='rounded-lg bg-gray-100' />
              </div>
              <div className='p-6'>
                 <input type="text" name="Camoieg_name" placeholder='Enter a Campieg Name' className='rounded-lg bg-gray-100' />
              </div>
              <div className='p-6'>
               
                 <lable className="px-2 group-hover:text-white" >Select Audience:</lable>
                 <input type="radio" name="Camoieg_name"  className='rounded-lg px-5 mx-2' />
                 <input type="radio" name="Camoieg_name"  className='rounded-lg px-5 mx-2' />
                
              </div>
            </div>
          </div>
          <div className='h-2/3'>
          <motion.img
          src={Campaign}
          alt="Campaign image"
          className="rounded-lg h-2/4"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
        />
            </div>
        </div>
  )
}

export default Campaigns