import React from 'react';
import Image from 'next/image';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import prevArr from '@public/carousel/arrow-prev.svg';
import nextArr from '@public/carousel/arrow-next.svg';
import Link from 'next/link';
import { Instagram_Link } from '@utils/constants';

const carouselImages = [
  require('@public/carousel/carousel-image-1.jpg'),
  require('@public/carousel/carousel-image-2.jpg'),
  require('@public/carousel/carousel-image-3.jpg'),
  require('@public/carousel/carousel-image-4.jpg'),
  require('@public/carousel/carousel-image-5.jpg'),
  require('@public/carousel/carousel-image-6.jpg'),
  require('@public/carousel/carousel-image-7.jpg'),
  require('@public/carousel/carousel-image-8.jpg'),
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: true,
  prevArrow: <Image src={prevArr} alt="carousel-previous" className="slick-prev" />,
  nextArrow: <Image src={nextArr} alt="carousel-previous" className="slick-next" />,
  responsive: [
    {
      breakpoint: 1053,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        dots: false,
      },
    },
  ],
};

export default function Carousel() {
  return (
    <>
      <div>
        <div>
          <h2 className="text-center mt-8 text-tr-blue text-xl font-bold sm:text-2xl sm:mt-10">
            Our Previous Work
          </h2>

          <Link className="text-tr-skyBlue flexcenter mt-2 mb-6" href={Instagram_Link}>
            See all works
          </Link>

          <Slider {...settings} className="w-10/12 m-auto">
            {carouselImages.map((imageSrc, index) => (
              <div key={index} className="w-full m-auto px-3">
                <Link href={`${Instagram_Link}`}>
                  <Image
                    src={imageSrc}
                    alt={`carousel-img-${index + 1}`}
                    className="w-full h-full"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
