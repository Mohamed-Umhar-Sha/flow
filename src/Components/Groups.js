// Groups.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DropdownMenu from './DropdownMenu';

const data = [
  { id: 1, name: 'Alice', age: 24 },
  { id: 2, name: 'Bob', age: 28 },
  { id: 3, name: 'Carol', age: 22 },
  { id: 4, name: 'Carol', age: 22 },
];

function Groups() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null); // Toggle close if already open
    } else {
      setOpenDropdown(id); // Open the dropdown and close others
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.50 }}
    >
      <h1 className="font-bold text-xl sm:text-2xl">Group Management</h1>
      <br />
      <motion.div 
        className="w-full max-w-4xl mx-auto rounded overflow-hidden shadow-lg"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl sm:text-2xl mb-2">Recent Groups</div>
          <hr />
        </div>
        <div className="px-6 pt-4 pb-2 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-xs sm:text-sm text-left text-green-500 uppercase border-b">Group Name</th>
                <th className="px-4 py-2 text-xs sm:text-sm text-left text-green-500 uppercase border-b">Total Members</th>
                <th className="px-4 py-2 text-xs sm:text-sm text-left text-green-500 uppercase border-b">Created On</th>
                <th className="px-4 py-2 text-xs sm:text-sm text-left text-green-500 uppercase border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                  <td className="px-4 py-2 border-b">{item.id}</td>
                  <td className="px-4 py-2 border-b">{item.name}</td>
                  <td className="px-4 py-2 border-b">{item.age}</td>
                  <td className="px-4 py-2 border-b relative">
                    <DropdownMenu
                      isOpen={openDropdown === item.id}
                      toggleDropdown={() => toggleDropdown(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div> 
    </motion.div>
  );
}

export default Groups;
