import React from 'react'

const SkillSection = () => {
  return (
    <div className='text-white  px-4 md:px-[300px] md:mt-[100px]'>
        <h1 className='m-3 text-[#3fc5ce]'>Tech Stack</h1>
        <div className='w-full h-1 bg-[#3fce60]'></div>
        <div className='mt-8 gap-5 grid grid-cols-1  md:grid-cols-4'>
            <div className='w-full p-3 hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Frontend</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#409cb3]'>HTML</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-blue-700'>CSS</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#5ed76491]'>Tailwind</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#b73d3d]'>Javascript</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#a9b340]'>React Js</div>
                </div>

            </div>
            <div className='w-full p-3  hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Backend</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>Express Js</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-blue-700'>Node Js</div>
                    {/* <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#5ed76491]'>Tailwind</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#b73d3d]'>Javascript</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#a9b340]'>React Js</div> */}
                </div>

            </div>
            <div className='w-full p-3 hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>DataBase</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>Mongo DB</div>
                    {/* <div className='rounded-md bg-[#04060c] text-xs p-2 border border-blue-700'>CSS</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#5ed76491]'>Tailwind</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#b73d3d]'>Javascript</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#a9b340]'>React Js</div> */}
                </div>

            </div>
            <div className='w-full p-3 hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Tools</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>Git</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#8940b3]'>GitHub</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#886060]'>VS Code</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#40b34d]'>Docker</div>
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default SkillSection