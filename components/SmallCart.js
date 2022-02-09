import Image from 'next/image';
import React from 'react';

const SmallCart = ({img, location, distance}) => {
    return (
        <div className='flex items-center space-x-4 cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out m-2 mt-5'>
            {/* left */}
            <div className='w-16 h-16 relative'>
                <Image src={img} className='rounded-lg' layout='fill'/>
            </div>
            {/* right */}
            <div>
                <p>{ location }</p>
                <p className='text-gray-500'> { distance }</p>
            </div>
        </div>
    );
};

export default SmallCart;