"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function FindDoctorsPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2, // Stagger effect
      },
    }),
  };

  const doctors = [
    {
      name: "Dr. Prerna Narang",
      specialty: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      rating: 4.5,
      videoFee: "₹800",
      chatFee: "Free",
      image: "images/profilepic.png", 
    },
    {
      name: "Dr. Prerna Narang",
      specialty: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      rating: 4.5,
      videoFee: "₹800",
      chatFee: "Free",
      image: "images/profilepic.png", 
    },
    {
      name: "Dr. Prerna Narang",
      specialty: "Male-Female Infertility",
      experience: "7 years of Experience",
      languages: "Speaks: English, Hindi, Marathi",
      rating: 4.5,
      videoFee: "₹800",
      chatFee: "Free",
      image: "images/profilepic.png", 
    },
    // Add more doctor objects as needed
  ];
  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Header Section */}
      <header className="bg-[#FFF7E2] border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <img src="/images/logo.png" className="w-40 cursor-pointer" alt="logo" />

          {/* Hamburger Menu for Mobile */}
          <button
            className="block md:hidden text-[#3A643B] focus:outline-none"
            id="menu-toggle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex space-x-6 text-[#474747] font-semibold"
            id="nav-menu"
          >
            <a href="#" className="hover:text-[#3A643B]">
              Home
            </a>
            <a href="#" className="text-[#3A643B] hover:text-[#3A643B]">
              Find Doctors
            </a>
            <a href="#" className="hover:text-[#3A643B]">
              About Us
            </a>
          </nav>

          {/* Login and Sign-up Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="px-4 py-2 border border-[#3A643B] text-[#3A643B] rounded-md hover:bg-[#3A643B] hover:text-[#FFFFFF]">
              Login
            </button>
            <button className="px-4 py-2 bg-[#3A643B] text-[#FFFFFF] rounded-md hover:bg-[#FFF7E2] border border-[#3A643B] hover:text-[#3A643B]">
              Sign-up
            </button>
          </div>
        </div>
      </header>


      {/* Main Section */}
      <main className="bg-green-50 py-12">
        <div className="flex flex-col justify-center items-center container mx-auto text-center px-4">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Find Expert Doctors For An In-Clinic Session Here
          </h2>

          {/* Search Filters */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0 w-full">
            {/* Location Dropdown */}
            <div className="flex border border-gray-300 rounded-md w-full sm:w-auto">
              <img
                src="/images/location.png"
                alt="location"
                className="bg-white py-2 px-2 rounded-l-md"
              />
              <select className="focus:outline-none p-2 text-gray-400 cursor-pointer rounded-r-md flex-1">
                <option>Select Location</option>
              </select>
            </div>

            {/* Search Input */}
            <div className="flex border border-gray-300 rounded-md w-full sm:w-96">
              <input
                type="text"
                placeholder="e.g. Doctor, specialisation, clinic name"
                className="flex-1 focus:outline-none p-2 rounded-l-md text-gray-600"
              />
              <button className="bg-white p-2 rounded-r-md">
                <img src="/images/arrow.png" alt="search" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Additional Filters */}
      <div className="flex flex-wrap justify-center gap-4 sm:space-x-10 my-5">
        <select className="bg-[#F3F3F3] text-[#585858] border border-[#EDEDED] rounded-md px-4 py-2 w-36 focus:outline-none cursor-pointer">
          <option>Expertise</option>
        </select>
        <select className="bg-[#F3F3F3] text-[#585858] border border-[#EDEDED] rounded-md px-4 py-2 w-36 focus:outline-none cursor-pointer">
          <option>Gender</option>
        </select>
        <select className="bg-[#F3F3F3] text-[#585858] border border-[#EDEDED] rounded-md px-4 py-2 w-36 focus:outline-none cursor-pointer">
          <option>Fees</option>
        </select>
        <select className="bg-[#F3F3F3] text-[#585858] border border-[#EDEDED] rounded-md px-4 py-2 w-36 focus:outline-none cursor-pointer">
          <option>Languages</option>
        </select>
        <select className="bg-[#DCEEDC] text-[#3A643B] border border-[#EDEDED] rounded-md px-4 py-2 w-36 focus:outline-none cursor-pointer">
          <option>All filters</option>
        </select>
      </div>

      <div className="border border-[#EDEDED]" />
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-7 mt-10 mb-8">
          {["Hair care", "Female", "Rs.0-Rs.500", "Hindi"].map((filter) => (
            <span
              key={filter}
              className="bg-[#EAF2EA] text-[#000000] px-4 py-2 rounded-full text-sm cursor-pointer"
            >
              {filter} ✕
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-8 md:px-0 mb-7">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              className="bg-[#FFF7E2] shadow-lg rounded-xl p-6 text-gray-800 border border-[#E3E3E3]"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index} // Pass index for staggered delay
            >
              {/* Doctor Image */}
              <div className="flex justify-center mb-4">
                <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* Doctor Info */}
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl sm:text-3xl font-bold">{doctor.name}</h2>
                <div className="mt-3 flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2">
                    <img src="images/attach.png" alt="attach" />
                    <p className="text-sm text-[#646665]">{doctor.specialty}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="images/degree.png" alt="degree" />
                    <p className="text-sm text-[#646665]">{doctor.experience}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="images/message.png" alt="message" />
                    <p className="text-sm text-[#646665]">{doctor.languages}</p>
                  </div>
                </div>
              </div>

              {/* Consultation Fees */}
              <div className="mt-4 flex gap-2 sm:gap-4 justify-center text-sm">
                <div className="flex flex-col items-center text-green-800 py-2 border border-[#3A643B63] rounded-lg w-1/2 cursor-pointer">
                  <p className="text-[#3C3C3C] font-semibold">Video Consultation</p>
                  <p className="text-[#3A643B] font-semibold">{doctor.videoFee}</p>
                </div>
                <div className="flex flex-col items-center py-2 border border-[#3A643B63] rounded-lg w-1/2 cursor-pointer">
                  <p className="text-[#3C3C3C] font-semibold">Chat Consultation</p>
                  <p className="text-[#3A643B] font-semibold">{doctor.chatFee}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-4 space-y-2">
                <button className="w-full bg-white text-[#3A643B] border border-[#3A643B] py-2 rounded-lg hover:bg-[#3A643B] hover:text-white transition">
                  View Profile
                </button>
                <button className="w-full bg-[#3A643B] text-white py-2 rounded-lg hover:bg-white hover:text-[#3A643B] border border-[#3A643B] transition">
                  Book a Consultation
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <button className="w-full bg-[#3A643B] text-white py-2 rounded-lg hover:bg-white hover:text-[#3A643B] border border-[#3A643B] transition mb-4">
          <Link href='/second'>
          Second Page
          </Link>
          
        </button>
      </div>
    </div>
  );
}
