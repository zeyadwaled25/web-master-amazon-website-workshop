import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './../NavBar/NavBar';
import HomeNav from '../HomeNav/HomeNav';
import Home from '../Home/Home';

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <HomeNav></HomeNav>
      <Outlet></Outlet>
   
    </div>
  )
}