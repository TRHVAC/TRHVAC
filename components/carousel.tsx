import React, { Component, useRef, useCallback } from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import prevArr from '@public/carousel/arrow-prev.svg'
import nextArr from '@public/carousel/arrow-next.svg'

const carouselImages = [
    require('@public/carousel/carousel-image-1.jpg'),
    require('@public/carousel/carousel-image-2.jpg'),
    require('@public/carousel/carousel-image-3.jpg'),
    require('@public/carousel/carousel-image-4.jpg'),
    require('@public/carousel/carousel-image-5.jpg'),
    require('@public/carousel/carousel-image-6.jpg'),
    require('@public/carousel/carousel-image-7.jpg'),
    require('@public/carousel/carousel-image-8.jpg')
];

export default class Responsive extends Component {
    render() {
        var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        prevArrow: <Image src={prevArr} alt='carousel-previous' className='slick-prev' />,
        nextArrow: <Image src={nextArr} alt='carousel-previous' className='slick-next' />,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        };

        return (
        <div>

            <div>
                <h2 className='text-center py-10 text-sky-500 text-xl font-bold'> Our Previous Work </h2>
                <Slider {...settings} className='w-10/12 m-auto mb-28'>

                {carouselImages.map((imageSrc, index) => (
                    <div key={index} className='w-full m-auto px-3'>
                        <Image src={imageSrc} alt={`carousel-img-${index+1}`} className='w-full h-full' />
                    </div>
                ))}
                
                </Slider>
            </div>

        </div>
        );
    }
}

