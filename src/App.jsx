import { useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Docs from './Routes/docs/docs'


function App() {
  const [count, setCount] = useState(0)
  const [code, setcode] = useState("")
 
  return (
    <div className=''>
      {/* <div className='bg-[#1e293b] bg-gradient-to-br from-teal-500 to-[#021431] px-20 h-[100vh] '>
      <Navbar/>
      <Title/>
     <TechnologiesImageScreens/>
      </div>
      <div className='h-[100vh] w-[100%] flex'>
        <Section1/>
      
      </div>
      <div className='overflow-hidden shadow-lg p-10 bg-[#ddd]'>
       
      </div> */}
     <Navbar/>
     <Docs/>

    </div>
  )
}

export default App
