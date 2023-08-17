import Head from 'next/head';
import Image from 'next/image';
import Map from '@components/map';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import useMutation from '@libs/client/useMutation';
import Hero from '@components/hero';
import Link from 'next/link';
import {MapIcon} from '@components/icons/nav/MapIcon';
import {PhoneIconBook} from'@components/icons/booking/PhoneIconBook';

interface BookingForm {
  email: string;
  name: string;
  type: string[];
  date: Date;
  address: string;
  city: string;
  postal: string;
  note: string;
  // data type can be changed
  // email: string;
  // phone: string;
  // address: string;
  // date: Date;
  errors?: string;
}

interface MutationResult {
  ok: boolean;
}

const Booking: NextPage = () => {
  const [book, { loading, data, error }] = useMutation<MutationResult>('/api/booking');
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<BookingForm>();

  const onValid = async (validForm: BookingForm) => {
    console.log(validForm);
    // send email here
    if (loading) return;
    book(validForm);
  };

  return (
    <>
      <Hero heroImageCategory="BOOKING" />

      <div className="flex flex-row gap-10 justify-center items-center my-10">
        {/* left text */}
        <div className="flex flex-row">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl text-tr-blue font-semibold mb-4">We are here for you</h2>
            <div className="flex flex-col gap-1">
              <div className='text-tr-blue font-semibold'>
                <span>
                  Call <span className="text-tr-red"><Link href="tel:647-522-5652">(647) 522-5652</Link></span> or{' '}
                  <span className="text-tr-skyBlue">book online</span> here.
                </span>
              </div>
              
              <span>Monday - Saturday</span>
              <span>9:00 am - 7:00 pm</span>
              <span className='flex gap-1'><PhoneIconBook/>(647) 522 - 5652</span>
              <span className='flex gap-1'><MapIcon/>L3P6Y5, North York, ON</span>
            </div>
            <div className="w-48 h-60 mt-3 bg-yellow-300">image of a person</div>
          </div>
        </div>
        <div className="w-3/5 border-2 rounded-t-md shadow-xl mb-8 pb-5 overflow-hidden border-blue-500">
          <div className="w-full m-0 text-center p-3 bg-blue-500 hover:bg-blue-600 text-white  px-4 border border-gray-300  rounded-t-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none pb-3 text-base">
            Book Online
          </div>
          <div className="mt-12 px-4">
            <form
              onSubmit={handleSubmit(onValid)}
              className="flex flex-col mt-8 space-y-4 justify-center items-center"
            >
              <div className="rounded-md relative flex flex-col w-full items-center shadow-sm gap-2">
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register('name', {
                      required: 'user name is required',
                      minLength: {
                        message: 'the user name should be longer than 5 chars',
                        value: 2,
                      },
                    })}
                    type="text"
                    required={true}
                    placeholder="Your name"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <select
                    {...register('type', {})}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Appliance Type
                    </option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register('date', {})}
                    type="date"
                    required={false}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <select
                    {...register('type', {})}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>
                      Preffered date
                    </option>
                    <option value="option1">option1</option>
                    <option value="option2">option2</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register('address', {})}
                    type="text"
                    required={false}
                    placeholder="Street Address"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register('city', {})}
                    type="text"
                    required={false}
                    placeholder="City"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <input
                    {...register('postal', {})}
                    type="text"
                    required={false}
                    placeholder="Postal Code"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register('note', {})}
                    type="text"
                    required={false}
                    placeholder="Commentss"
                    className="appearance-none pl-7 w-full px-3 h-20 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-96 bg-blue-500 hover:bg-blue-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none py-3 text-base">
                {loading ? 'Loading...' : 'Book Now'}
              </button>

              {/* tell that booking is done. => show booking info */}
              {data && 'booking done. our team will contact you'}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
