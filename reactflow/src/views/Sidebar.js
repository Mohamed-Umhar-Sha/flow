import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { FaAlignLeft } from "react-icons/fa";
import './sidebar.css'; // Import the CSS file

const Sidebar = ({ open, setOpen, menus }) => {
  const user = {
    name: 'Bava Rohith MB'
  };

  const memoizedMenus = useMemo(() => (
    menus.map((menu, index) => (
      <React.Fragment key={index}>
        {open ? <h1 className={`mx-5 text-sm text-gray-400 font-[600]  py-2`}>{menu.title}</h1> : (
  <div style={{ height: '12px' }} />
)}

        <NavLink
          key={menu.id}
          to={menu?.link}
          className={`${!open && ''} flex items-center gap-3 p-2 rounded-full ${open ? 'hover:bg-[#00a727]' : ''} ${!open ? 'text-white hover:text-[#00a727]' : ''} ${menu?.margin ? 'mb-3' : '-mb-1.5'}`}

        
         
        >
          <div className={`${open ? 'pl-4' : ''} ${!open ? 'hover:pl-2 transition-all duration-500' : ''}`}>
            {React.createElement(menu?.icon, { size: open ? '32' : '32' })}
          </div>
          <h2
            className={`whitespace-pre duration-150 text-lg -p-4 font-semibold ${!open ? 'opacity-0 translate-x-28 overflow-hidden' : ''}`}
          >
            {menu?.name}
          </h2>
        </NavLink>
      </React.Fragment>
    ))
  ), [menus, open]);

  return (
    <section className='flex flex-grow md:flex-row'>
      <div className={`${!open ? 'bg-[--third]' : 'bg-[--primary]'} h-full p-3 ${open && 'w-72'} ${!open && 'w-16'}  duration-500 ${open ? 'text-white' : ''} px-2 custom-scrollbar`} style={{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }}>

        <div className='pt-2 flex justify-end'>
          <FaAlignLeft
            size={25}
            className={`cursor-pointer text-white  ${open ? 'w-9' : ''} ${!open ? 'scale-x-[-1] mx-auto' : ''} `}
            
          />
        </div>

        <div className={`flex ${!open && 'mt-3'} flex-col relative`}>
          {memoizedMenus}
        </div>
        <div>
          {open ? <div className='mt-7 mx-5 '>
            <h1 className='text-gray-900 text-md font-[600]'>USER ACCOUNT</h1>
            <div className='py-2 gap-2 flex items-center'>
              <div className='border rounded-full bg-green-900 border-black border-2 h-12 text-center text-xl -ml-2 w-12 flex items-center justify-center'>
                {user.name.charAt(0)}
              </div>
              <div className=''>
                <h3>{user.name}</h3>
                <p className='text-gray-900 -mx-1 italic'>{`@${user.name.replace(/\s/g, '')}`}</p>
              </div>
            </div>
          </div> : <button className='border rounded-full bg-[--primary] border-black border-2 h-10 text-center  w-10 flex items-center justify-center'>
            {user.name.charAt(0)}
          </button>}

        </div>

      </div>
    </section>
  );
};

export default Sidebar;
