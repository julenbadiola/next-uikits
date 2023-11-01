"use client";

import { useEffect, useLayoutEffect, useState } from 'react';

const uikits = [
  {
    key: "nextui",
    title: "NextUI",
    description: "NextUI is a UI library for React that helps you build beautiful and accessible user interfaces. Created on top of Tailwind CSS and React Aria",
    href: "/nextui"
  },
  {
    key: "shadcn",
    title: "ShadCN",
    description: "Shadcn UI is not your regular component library. It's a collection of beautifully designed, accessible, and customizable components that you can simply copy and paste into your apps. Built with Radix UI and Tailwind CSS, Shadcn UI is all about accessibility, customizability, and an enhanced developer experience.",
    href: "/shadcn",
  },
  {
    key: "materialui",
    title: "MaterialUI",
    description: "",
    href: "/materialui",
  },
  {
    key: "joyui",
    title: "JoyUI",
    description: "",
    href: "/joyui",
  }
]

interface IframeProps {
  src?: string;
}
function Iframe(props: IframeProps) {
  const {src} = props
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true)
  }, [src])

  return <>
    {src && <iframe src={src} className={`h-full w-full ${loading ? "hidden" : ""}`} onLoad={() => setLoading(false)} />}
  </>;
}

const Index = () => {
  const [index, setIndex] = useState(1)

  const prev = index === 0 ? uikits[uikits.length - 1] : uikits[index - 1]
  const post = index === uikits.length - 1 ? uikits[0] : uikits[index + 1]

  const decrement = () => {
    if (index === 0) {
      setIndex(uikits.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  const increment = () => {
    if (index === uikits.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  return (
    <div className="h-screen min-w-full" style={{
      animation: "changeBackgroundColor 10s infinite"
    }}>
      <div className="h-screen w-full p-20">
        <div className="relative mx-auto w-[92%] h-[95%] flex">
          <div className='flex-none w-[3%] flex justify-end'>
            <button className="hover:bg-gray-300/10 rounded-l-xl text-gray-800 font-semibold text-white shadow p-2 text-center" onClick={decrement}>
              {prev?.title}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>


            </button>
          </div>
          <div className="flex-1 overflow-hidden h-full bg-white dark:bg-gray-800 border-gray-700 dark:border-gray-600 bg-gray-800 border-[30px] rounded-t-xl ">
            <div className='p-2 bg-gray-400 flex items-center gap-2'>
              <div className='mx-2 flex items-center gap-2'>
                <div className='h-[15px] w-[15px] rounded-full bg-gray-800  bg-red-500 hover:bg-red-700 shadow'></div>
                <div className='h-[15px] w-[15px] rounded-full bg-gray-800 bg-yellow-300 hover:bg-yellow-400 shadow'></div>
                <div className='h-[15px] w-[15px] rounded-full bg-gray-800 bg-green-400 hover:bg-green-600 shadow'></div>
              </div>

              <div className='bg-white w-full p-1 rounded-xl'>
                <a href={uikits[index]?.href} className='mx-1 hover:underline' target='_blank'>
                  http://example.com{uikits[index]?.href}
                </a>
              </div>
            </div>

            <Iframe src={uikits[index]?.href} />
          </div>
          <div className='flex-none w-[3%] flex'>
            <button className="hover:bg-gray-300/10 rounded-r-xl text-gray-800 font-semibold text-white shadow p-2 text-center" onClick={increment}>
              {post?.title}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>

            </button>
          </div>
        </div>
        <div className="relative mx-auto bg-gray-500 dark:bg-gray-500 rounded-b-xl rounded-t-sm h-[5%]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
    </div>
  )
};

export default Index;
