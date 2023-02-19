"use client"
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'

const HomeSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'>
        <div className='md:w-1/2 md:mt-2'>
          <Image src="/code.svg" alt="" width={325} height={325} />
        </div>
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='font-bold text-4xl mt-6 md:mt-0 md:text-6xl'>Leandro Burgos Corvalán</h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            <span className='font-semibold text-[#035AA6]'>
              Ingeniero en informática | Programador{" "}
            </span>
          </p>
          <button className='text-neutral-100 font-semibold px-6 py-3 bg-[#035AA6] rounded shadow hover:bg-[#001E6C]'><a href="" target='_blank'>Ver mi CV</a></button>
        </div>
      </div>

      <div className='flex flex-row justify-center'>
        <Link
        to="about"
        activeClass='active'
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        </Link>
        <HiArrowDown size={35} className='animate-bounce'/>
      </div>
    </section>
  )
}

export default HomeSection