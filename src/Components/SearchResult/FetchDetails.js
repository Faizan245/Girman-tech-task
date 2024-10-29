// FetchDetails.js
import React from 'react';

const FetchDetails = ({ person, profileImage, onClose }) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-[500px]'>
                <h2 className='text-2xl font-semibold mb-4'>Fetch Details</h2>
                <p className='text-gray-500 mb-2'>Here are the details of the following employee.</p>

                <p><strong>Name:</strong> {person.first_name} {person.last_name}</p>
                <p><strong>Location:</strong> {person.city}</p>
                <p><strong>Contact Number:</strong> {person.contact_number}</p>

                <div className='mt-4'>
                    <p><strong>Profile Image:</strong></p>
                    <img src={profileImage} alt='Profile' className='w-[150px] h-[150px] mt-2' />
                </div>

                <div className='flex justify-end'>
                    <button onClick={onClose} className='mt-6 bg-gray-800 text-white px-4 py-2 rounded'>Close</button>
                </div>
            </div>
        </div>
    );
};

export default FetchDetails;
