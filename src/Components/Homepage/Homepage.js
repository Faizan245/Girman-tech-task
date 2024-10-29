// Homepage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import main from './assets/main.svg';
import { CiSearch } from "react-icons/ci";

const Homepage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
        }
    };

    return (
        <div className='w-full h-screen flex flex-col items-center'>
            <Navbar />
            <div className='flex flex-col items-center gap-20 mt-40'>
                <img src={main} alt='main logo' className='max-xl:w-[600px] max-lg:w-[500px] max-md:w-[400px] max-sm:w-[300px]'/>
                <div className='w-full bg-white flex items-center border border-[#D7D7EA] rounded-lg px-3 py-2'>
                    <CiSearch className='text-gray-400 mr-2' />
                    <input
                        placeholder='Search'
                        type='text'
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearch}
                        className='w-full outline-none'
                    />
                </div>
            </div>
        </div>
    );
};

export default Homepage;
