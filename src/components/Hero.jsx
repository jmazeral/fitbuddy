import React from 'react'
import Button from './button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
        <div className="flex flex-col gap-4">
            <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:-7xl'><span  className="text-blue-400">Fit</span>Buddy</h1>
            <p className='text-md md:text-base font-medium'>Your new gym helper</p>
        </div>
        <p className='text-sm md:text-base font-light'>Your ultimate gym companion, FitBuddy is here to guide every <span className="text-blue-400 font-medium">rep</span>, <span className="text-blue-400 font-medium">set</span>, and <span className="text-blue-400 font-medium">session</span>. Whether you're just starting out or looking to <span className="text-blue-400 font-medium">level up</span>, our workout generator crafts personalized plans to <span className="text-blue-400 font-medium">match your goals</span>.
        <br></br> Ready to take the guesswork out of your routine?</p>
        <a href="#gen"><Button text={"Begin"}></Button></a>
    </div>
  )
}
