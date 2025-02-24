import React from "react";
import Slider from "../Slider/Slider";



import './Home.css'
import Photos from "../photos/Photos";
import Photos2 from "../photos2/Photos2";
import Navbar from "../Navbar/NavBar"
import HomeNav from "../HomeNav/HomeNav"

export default function Home() {
 
  return (
    <>

    <section className=" body">
      <Navbar />
    <HomeNav/>


    <div className="head p-0 w-100  m-0">
        <Slider></Slider>
         </div>

         <div className="main p-3">
          <div className="photos p-3">
          <h5>Best Sellers in Clothing & Accessories</h5>
           <Photos className=" swiper px-3"></Photos>
           


          </div>
          <div className="photos p-3 mt-5">
          <h5>Min. 50% off | Unique kitchen finds | Amazon Brands & more</h5>
          <Photos2 className=" swiper px-3 "></Photos2>
          </div>
        
        </div>

    </section>
      
        
        
     

     
    </>
  );
}
