import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import data from '../../data.json'; // Import data from JSON file
import logo from './assets/logo.svg';
import { CiSearch } from "react-icons/ci";
import profile from './assets/profile.png'; // Placeholder profile image
import { IoLocationSharp, IoCall } from "react-icons/io5";
import FetchDetails from './FetchDetails';

const SearchResult = () => {
    const { query } = useParams();
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState(query);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [profileImage, setProfileImage] = useState(profile); // Default profile image

    const filteredData = searchQuery
        ? data.filter((item) =>
            item.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.city.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : [];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchKeyPress = (e) => {
        if (e.key === 'Enter' && searchQuery.trim()) {
            navigate(`/search/${searchQuery}`);
        }
    };

    const handleFetchDetails = (person) => {
        setSelectedPerson(person);
        setProfileImage(person.profile_image || profile); // Set profile image (fallback to default if undefined)
    };

    const handleCloseModal = () => {
        setSelectedPerson(null);
        setProfileImage(profile); // Reset profile image to default
    };

    return (
        <div className='w-full h-screen overflow-y-scroll flex flex-col items-center'>
            <div className='w-[80%] max-lg:w-[90%]'>
                <header className='flex justify-between max-sm:flex-col max-sm:gap-3 items-center py-6'>
                    <Link to='/'><img src={logo} alt='logo' className='max-xl:w-[150px] max-sm:w-[130px]'/></Link>
                    <div className='bg-white flex items-center h-[50px] max-sm:h-[40px] w-[40%] max-sm:w-[70%] border border-[#D7D7EA] rounded-lg px-3'>
                        <CiSearch className='text-gray-400 mr-2' />
                        <input
                            placeholder='Search'
                            type='text'
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchKeyPress}
                            className='w-full outline-none'
                        />
                    </div>
                </header>
                <div>
                    <div className='grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
                        {filteredData.length > 0 ? (
                            filteredData.map((person, index) => (
                                <div key={index} className='bg-white rounded-lg p-4 shadow-md flex flex-col justify-between gap-5 items-start'>
                                    <div>
                                        <img src={person.profile_image || profile} alt='Profile' className='w-16 h-16 rounded-full' />
                                        <h2 className='text-[32px] max-xl:text-[26px] max-lg:text-[24px] font-semibold'>{`${person.first_name} ${person.last_name}`}</h2>
                                        <p className='text-gray-500 text-[14px] max-xl:text-[12px] flex gap-3 max-lg:gap-1 items-center'>
                                            <IoLocationSharp /> {person.city}
                                        </p>
                                    </div>
                                    <div className='flex justify-between w-full'>
                                        <p className='text-gray-500 flex gap-3 max-lg:gap-1 text-[14px] max-xl:text-[12px] items-center'>
                                            <IoCall /> {person.contact_number}
                                        </p>
                                        <button
                                            className='bg-black text-white px-4 py-2 max-lg:text-[14px] max-xl:px-2 max-xl:py-1 rounded'
                                            onClick={() => handleFetchDetails(person)}
                                        >
                                            Fetch Details
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-gray-500 text-center col-span-3'>No results found</p>
                        )}
                    </div>
                </div>
            </div>
            {selectedPerson && <FetchDetails person={selectedPerson} profileImage={profileImage} onClose={handleCloseModal} />}
        </div>
    );
};

export default SearchResult;
