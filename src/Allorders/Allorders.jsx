import React, { useEffect, useState } from 'react'
import Navbar from '../Components/constant/Navbar/Navbar';
import Footer from '../Components/constant/Footer/Footer';

export default function Orders() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {

    }, [])
    
  return <>
  <Navbar/>
      <h2>Orders</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      <Footer/>

</>  
}
