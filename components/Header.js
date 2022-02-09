import Image from 'next/image';
import React from 'react';
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/solid'

const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-white shadow-md p-5 grid grid-cols-3 md:px-10'>
            {/* left */}
            <div className='cursor-pointer h-10 relative my-auto flex items-center'>
                <Image src='https://links.papareact.com/qd3'
                    objectPosition={'left'}
                    objectFit='contain'
                layout='fill'/>
            </div>
            {/* middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm' >
                <input className='pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm' type="text" placeholder='Start your search' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2' />
            </div>
            {/* right */}
            <div className='flex items-center space-x-4 justify-end text-gray-500 cursor-pointer'>
                <p className='hidden md:inline'>Become a host</p>
                <GlobeAltIcon className='h-6' />
                
                <div className='flex items-center p-2 rounded-full border-2'>
                    <MenuIcon className='h-6'/>
                    <UserCircleIcon className='h-6'/>
                </div>
            </div>

        </div>
    );
};

export default Header;