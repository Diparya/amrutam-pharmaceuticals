// components/DoctorCard.jsx
'use client'
import { useState } from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from 'next/link';

const DoctorCard = () => {
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  // Ref to track the element
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  // useInView hook to trigger animation
  const isInView = useInView(ref, { threshold: 0.3 });
  const isInView1 = useInView(ref1, { threshold: 0.3 });
  const isInView2 = useInView(ref2, { threshold: 0.3 });
  const isInView3 = useInView(ref3, { threshold: 0.3 });
  const isInView4 = useInView(ref4, { threshold: 0.3 });

  return (
    <div className="bg-[#FFFFFF] min-h-screen">
      {/* Navbar */}
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

      {/* Doctor Profile */}
      <motion.main className="container mx-auto mt-8 bg-[#FFFBF2] border border-b-[#D8D8D8] shadow-lg pb-7 rounded-t-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <img src="images/banner.png" alt="banner" className='rounded-t-lg' />
        <div className='flex justify-evenly items-center space-x-2'>
          <img src="images/profilepic02.png" alt="profilepic02" className='-mt-10 cursor-pointer size-28 lg:size-auto' />
          <div>
            <div className='flex space-x-1 lg:space-x-2'>
              <h2 className="cursor-pointer text-sm lg:text-2xl font-semibold text-black">Dr. Bruce Willis</h2>
              <img src="images/tick.png" alt="tick" className='size-5 lg:size-auto'/>
            </div>
            <p className="text-[#3A643B] text-sm lg:text-lg">Gynecologist</p>
            <div className="flex items-center mt-2 text-[#3A643B]">
              <span className="mr-1 text-sm lg:text-lg">4.2</span>
              <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.5l2.93 7.46 7.57.06-6.14 4.69 2.31 7.29L12 17.72l-6.67 4.28 2.31-7.29-6.14-4.69 7.57-.06L12 2.5z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center hidden lg:flex flex-col justify-center items-center">
            <p className="text-[#3A643B] text-sm lg:text-base">Followers</p>
            <p className="text-sm lg:text-lg font-semibold text-black">850</p>
          </div>
          <div className="text-center hidden lg:flex flex-col justify-center items-center">
            <p className="text-[#3A643B] text-sm lg:text-base">Following</p>
            <p className="text-sm lg:text-lg font-semibold text-black">18K</p>
          </div>
          <div className="text-center hidden lg:flex flex-col justify-center items-center">
            <p className="text-[#3A643B] text-sm lg:text-base">Posts</p>
            <p className="text-sm lg:text-lg font-semibold text-black">250</p>
          </div>
          <button className="text-white bg-[#3A643B] rounded-md hover:bg-[#457746] text-sm py-1 px-3 lg:text-base lg:py-2 lg:px-7">
            Book an Appointment
          </button>
        </div>
      </motion.main>

      <div className="container mx-auto mt-10 px-2">
        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-7">
          {/* Left Section */}
          <div className="col-span-2 space-y-6">
            <motion.div ref={ref} className="rounded-xl border border-[#DCDCDC]"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <div className='py-2 px-5 flex justify-between items-center bg-gradient-to-r to-[#FBFCFB] from-[#F4F7EC] rounded-t-xl'>
                <h3 className="text-xl font-semibold text-[#313131]">A Little About Me</h3>
                <button className='text-[#585858] bg-[#FFFFFF] border border-[#3A643B] rounded-lg py-1 px-3'>Follow +</button>
              </div>
              <p className="mt-6 mb-3 mx-5 text-[#33354880]">
                Hello, I am Dr. Bruce Willis, a Gynecologist in Sanjivni Hospital, Surat. I love to work with all my
                hospital staff and senior doctors. Completed my graduation in Gynaecologist Medicine from the
              </p>
              <div className='flex items-center mx-5 space-x-3'>
                <p className='border border-t-[#33354880] flex-1' />
                <p className='text-black underline cursor-pointer'>Read More</p>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 ml-5">
                <p className='text-black'>Language Spoken</p>
                <p className="bg-[#2E37A40A] px-3 py-1 rounded-full text-[#505050]">English</p>
                <p className="bg-[#2E37A40A] px-3 py-1 rounded-full text-[#505050]">Hindi</p>
                <p className="bg-[#2E37A40A] px-3 py-1 rounded-full text-[#505050]">Telugu</p>
              </div>
              <div className="ml-5 my-6 flex items-center gap-4">
                <img src="images/facebook.png" alt="facebook" className='cursor-pointer size-9'/>
                <img src="images/instagram.png" alt="instagram" className='cursor-pointer size-9'/>
                <img src="images/youtube.png" alt="youtube" className='cursor-pointer size-9'/>
                <img src="images/twitter.png" alt="twitter" className='cursor-pointer size-9'/>
              </div>
            </motion.div>

            {/* Specializations Section */}
            <motion.div ref={ref1} className="rounded-xl border border-[#DCDCDC]"
             initial={{ x: -100, opacity: 0 }}
             animate={isInView1 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}>
              <h3 className='py-2 px-5 flex justify-between items-center bg-gradient-to-r to-[#FBFCFB] from-[#F4F7EC] text-xl font-semibold text-[#313131] rounded-t-xl'>I Specialize In</h3>
              <div className="m-6 flex flex-wrap gap-4 text-black">
                <div className='cursor-pointer flex flex-col justify-center items-center space-y-1'>
                  <img src="images/Women.png" alt="Women Health" />
                  <p>Women Health</p>
                </div>
                <div className='cursor-pointer flex flex-col justify-center items-center space-y-1'>
                  <img src="images/Skin.png" alt="Skin Care" />
                  <p>Skin Care</p>
                </div>
                <div className='cursor-pointer flex flex-col justify-center items-center space-y-1'>
                  <img src="images/Immunity.png" alt="Immunity" />
                  <p>Immunity</p>
                </div>
                <div className='cursor-pointer flex flex-col justify-center items-center space-y-1'>
                  <img src="images/Hair.png" alt="Hair Care" />
                  <p>Hair Care</p>
                </div>
              </div>
            </motion.div>

            {/* Concerns Section */}
            <motion.div ref={ref2} className="rounded-xl border border-[#DCDCDC]"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView2 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <h3 className='py-2 px-5 flex justify-between items-center bg-gradient-to-r to-[#FBFCFB] from-[#F4F7EC] text-xl font-semibold text-[#313131] rounded-t-xl'>The Concerns I Treat</h3>
              <div className="m-6 flex flex-wrap gap-3">
                {[
                  'Skin Treatment',
                  'Pregnancy',
                  'Period Doubts',
                  'Endometriosis',
                  'Pelvic Pain',
                  'Ovarian Cysts',
                  '+ 5 More',
                ].map((concern, idx) => (
                  <span key={idx} className="bg-[#F7F7FC] px-3 py-1 cursor-pointer rounded-full text-[#3A643B]">
                    {concern}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Work Experience Section */}
            <motion.div ref={ref3} className="rounded-xl border border-[#DCDCDC]"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView3 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <h3 className='py-2 px-5 flex justify-between items-center bg-gradient-to-r to-[#FBFCFB] from-[#F4F7EC] text-xl font-semibold text-[#313131] rounded-t-xl'>My Work Experience</h3>
              <p className="m-5 text-[#3A643B] font-medium">I HAVE BEEN IN PRACTICE FOR: <span className="font-bold">7+ YEARS</span></p>
              <div className='border border-t-black m-5 w-96'/>
              <div className="mx-5 mb-8 space-y-4">
                {[
                  { name: "Midtown Medical Clinic", role: "Senior doctor", duration: "2016–PRESENT" },
                  { name: "Midtown Medical Clinic", role: "Senior doctor", duration: "2010–2015" },
                ].map((experience, idx) => (
                  <div
                    key={idx}
                    className="flex items-center p-4 rounded-lg shadow-sm cursor-pointer"
                  >
                    <img src="images/Work.png" alt="Work" />
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-700">{experience.name}</h4>
                      <p className="text-sm text-gray-500">{experience.role}</p>
                    </div>
                    <div className="ml-auto text-sm text-gray-500">{experience.duration}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Reviews Section */}
            <motion.div ref={ref4} className="rounded-xl border border-[#DCDCDC]"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView4 ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}>
              <h3 className='py-2 px-5 flex justify-between items-center bg-gradient-to-r to-[#FBFCFB] from-[#F4F7EC] text-xl font-semibold text-[#313131] rounded-t-xl'>Featured Reviews (102)</h3>
              <div className="mx-5 mb-8 mt-5 space-y-5">
                {[
                  {
                    name: "Alicent Hightower",
                    date: "20 January 2023",
                    consultation: "Skin Care",
                    review:
                      "Might be a bit early to confirm but yes I can see noticeable difference in my hairfall. Will write again after using it for longer periods.",
                    rating: 5,
                  },
                  {
                    name: "Alicent Hightower",
                    date: "20 January 2023",
                    consultation: "Pregnancy",
                    review:
                      "Might be a bit early to confirm but yes I can see noticeable difference. Will write again after using it for longer periods.",
                    rating: 5,
                  },
                ].map((review, idx) => (
                  <div key={idx} className="bg-[#FAFAFA] p-4 rounded-lg shadow-sm cursor-pointer">
                    <div className="flex items-center">
                      <img src="images/Reviews.png" alt="Reviews" />
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-700">{review.name}</h4>
                        <p className="text-sm text-gray-500">Consulted for {review.consultation}</p>
                      </div>
                      <div className="ml-auto text-sm text-gray-500">{review.date}</div>
                    </div>
                    <div className="mt-4">
                    <div className="flex">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 h-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.5l2.93 7.46 7.57.06-6.14 4.69 2.31 7.29L12 17.72l-6.67 4.28 2.31-7.29-6.14-4.69 7.57-.06L12 2.5z" />
                  </svg>
                ))}
              </div>
                      <p className="mt-2 text-gray-700">{review.review}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>


          {/* Right Section */}
          <motion.div className="col-span-2 rounded-xl border border-[#DCDCDC] px-4 py-6 text-black h-fit"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
            <div className='flex items-center justify-between border border-[#DCDCDC] rounded-xl py-2 px-4'>
            <h3 className="text-xl font-semibold">Appointment Fee</h3>
            <p className="mt-2 text-2xl font-semibold text-[#3A643B]">₹699.00</p>
            </div>
            <div className='flex items-center space-x-4 my-7 mx-3'>
            <h3 className="text-lg font-semibold">Select your mode of session</h3>
            <div className='border border-t-[#D4D4D4] flex-1'/>
            </div>
            <div className="mt-2 flex gap-4">
              <div className='cursor-pointer flex flex-col justify-center items-center border border-[#DCDCDC] rounded-lg py-3 px-10'>
                <h3 className='font-semibold'>In-Clinic</h3>
                <p className='text-sm'>45 Mins</p>
              </div>
              <div className='cursor-pointer flex flex-col justify-center items-center border border-[#DCDCDC] rounded-lg py-3 px-10 bg-[#F2FBF2]'>
                <div className='flex items-center justify-center space-x-1'>
                <h3 className='font-semibold text-[#3A643B]'>Video</h3>
                <img src="images/verify.png" alt="verify" className='size-4' />
                </div>
                <p className='text-sm'>45 Mins</p>
              </div>
              <div className='cursor-pointer flex flex-col justify-center items-center border border-[#DCDCDC] rounded-lg py-3 px-10'>
                <h3 className='font-semibold'>Chat</h3>
                <p className='text-sm'>10 Mins</p>
              </div>
            </div>
            <div className='flex items-center space-x-4 my-7 mx-3'>
            <h3 className="text-lg font-semibold">Pick a time slot</h3>
            <div className='border border-t-[#D4D4D4] flex-1'/>
            <img src="images/calender.png" alt="calender" className='size-10' />
            </div>
            <div className="border border-[#DCDCDC] rounded-xl flex items-center justify-center py-4 gap-3">
                <img src="images/left.png" alt="left" className='mr-3 cursor-pointer' />
                <div className="cursor-pointer flex flex-col justify-center items-center p-3 text-center rounded-lg border border-[#DCDCDC] bg-[#F2FBF2]">
                  <p className='text-[#3A643B] font-semibold'>Mon, 10 Oct</p>
                  <p className='text-sm text-[#818181]'>10 slots</p>
                </div>
                <div className="cursor-pointer flex flex-col justify-center items-center p-3 text-center rounded-lg border border-[#DCDCDC]">
                  <p className='font-semibold'>Tue, 11 Oct</p>
                  <p className='text-sm text-[#D5512E]'>02 slots</p>
                </div>
                <div className="cursor-pointer flex flex-col justify-center items-center p-3 text-center rounded-lg border border-[#DCDCDC]">
                  <p className='font-semibold'>Wed, 12 Oct</p>
                  <p className='text-sm text-[#F1B93A]'>05 slots</p>
                </div>
                <img src="images/right.png" alt="right" className='ml-3 cursor-pointer' />
          
            </div>

            <div className='mt-7 mx-6'>
            <h3 className="text-lg font-semibold mt-7">Morning</h3>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {['09:00 AM', '09:30 AM', '10:00 AM', '10:15 AM', '10:45 AM', '11:00 AM'].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`border border-[#DCDCDC] py-4 rounded-3xl ${selectedTime === time
                    ? 'bg-[#3A643B] text-white'
                    : ' text-gray-700'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
            </div>

            <div className='mt-7 mx-6'>
            <h3 className="text-lg font-semibold mt-7">Evening</h3>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {['04:00 PM', '04:15 PM', '04:30 PM', '04:45 PM', '05:15 PM'].map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`border border-[#DCDCDC] py-4 rounded-3xl ${selectedTime === time
                    ? 'bg-[#3A643B] text-white'
                    : ' text-gray-700'
                    }`}
                >
                  {time}
                </button>
              ))}
            </div>
            </div>

            <button className="mt-6 w-full px-4 py-3 text-white bg-[#3A643B] rounded-md hover:bg-green-800">
              Make An Appointment
            </button>
          </motion.div>
        </div>
        <button className="w-full bg-[#3A643B] text-white py-2 rounded-lg hover:bg-white hover:text-[#3A643B] border border-[#3A643B] transition mb-4">
          <Link href='/'>
          Second Page
          </Link>
          
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
