import React from 'react'
import CodeBloc from '../component/code/CodeBloc'


export default function Introduction() {
    
  return (
    <div className='flex flex-col px-9 text-black/65'>
<h1 className='text-[30px] font-bold mb-3'>Introduction</h1>
<p>Welcome to the documentation for your React component library!
   This library provides a collection of pre-built, reusable components 
   that can be easily integrated into your React projects.</p>
<div>
</div>
<h2>Features</h2>

<ul className=' bg-slate-200/70 p-4 rounded my-4 shadow-sm'>
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

</div>
  )
}
