import React from 'react'


const SkillSection = () => {
    
  return (
    <div  className='mySkills text-white  px-4 md:px-[200px] md:mt-[100px]'>
      
        <div className="text-[#4ade80] md:text-[30px]  flex  items-center gap-3">  <div className="h-[1px] w-7 bg-[#4ade80]"></div>My Skills</div>
        <div className='w-full h-1 bg-blue-600'></div>
        {/* <div>
        <iframe src="https://leetcode-stats-six.vercel.app/?username=AviGupta" frameborder="0"></iframe>
        [![KnlnKS's LeetCode stats](https://leetcode-stats-six.vercel.app/?username=KnlnKS)](https://github.com/KnlnKS/leetcode-stats)


        </div> */}
        <div className='mt-8 gap-5 grid grid-cols-1  md:grid-cols-4'>
            <div className='w-full p-3 md:hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Languages</div>
                <div className='flex mt-2 text-[#e2e5eb]  flex-wrap gap-2'>
                    {/* <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#409cb3]'>C</div> */}
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-blue-700'>C++</div>
                    {/* <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#5ed76491]'>Python</div> */}
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#b73d3d]'>Javascript</div>
                    {/* <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#e58d4d]'>TypeScript</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#3ba245]'>Java</div> */}
                </div>

            </div>
            <div className='w-full p-3 md:hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Frontend</div>
                <div className='flex mt-2 text-[#e2e5eb]  flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#409cb3]'>HTML</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-blue-700'>CSS</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#5ed76491]'>Tailwind</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#b73d3d]'>Javascript</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#a9b340]'>React Js</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border hover:scale-105 duration-200 border-[#cb659b]'>Next Js</div>
                </div>

            </div>
            <div className='w-full p-3  md:hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Backend</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>Express Js</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-blue-700'>Node Js</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#dc8b45]'>Websocket</div>
                  
                </div>

            </div>
            <div className='w-full p-3 md:hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>DataBase and ORM</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>MongoDB</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#ed49d5]'>PostgreSQL</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#9aa330]'>Mongoose</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#dc8b45]'>Prisma</div>
                   
                </div>

            </div>
            <div className='w-full p-3 md:hover:scale-110 duration-300 rounded-md bg-[#14213f] '>
                <div>Tools</div>
                <div className='flex mt-2 flex-wrap gap-2'>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#409cb3]'>Git</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#8940b3]'>GitHub</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#886060]'>VS Code</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#40b34d]'>Docker</div>
                    <div className='rounded-md bg-[#04060c] text-xs p-2 border border-[#bd141478]'>Postman</div>
                
                </div>

            </div>

        </div>
    </div>
  )
}

export default SkillSection