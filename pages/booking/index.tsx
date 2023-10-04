import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import useMutation from "@libs/client/useMutation";
import Hero from "@components/hero";
import { TR_CONTACT_INFO } from "@utils/constants";
import BookingPerson from "@public/booking/booking-person.png";
import { CalendarIcon } from "@components/icons/CalendarIcon";
import { ClockIcon } from "@components/icons/ClockIcon";

export const bookingDetails = (iconColor: string) => {
  return (
    <>
      <div className="flex py-1 gap-2">
        {/* <CalendarIcon /> */}
        <div>Monday - Saturday</div>
      </div>

      <div className="flex py-1 gap-2">
        {/* <ClockIcon /> */}
        <div>09:00 am - 07:00 pm</div>
      </div>

      <Link href={TR_CONTACT_INFO["Address"].ref} className="flex py-1 gap-2">
        {TR_CONTACT_INFO["Address"].icon(iconColor)}
        {TR_CONTACT_INFO["Address"].title}
      </Link>

      <Link href={TR_CONTACT_INFO["Phone"].ref} className="flex py-1 gap-2">
        {TR_CONTACT_INFO["Phone"].icon(iconColor)}
        {TR_CONTACT_INFO["Phone"].title}
      </Link>
    </>
  );
};

interface BookingForm {
  email: string;
  phone: string;
  name: string;
  type: string;
  date: Date;
  time: string;
  address: string;
  city: string;
  postal: string;
  note: string;
  errors?: string;
}

interface MutationResult {
  ok: boolean;
}

const Booking: NextPage = () => {
  const [book, { loading, data, error }] =
    useMutation<MutationResult>("/api/sendMail");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingForm>();

  const onValid = async (validForm: BookingForm) => {
    if (loading) return;
    book(validForm);
    confirm(
      "Your booking request was just delivered. We will contact you shortly."
    );
  };

  return (
    <div>
      <Hero heroImageCategory="BOOKING" />
      <div className="flexcenter flex-col md:flex-row pt-10">
        {/* left text */}
        <div className="flex flex-col">
          <h2 className="text-2xl text-tr-blue font-semibold mb-4">
            We are here for you
          </h2>

          <div className="flexcenter flex-col gap-1 text-tr-gray">
            <div className="text-tr-blue font-semibold whitespace-pre-line mb-3">
              Call{" "}
              <Link className="text-tr-red" href={TR_CONTACT_INFO["Phone"].ref}>
                {TR_CONTACT_INFO["Phone"].title}
              </Link>
              <span>
                <br /> or <span className="text-tr-skyBlue">book online</span>{" "}
                here.
              </span>
            </div>

            <span className="hidden md:inline-block">
              {bookingDetails("#676661")}
            </span>
          </div>

          <div className="hidden md:block py-4">
            <Image
              src={BookingPerson}
              alt="image of a person"
              placeholder="blur"
              width={180}
            />
          </div>
        </div>

        {/* TODO: Update the form */}
        <div className="w-full mt-10 md:w-3/5 border-2 rounded-t-md md:shadow-xl mb-8 pb-5 overflow-hidden border-gray-200 md:ml-10">
          <div className="w-full m-0 text-xl text-center p-5 bg-tr-skyBlue text-white  px-4 border border-gray-300  rounded-t-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none pb-3">
            Book an appointment
          </div>
          <div className="mt-12 px-4">
            <form
              onSubmit={handleSubmit(onValid)}
              className="flex flex-col mt-8 space-y-4 justify-center items-center"
            >
              <div className="rounded-md gap-4 relative flex flex-col w-full items-center shadow-sm ">
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("name", {
                      required: "user name is required",
                      minLength: {
                        message: "the user name should be longer than 5 chars",
                        value: 2,
                      },
                    })}
                    type="text"
                    required={true}
                    placeholder="Your name"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <select
                    {...register("type", {})}
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option className=" text-slate-500">
                      Appliance Type
                    </option>
                    <option value="Furnace">Furnace</option>
                    <option value="A/C">A/C</option>
                    <option value="Water Heater Tank">Water Heater Tank</option>
                    <option value="Boiler">Boiler</option>
                    <option value="Gas Line">Gas Line</option>
                    <option value="others">others</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("date", {})}
                    type="date"
                    required={false}
                    placeholder="date"
                    defaultValue={new Date().toISOString().slice(0, 10)}
                    className="text-left inline-flex appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 min-h-10  h-10"
                  />
                  <select
                    {...register("time", {})}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-10"
                  >
                    <option value="" disabled>
                      Preffered Time
                    </option>
                    <option value="9-10">9:00am - 10:00am</option>
                    <option value="10-11">10:00am - 11:00am</option>
                    <option value="11-12">11:00am - 12:00pm</option>
                    <option value="12-1">12:00pm - 1:00pm</option>
                    <option value="1-2">1:00pm - 2:00pm</option>
                    <option value="2-3">2:00pm - 3:00pm</option>
                    <option value="3-4">3:00pm - 4:00pm</option>
                    <option value="4-5">4:00pm - 5:00pm</option>
                    <option value="5-6">5:00pm - 6:00pm</option>
                    <option value="6-7">6:00pm - 7:00pm</option>
                    <option value="7-8">7:00pm - 8:00pm</option>
                    <option value="8-9">8:00pm - 9:00pm</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("email", {})}
                    type="text"
                    required={false}
                    placeholder="Email Address"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <input
                    {...register("phone", {})}
                    type="text"
                    required={false}
                    placeholder="Phone number"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("address", {})}
                    type="text"
                    required={false}
                    placeholder="Street Address"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("city", {})}
                    type="text"
                    required={false}
                    placeholder="City"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <input
                    {...register("postal", {})}
                    type="text"
                    required={false}
                    placeholder="Postal Code"
                    className=" h-10 appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <input
                    {...register("note", {})}
                    type="text"
                    required={false}
                    placeholder="Comments"
                    className="appearance-none pl-7 w-full px-3 h-20 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-96 bg-tr-skyBlue  text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none py-3 text-base">
                {loading ? "Loading..." : "Book Now"}
              </button>

              {/* tell that booking is done. => show booking info */}
              <span className="text-red-500">
                {data?.ok
                  ? "booking done. Our team will contact you shortly."
                  : ""}
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
