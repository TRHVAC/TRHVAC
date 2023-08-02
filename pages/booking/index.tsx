import Head from "next/head";
import Image from "next/image";
import Card from "../../components/card";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface BookingForm {
  email: string;
  name: string;
  // data type can be changed
  // email: string;
  // phone: string;
  // address: string;
  // date: Date;
}

const Booking: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<BookingForm>();
  const onValid = (validForm: BookingForm) => {
    console.log(validForm);
    // send email here
  };

  return (
    <div className="mt-16 px-4 h-screen">
      <h3 className="text-3xl font-bold text-center">Book Online</h3>
      <div className="mt-12">
        <form
          onSubmit={handleSubmit(onValid)}
          className="flex flex-col mt-8 space-y-4"
        >
          <div className="rounded-md relative flex  items-center shadow-sm gap-2">
            <div className="absolute left-0 pointer-events-none pl-3 flex items-center justify-center"></div>
            {/* <input
              {...register("email")}
              type="email"
              required={true}
              placeholder="email"
              className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            /> */}
            <input
              {...register("name")}
              type="string"
              required={true}
              placeholder="name"
              className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none py-3 text-base">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
