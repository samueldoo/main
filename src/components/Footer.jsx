import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Address: Lagos
        </p>

        <div className='flex flex-col md:flex-row text-md gap-5 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>alademehinsamuel@gmail.com</p>
          <p>+2347066489621</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10 hover:cursor-pointer'>
          <a href="https://www.youtube.com/"><BsYoutube className='hover:scale-125' /></a>
          <a href="https://www.facebook.com/Samueldoo2?mibextid=LQQJ4d"><BsFacebook className='hover:scale-125' /></a>
          <a href="/"><BsInstagram className='hover:scale-125' /></a>
          <a href="https://www.linkedin.com/in/alademehinsamuel/"><BsLinkedin className='hover:scale-110' /></a>
          <a href="https://twitter.com/Sammiidoo"><AiFillTwitterCircle className='hover:scale-125' /></a>
        </div>

        <p className='text-gray-400 text-md tracking-wider'>@2023 SamuelDoo</p>
      </div>
    </footer>
  );
};

export default Footer;
