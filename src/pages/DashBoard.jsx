import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/dasboard/DashSidebar';
import UserProfile from '../components/user/UserProfile';

export default function DashBoard() {
  const location = useLocation();
  const [tab, setTab] = useState(() => {
    const urlParams = new URLSearchParams(location.search);
    return urlParams.get('tab') || 'profile'; // Default to 'profile'
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get('tab');
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  console.log(tab==='profile');

  return (
    <div className='bg-black h-full mx-auto'>
      <div className='flex flex-col md:flex-row h-full'>
        <DashSidebar />
        <div className='w-full bg-gray-900 md:w-2/3 mx-auto p-4'>
          {tab === 'profile' && null}
          {tab === 'matches' && matchPage}
          {/* Add more tabs as needed */}
        </div>
      </div>
    </div>
  );
}
