import React from 'react';


const AssignAgent = ({open}) => {

  const Agents = [
    { id: 1, name: "Sathish Sekar" },
    { id: 2, name: "Umar Mohamad" },
    { id: 3, name: "MB Rohith" },
    { id: 4, name: "Thamim" },
    { id: 5, name: "Kp Naveen" },
    { id: 6, name: "Sarath" },
  ];

  return (
    <>

      <div className=''>

        <div className='p-6 border border-2 shadow-2'>
          <h1 className={`py-3  pb-8 font-semibold text-2xl `}>Keyword Based <span className='text-[--second]'> Assignment</span> <span className={``}  > / </span> Transfer To  <span className=' text-[--second]'> CRM</span> </h1>
          <div className=' gap-8 grid grid-cols-1 lg:grid-cols-2'>
          <div className='  p-5 border border-2'>
          <form className='p-4'>
            <div className='mb-8'>
              <label htmlFor="phone_number_id" className="block mb-2 text-md font-[600] text-black dark-text-black">Phone Number ID</label>
              <input type="text" id="phone_number_id" name="phone_number_id" className="border border-[--second] border-2 text-gray-900 text-sm rounded-lg focus:ring-[--second] focus:border-[--second] block w-full p-2.5" placeholder="" required />
            </div>
            <div className='mb-8'>
              <label htmlFor="whatsapp_id" className="block mb-2 text-sm  text-gray-900 uppercase font-[600] dark-text-black">Whatsapp Business Account ID</label>
              <select type="type" id="whatsapp_id" name="whatsapp_id" className="border border-[--second] border-2 text-gray-900 text-sm rounded-lg focus:ring-[--second] focus:border-[--second] block w-full p-2.5" placeholder="" required>
                {Agents.map((agent) => (
                 <option
                 key={agent.id}
                 value={agent.name}
                 className="p-5"
      style={{ backgroundColor: "", borderRadius: "5px" }}
               >
                 {agent.name}
               </option>
                ))}
              </select>
            </div>

            <div className='mt-11'>
              <button type="submit" className="text-white mt-6 lg:text-[16px] border-2 border-[--second] bg-[--second] hover:bg-white hover:text-[--second] focus:ring-3 focus:outline-none focus:ring-[--second] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center block mx-auto">Assign to Agent</button>
            </div>
            
          </form>
          </div>
          <div className=' p-5 border border-2'>
            <div>
              imaged
            </div>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-xl'>

</div>
        
      </div>
      
    </>
  );
};

export default AssignAgent;
