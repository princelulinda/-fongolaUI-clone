import React from 'react'
import { componentItem } from '../../component/FongolaUIcomponentItem/FongolaUIcomponentItem'
// import Button

export default function ComponentRender({composant}) {
  console.log(componentItem);
  return (
    <div>
        {componentItem.map((item,key)=>{
          if(composant == item){
            return(
              <div> {item}</div>
            )
          }
        })}
    </div>
  )
}
