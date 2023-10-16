import React from 'react'
import Logo from '../Logo/Logo'
import Link from 'next/link'
import { SunIcon, LinkedinIcon, TwitterIcon } from '../Icons/Icons'

const Header = () => {
  return (
    <div className='w-full p-4  px-5 sm:px-10 flex items-center justify-between'>
      <Logo />
      <nav className='w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm'>
        <Link href="/" className="mr-2">Home</Link>
        <Link href="/about" className="mx-2">About</Link>
        <Link href="/contact" className="mr-2">Contact</Link>
        <button><SunIcon /></button>
      </nav>
      <div>
        <a href="#" className='inline-block w-6 h-6 mr-4'><LinkedinIcon className='hover:scale-105 transition-all ease duration-200' /></a>
        <a href="#" className='inline-block w-6 h-6 mr-4'><TwitterIcon className='hover:scale-105 transition-all ease duration-200' /></a>
      </div>
    </div>
  )
}

export default Header