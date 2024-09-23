import React, { useEffect, useState } from 'react';
import { FaSignOutAlt, FaUser, FaWindows } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function DashSidebar() {
    const navigate=useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get('tab');
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const handleSignOut = () => {
    // Handle sign-out logic here
    localStorage.removeItem('currentUser'); // Example sign-out
    navigate('/sign-in'); // Redirect to sign-in page
    window.location.reload(); // Reload the page
  };

  return (
    <div className='bg-gray-900 text-white p-6 rounded-lg shadow-md'>
      <h1 className='font-semibold text-lg mb-6'>Welcome Back!</h1>
      <ul className='flex flex-col gap-4'>
        <li>
          <Link
            to="/dashboard?tab=profile"
            className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
              tab === 'profile' ? 'bg-green-600 text-white' : 'hover:bg-gray-700'
            }`}
          >
            <FaUser className='text-xl' />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard?tab=matches"
            className={`p-3 rounded-lg flex items-center gap-3 transition-colors duration-200 ${
              tab === 'matches' ? 'bg-green-600 text-white' : 'hover:bg-gray-700'
            }`}
          >
            <FaWindows className='text-xl' />
            Matches
          </Link>
        </li>
        <li>
          <button
            className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 transition-colors duration-200'
            onClick={handleSignOut}
          >
            <FaSignOutAlt className='text-xl' />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}
