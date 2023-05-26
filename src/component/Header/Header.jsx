import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'
import { BoltIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../AuthProviders/AuthProviders';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const{user,logOut}=useContext(AuthContext)


    const handleLogout=()=>{
      logOut()
      .then(result=>{
        console.log(result);
      })
      .catch(err=>{
        console.log(err.message);
      })
    }
    return (
      <div> 
          <div className='bg-white px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-gray-100'>
        <div className='relative flex items-center justify-between bg-blue-100 p-4 rounded-2xl'>
       
          <Link to='/' className='inline-flex items-center'>
            
           <img src="/Funland-01.png" className='h-[90px]' alt="" />
          </Link>
          <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold  text-purple-700">
  <span className="text-pink-500">ANIMAL</span>
  <span className="text-blue-500">FUN</span>
  <span className="text-green-500">LAND</span>
</h1>
          
  
         
          <ul className='items-center hidden space-x-8 lg:flex font-bold '>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
               Home
              </NavLink>
              </li>
            <li>
              <NavLink
                to='alltoy'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
               All Toy
              </NavLink>
            </li>
           { user && <li>
              <NavLink
                to='mytoy'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
                My toy
              </NavLink>
            </li>}
           {user && <li>
              <NavLink
                to='addatoy'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
                Add a Toy
              </NavLink>
            </li>}
            <li>
              <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
              >
                Blog
              </NavLink>
            </li>
          </ul>
          <div className='flex gap-2 items-center'>
            <Tooltip id="my-tooltip" />
            {user && <img src={user?.photoURL} className='h-[45px] border rounded-full' alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} />} 
           {user? <button onClick={handleLogout} className='btn bg-gradient-to-r border-none from-cyan-500 to-blue-500  text-white'>Log Out</button>:<Link to='/login'> <button className='btn bg-gradient-to-r border-none from-cyan-500 to-blue-500  text-white'>Log in</button></Link>}
          </div>
          {/* Mobile Navbar Section */}
          <div className='lg:hidden'>
            {/* Dropdown Open Button */}
            <button
              aria-label='Open Menu'
              title='Open Menu'
              onClick={() => setIsMenuOpen(true)}
            >
              <Bars3BottomRightIcon className='w-5 text-gray-600' />
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  {/* Logo & Button section */}
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <Link to='/' className='inline-flex items-center'>
                       
                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          HuntYourJob
                        </span>
                      </Link>
                    </div>
                    {/* Dropdown menu close button */}
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <XMarkIcon className='w-5 text-gray-600' />
                      </button>
                    </div>
                  </div>
                  {/* Mobile Nav Items Section */}
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <Link to='/' className='default'>
                          home
                        </Link>
                      </li>
                      <li>
                        <Link to='/alltoy' className='default'>
                          All Toy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/mytoy'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                        >
                          My Toy
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/addatoy'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                        >
                         Add a toy
                        </Link>
                      </li>
                      
                      <li>
                        <Link
                          to='/blog'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    );
};

export default Header;