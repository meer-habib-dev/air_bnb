import Image from 'next/image';
import React from 'react';

const MediumCards = ({ img, title }) => {
    console.log(img);
    return (
        <div className='cursor-pointer hover:scale-105 transition transform duration-300 ease-out'>
 <div className='relative h-80 w-80 '>
            <Image src={img} layout='fill' className='rounded-xl'/>
        </div>
            <p className='text-2xl mt-3'>{ title}</p>
        </div>
       
    );
};

export default MediumCards;