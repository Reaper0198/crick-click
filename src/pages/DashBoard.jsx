import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from '../components/dasboard/DashSidebar';
import AddStadium from '../components/admin/AddStadium';

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

  // Sample profile page content
  const profilePage = (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl text-white font-semibold mb-4">Profile Information</h2>
      
      <p className="mt-4 text-gray-300">Details about the user can be displayed here.</p>
    </div>
  );

  const matchPage = (
    <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-2xl text-white font-semibold mb-4">Matches </h2>
      <p className="text-gray-300">This section will display the user's posts.</p>
      {/* Add post content here */}
    </div>
  );

  const stadiumPage = (
    <div className="p-6">
        <AddStadium/>
    </div>
  );

  return (
    <div className='bg-black min-h-screen  mx-auto'>
      <div className='flex flex-col md:flex-row h-full'>
        <DashSidebar />
        <div className='w-full h-full md:w-2/3 mx-auto p-4'>
          {tab === 'profile' && profilePage}
          {tab === 'matches' && matchPage}
          {tab === 'addStadium' && stadiumPage}
          {/* Add more tabs as needed */}
        </div>
      </div>
    </div>
  );
}
