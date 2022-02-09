import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src={'https://links.papareact.com/0fm'}
                layout='fill'
                objectFit='cover'
            
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg'>Not sure where to go? perfect</p>
                <button className='text-purple-500 font-bold shadow-md rounded-full px-10 py-4 bg-white my-3 hover:shadow-lg active:scale-95 transition duration-150 ease-out'>Im Flexible</button>
            </div>

        </div>
    );
};

export default Banner;