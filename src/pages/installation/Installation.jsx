import React from 'react'
import CodeBloc from '../../component/code/CodeBloc'
import Pagination from '../../component/pagination/Pagination'

export default function Installation() {
  return (
    <div className='w-full lg:mt-[-20px]'>
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

<CodeBloc code="npm install -g FongolaUI" language={"bash"}/>

<p>Use the CLI tool to install a component:</p>
<CodeBloc code="npx FongolaUI add component-name"/>

<h3 className='font-semibold'>3. Local Library Creation</h3>
<p>Install the library creation tool globally:</p>

<CodeBloc code={"npx FongolaUI add --component"}/>
<Pagination/>
    </div>
  )
}
