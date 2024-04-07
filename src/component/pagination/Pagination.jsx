import React, { useState } from 'react'
import { componentItem } from '../FongolaUIcomponentItem/FongolaUIcomponentItem'
import { Link } from 'react-router-dom'

export default function Pagination() {
    const [count, setCount] = useState(0)
   const handlNext = ()=>{
    if(componentItem.length>=count){
        setCount(count>=componentItem.length?componentItem.length:count+1)
    }
   }

   const handlPrev = ()=>{
    if(componentItem.length>=count){
        setCount(count<=0?0: count-1)
    }
   }

  return (
    <div>
        <div className='flex justify-between w-[95%]'>
        <Link className={`border-[1px] px-4 py-3 w-[30%] rounded  items-center flex justify-between ${count==0?" opacity-0":""}`} to={`/docs/components/${componentItem[count-1]}`}  onClick={handlPrev}>
        <i className="bi bi-chevron-left font-bold text-[20px]"></i>
            <span>{componentItem[count-1]}</span>
        
        </Link>
        <Link className={`border-[1px] px-4 py-3 w-[30%] rounded  items-center flex justify-between ${count==componentItem.length?" opacity-0":""}`} to={`/docs/components/${componentItem[count]}`}   onClick={handlNext}><span>{componentItem[count]}
        </span>
        <i class="bi bi-chevron-right"></i>
        </Link>
        </div>
        <div>
        </div>
    </div>
  )
}
