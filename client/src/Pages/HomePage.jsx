/** @format */

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Auth/Feature";
import StudyPic from "../assets/Study.png";
import { Link } from "react-router-dom";
import Stats from "../Components/Stats";
import axios from "axios";
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai"
export default function Homepage() {
  const [email, setEmail] = useState(""); // State to store the email input
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status
  const [error, setError] = useState(null); // State to handle subscription errors

  const handleSubscribe = async () => {
    try {
      // Make a POST request to your subscription endpoint
      console.log(email);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/subscribe-newsletter`,
        { email }
      );

      if (response.status === 200) {
        // Subscription successful
        setSubscribed(true);
        setError(null);
      } else {
        setError("Error subscribing to the newsletter.");
      }
    } catch (error) {
      console.log(error);
      setError("An error occurred while you subscribing to the newsletter.");
    }
  };
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Subject Selection tool for elective subject
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              The Subject Selection Tool for Elective Subject streamlines and
              simplifies the process of choosing elective subjects, helping
              students make informed decisions based on their interests and
              academic goals. It provides comprehensive information to optimize
              their educational experience and align their elective choices with
              their aspirations.
            </p>
            <Link
              to="/Home"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src={StudyPic}
              alt="mockup"
              width={400}
              class="ml-20 animate-bounce-slow"
            />
          </div>
        </div>
      </section>
      <Feature></Feature>
      <Stats />
      <section className="h-full text-center lg:text-left p-5 flex flex-col items-center" style={{backgroundImage:'linear-gradient(to bottom, #6b7280, #535a68, #3c4251, #262c3c, #111827)',}}>
  <div className="md:w-full text-2xl lg:text-3xl font-bold dark:text-white mb-5 w-1/2 text-center">
    <span className="text-primary ">
      Subscribe to our <span className="dark:text-primary-400">Newsletter</span>
    </span>
  </div>
  <div className="flex flex-col lg:flex-row justify-between p-2 w-full">
    <div className="w-full lg:w-1/2 mb-5 lg:mb-0">
      <p className="text-xl lg:text-2xl font-bold text-primary-400">Get the Latest from our platform</p>
      <p className="lg:mt-2 mt-5 mr-0 lg:mr-20 text-white font-medium">Get information regarding new Updates Features, Statistical Analysis, and Monthly Review from our team.</p>
    </div>

    <div className="w-full lg:w-1/2">
      <div className="flex flex-col lg:flex-row justify-between relative mb-3 w-full md:mr-3 md:mb-0" data-te-input-wrapper-init>
        <input
          type="text"
          className="peer block min-h-[auto] w-full rounded border-2 mr-2 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none text-neutral-200 placeholder:text-neutral-200 peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
          id="emailInput"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="emailInput"
          className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[2.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[2.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
        >
          Enter your email
        </label>
        <button
          type="button"
          onClick={handleSubscribe}
          className="lg:mt-0 mt-2 inline-block rounded bg-slate-800 px-7 pt-3 pb-2.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          data-te-ripple-init
          data-te-ripple-color="light"
          disabled={subscribed}
        >
          {subscribed ? "Subscribed" : "Subscribe"}
        </button>
      </div>

      <div className="mt-5">
        <h1 className="text-lg lg:text-xl text-blue-300 font-medium mb-2">Follow Us On:</h1>
        <div className="flex flex-row w-full lg:w-1/5 justify-between text-2xl lg:text-3xl text-slate-500">
          <AiFillTwitterSquare />
          <AiFillInstagram />
          <AiFillFacebook />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
    {error && <p className="text-red-500">{error}</p>}
  </div>
</section>

    </div>
  );
}
