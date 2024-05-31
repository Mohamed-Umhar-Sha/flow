import React from 'react'
import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";

const  Contact = () => {
  const [data] = useState([
    { id: 1, name: 'Alice', age: 25,gender:'male' },
    { id: 2, name: 'Bob', age: 24 ,gender:'male'},
    { id: 3, name: 'Carol', age: 29 ,gender:'male'}
  ]);

  const downloadCsv = () => {
    const csvRows = [
      ["ID", "Name", "Age"], // Header row
      ...data.map(item => [item.id, item.name, item.age,item.gender]) // Data rows
    ];

    const csvContent = "data:text/csv;charset=utf-8," 
        + csvRows.map(e => e.join(",")).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link); // Required for Firefox

    link.click(); // This will download the data file named "table_data.csv".
    document.body.removeChild(link); // Clean up
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
      className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white "
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 120 }}
    >
      <div className="px-6 py-4 flex justify-around relative">
        <h1 className="font-bold text-xl sm:text-2xl mt-5 ">Contact Manager</h1>
        <button className="bg-green-700 rounded-lg py-1 px-3 text-white flex items-center justify-center" onClick={downloadCsv}>
  <FaCloudDownloadAlt className="text-xl mr-2" />  {/* Icon before the text */}
  Download CSV
</button>
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
                <td className="px-4 py-4 border-b">{item.id}</td>
                <td className="px-4 py-4 border-b">{item.name}</td>
                <td className="px-4 py-4 border-b">{item.age}</td>
                <td className="px-4 py-4 border-b ">{item.gender}
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
export default Contact;
  