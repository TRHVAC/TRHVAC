import React from 'react';
import Image from 'next/image';

import Link from 'next/link';
import { Instagram_Link } from '@utils/constants';

import OurWorkImage1 from '@public/carousel/carousel-image-5.jpg';
import OurWorkImage2 from '@public/carousel/carousel-image-2.jpg';
import OurWorkImage3 from '@public/carousel/carousel-image-8.jpg';

export default function Gallery() {
    return (
        <>
        
        <h2 className='py-4 text-tr-blue font-bold text-xl sm:text-2xl text-center mt-10'>Our Previous Work</h2>

        <Link className="ease-in-out duration-300 text-sky-600 hover:text-stone-400 flexcenter mt-2 mb-6 text-sm sm:text-md w-fit m-auto px-5 py-2 "
                href={Instagram_Link}>
                    See more works
        </Link>

        {/* Images */}
        <div className='flexcenter w-4/5 justify-around m-auto'>

            <Link href={Instagram_Link} className='flexcenter w-4/5 sm:w-fit mx-3 ease-in-out duration-200 hover:opacity-75'>
                <div className='flexcenter w-full h-full'>
                    <Image src={OurWorkImage1} alt="carousel-image-1" className='w-full sm:w-96' />
                </div>
            </Link>

            {/* hidden in mobile */}
            <Link href={Instagram_Link} className='flexcenter w-fit mx-3  ease-in-out duration-200 hover:opacity-75 hidden sm:block'>
                <div className='flexcenter w-full h-full'>
                    <Image src={OurWorkImage2} alt="carousel-image-2" className='w-full sm:w-96' />
                </div>
            </Link>

            <Link href={Instagram_Link} className='flexcenter w-fit mx-3  ease-in-out duration-200 hover:opacity-75 hidden sm:block'>
                <div className='flexcenter w-full h-full'>
                    <Image src={OurWorkImage3} alt="carousel-image-3" className='w-full sm:w-96' />
                </div>
            </Link>

        </div>
        
        </>
    );
}