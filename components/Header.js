import Image from 'next/image';
import React, { useState } from 'react';
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = ({placeholder}) => {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState()
    const router = useRouter()
    const selectionRange = {
        startDate,
        endDate,
        key: 'selection'
        
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate),
            setEndDate(ranges.selection.endDate)
    };
    const search = () => {
        router.push({
            pathname: '/search',
            query: { 
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests
            }
        })
    }
    return (
        <div className='sticky top-0 z-50 bg-white shadow-md p-5 grid grid-cols-3 md:px-10'>
            {/* left */}
            <div onClick={() => router.push('/')} className='cursor-pointer h-10 relative my-auto flex items-center'>
                <Image src='https://links.papareact.com/qd3'
                    objectPosition={'left'}
                    objectFit='contain'
                layout='fill'/>
            </div>
            {/* middle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm' >
                <input value={searchInput} onChange={(e) => setSearchInput(e.target.value)} className='pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm' type="text" placeholder={placeholder || 'Start your search'} />
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
            
                
            {
                searchInput && <div className='flex flex-col mx-auto col-span-3'> <DateRangePicker
                    ranges={[selectionRange]}
                    minDate={new Date()}
                    rangeColors={['#FD5B61']}
                    onChange={handleSelect}
                />
                <div className='flex items-center border-b mb-4'>
                    <p className='text-2xl font-semibold flex-grow'>Number of guests</p>
                    <UserIcon className='h-5' />
                    <input value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} min={1} type="number" className='w-12 pl-2 text-lg outline-none text-red-400' />
                    </div>
                    <div className='flex'>
                        <button className='flex-grow' onClick={() => setSearchInput('')}>Cancel</button>
                        <button className='flex-grow text-red-500' onClick={search}>Search</button>
                    </div>
            </div>
                }
        </div>
    );
};

export default Header;