import React, { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Pagination from './component/pagination/Pagination';
import CodeBlock from './component/CodeBlock/codeBlock';
import ShowComponent from './component/ShowComponent/ShowComponent';
import Button from './component/button/Button';

export default function Home() {
    const [elements] = useState([
        "Elément 1",
        "Elément 2",
        "Elément 3",
        "Elément 4",
        "Elément 5",
        "Elément 6",
        "Elément 7",
        "Elément 8",
        "Elément 9",
        "Elément 10",
      ]);
  return (
   <div>
   <div className='fixed bg-transparent z-10 blur-1 text-black/65 w-full'>
   <Navbar style={"text-gray-900 px-20 mb-7 "}/>
   </div>
   <div className="w-[20%] flex justify-center flex-col fixed left-0 h-full scrollbar-thin overflow-y-scroll bg-white shadow-md lg:mt-[80px] text-[15px]">
         <p className=' lg:mt-[30vh] p-4 text-[18px] font-bold'>
         Getting Started
         </p>
         <ul>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>introduction</li>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>installation</li>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>CLI</li>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>Github</li>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>component</li>
            <li className='px-4 py-2 text-[16px] font-medium text-gray-900 cursor-pointer hover:bg-gray-200'>Templete</li>

         </ul>
      <ul className="list-none p-4 justify-center items-center">
        {elements.map((element) => (
          <li key={element} className="mb-2 p-2 ">
            {element}
          </li>
        ))}
      </ul>
    </div>
    <div className='lg:ml-[25%] flex justify-center items-center  flex-col lg:pt-[120px]'>

<div className='flex flex-col px-9 text-black/65'>
<h1 className='text-[30px] font-bold mb-3'>Introduction</h1>
<p>Welcome to the documentation for your React component library!
   This library provides a collection of pre-built, reusable components 
   that can be easily integrated into your React projects.</p>
<div>
</div>
<h2>Features</h2>

<ul className=' bg-slate-200 p-4 rounded my-4 shadow-sm'>
  <li>
    <strong>Wide Range of Components:</strong>
    <p> The library offers a variety of commonly used components, such as buttons, forms, cards, modals, and more.</p>
    </li>
  <li>
    <strong>
    Easy to Use: 
    </strong>
    <p>Simply copy and paste the component code into your project, or use the CLI tool for additional configuration options.</p>
    </li>
  <li>
    <strong>
    Flexible: 
    </strong>
    <p>
    The library is compatible with any React project and can be customized to fit your specific needs.
    </p>
    </li>
  <li>
    <strong>Extensible:</strong>
    <p>
     Create your own components and easily add them to your library.
    </p>
     </li>
</ul>

<h2 className='text-[20px] font-bold my-4'>Installation</h2>

<h3 className='font-semibold'>1. Copy-Paste</h3>

<ul>
  <li>Access the component library.</li>
  <li>Find the desired component.</li>
  <li>Copy the component code.</li>
  <li>Paste the code into your React project.</li>
</ul>

<h3 className=' font-semibold'>2. CLI Tool</h3>

<p>Install the CLI tool globally:</p>

<CodeBlock code ="npm install -g FongoUI" language={"bash"}/>

<p>Use the CLI tool to install a component:</p>
<CodeBlock code="npx FongolaUI add component-name"/>

<h3 className='font-semibold'>3. Local Library Creation</h3>
<p>Install the library creation tool globally:</p>

<CodeBlock code={"npx FongolaUI add --component"}/>
</div>
<ShowComponent >
<Button title={"click me"}/>
</ShowComponent>
   
        <Pagination/>
    </div>
   </div>

  )
}
