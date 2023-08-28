import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import useMutation from "@libs/client/useMutation";
import Hero from "@components/hero";
import { TR_CONTACT_INFO } from "@utils/constants";
import BookingPerson from "@public/booking/booking-person.jpg";

export const bookingDetails = (iconColor: string) => {
  return (
    <>
      <div>Monday - Saturday</div>

      <div>09:00 am - 07:00 pm</div>

      <Link
        href={TR_CONTACT_INFO["Phone"].ref}
        className="flex items-center gap-2"
      >
        {TR_CONTACT_INFO["Phone"].icon(iconColor)}
        {TR_CONTACT_INFO["Phone"].title}
      </Link>

      <Link
        href={TR_CONTACT_INFO["Address"].ref}
        className="flex items-center gap-2"
      >
        {TR_CONTACT_INFO["Address"].icon(iconColor)}
        {TR_CONTACT_INFO["Address"].title}
      </Link>
    </>
  );
};

interface BookingForm {
  email: string;
  name: string;
  type: string[];
  date: Date;
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
    useMutation<MutationResult>("/api/booking");
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
    <div>
      <Hero heroImageCategory="BOOKING" />

      <div className="flexcenter flex-col md:flex-row pt-10">
        {/* left text */}
        <div className="flex flex-col">
          <h2 className="text-2xl text-tr-blue font-semibold mb-4">
            We are here for you
          </h2>

          <div className="flex flex-col gap-1 text-tr-gray">
            <div className="text-tr-blue font-semibold whitespace-pre-line">
              Call{" "}
              <Link className="text-tr-red" href={TR_CONTACT_INFO["Phone"].ref}>
                {TR_CONTACT_INFO["Phone"].title}
              </Link>
              {"\n"}
              or <span className="text-tr-skyBlue">book online</span> here.
            </div>

            {bookingDetails("#676661")}
          </div>

          <div className="py-4">
            <Image
              src={BookingPerson}
              alt="image of a person"
              placeholder="blur"
              width={180}
            />
          </div>
        </div>

        {/* TODO: Update the form */}
        <div className="w-4/5  md:w-3/5 border-2 rounded-t-md shadow-xl mb-8 pb-5 overflow-hidden border-gray-200 ml-10">
          <div className="w-full m-0 text-xl text-center p-3 bg-tr-skyBlue text-white  px-4 border border-gray-300  rounded-t-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none pb-3">
            Book An Appointment
          </div>
          <div className="mt-12 px-4">
            <form
              onSubmit={handleSubmit(onValid)}
              className="flex flex-col mt-8 space-y-4 justify-center items-center"
            >
              <div className="rounded-md relative flex flex-col w-full items-center shadow-sm gap-2">
                <div className="flex flex-row gap-2 w-full">
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
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <select
                    {...register("type", {})}
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
                    {...register("date", {})}
                    type="date"
                    required={false}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <select
                    {...register("type", {})}
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register("address", {})}
                    type="text"
                    required={false}
                    placeholder="Street Address"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register("city", {})}
                    type="text"
                    required={false}
                    placeholder="City"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />

                  <input
                    {...register("postal", {})}
                    type="text"
                    required={false}
                    placeholder="Postal Code"
                    className="appearance-none pl-7 w-full px-3 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex flex-row gap-2 w-full">
                  <input
                    {...register("note", {})}
                    type="text"
                    required={false}
                    placeholder="Commentss"
                    className="appearance-none pl-7 w-full px-3 h-20 py-2 border border-gray-300  shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <button className="w-96 bg-tr-skyBlue hover:bg-blue-500 text-white  px-4 border border-transparent rounded-md shadow-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none py-3 text-base">
                {loading ? "Loading..." : "Book Now"}
              </button>

              {/* tell that booking is done. => show booking info */}
              {data && "booking done. our team will contact you"}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
