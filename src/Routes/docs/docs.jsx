import React, { useState } from 'react'
import { Routes, Route, useParams, Link, Outlet} from 'react-router-dom';
import Introduction from '../../pages/introduction';
import Navbar from '../../component/Navbar/Navbar';
import { componentItem as elements } from '../../component/FongolaUIcomponentItem/FongolaUIcomponentItem';
import ComponentRender from '../../pages/componentRender/componentRender';
import Pagination from '../../component/pagination/Pagination';
export default function Docs({componentDefault}) {
  const {component} = useParams()
    
  return (
  //  <div>
     <Navbar/>

  )
}

