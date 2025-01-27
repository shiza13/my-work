import Header from "./components/header"
import React from "react";
import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image"
import Footer from "./components/footer";
export default function Home(){
  const features = [
    {
      icon: <Truck className="text-gray-900 w-8 h-8" />,
      title: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard",
    },
    {
      icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
      title: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      icon: <Tag className="text-gray-900 w-8 h-8" />,
      title: "Unbeatable prices",
      description: "For our materials and quality, you won't find better prices anywhere",
    },
    {
      icon: <RefreshCcw className="text-gray-900 w-8 h-8" />,
      title: "Recycled packaging",
      description: "We use 100% recycled materials to ensure our footprint is more manageable",
    },
  ];

  const products = [
    {
      image: "/Parent.png", // Replace with actual image paths
      name: "The Dandy Chair",
      price: "£230",
    },
    {
      image: "/Parent (1).png",
      name: "Rustic Vase Set",
      price: "£155",
    },
    {
      image: "/Parent (2).png",
      name: "The Silky Vase",
      price: "£125",
    },
    {
      image: "/Parent (3).png",
      name: "The Lucy Lamp",
      price: "£399",
    },
  ];

 
 return(<div>
<Header/>
<div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/Hero Blocks.png')" }}>
      {/* Replace '/your-image.jpg' with your actual image path */}
      <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white p-10 rounded-lg shadow-xl max-w-lg">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
          Luxury homeware for people who love timeless design quality
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Shop the new Spring 2022 collection today
        </p>
        <button className="px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition">
          View collection
        </button>
      </div>
    </div>
    <section className="py-16 px-6 bg-white">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    <section className="py-16 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
    {products.map((product, index) => (
      <div key={index}>
        {/* Image Container */}
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden"
          style={{ width: "305px", height: "375px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Price below the Image Container, aligned to the left */}
        <div className="mt-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-8">
  <button
    className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
    style={{ width: "170px", height: "56px" }}
  >
    View Collection
  </button>
</div>
  
</section>
  
<section className="py-16 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
    {/* First Container */}
    <div
      className=" text-white shadow-md"
      style={{
        backgroundColor:"#1d1160",
        width: "634px",
        height: "478px",
        borderRadius: "0px", // Sharp borders (no rounding)
        position: "relative",
      }}
    >
      {/* Text */}
      <div style={{ position: "absolute", top: "64px", left: "64px" }}>
        <p className="font-bold text-2xl">
          It started with a small idea
        </p>
        <p className="text-base">
          A global brand with local beginnings, our story began </p>
          <p>in a small
          studio in South London in early 2014.
        </p>
      </div>

      {/* Button */}
      <button
        className="text-white font-semibold rounded-lg"
        style={{
          position: "absolute",
          top: "368px",
          left: "64px",
          width: "170px",
          height: "56px",
          backgroundColor: "#4E4D93", // Custom button color
        }}
      >
        View Collection
      </button>
    </div>

    {/* Second Container */}
    <div
      className="bg-white shadow-md"
      style={{
        width: "630px",
        height: "478px",
        borderRadius: "0px", // Sharp borders (no rounding)
      }}
    >
      <img
        src="/Image Block.png" // Replace with actual image path
        alt="Second Container Image"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</section>
<section className="py-16 px-6">
  <div
    className="relative shadow-md mx-auto"
    style={{
      width: "100%",
      maxWidth: "1440px",
      height: "444px",
      borderRadius: "0px", // Sharp edges
      backgroundImage: "url('/Email sign-up (2).png')", // Mobile background image
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Text Content */}
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-white px-6">
      <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
      <p className="text-lg">
        Sign up for our newsletter and receive exclusive offers on
      </p>
      <p className="text-lg ml-12 sm:ml-0">
        new ranges, sales, pop-up stores, and more
      </p>

      {/* Features with Tick Logos */}
      <div className="flex justify-center items-center mt-6 space-x-6 sm:space-x-4">
        <div className="flex items-center">
          <FaRegCheckCircle className="text-white mr-2" />
          <span>Exclusive offers</span>
        </div>
        <div className="flex items-center">
          <FaRegCheckCircle className="text-white mr-2" />
          <span>Free events</span>
        </div>
        <div className="flex items-center">
          <FaRegCheckCircle className="text-white mr-2" />
          <span>Large discounts</span>
        </div>
      </div>

      {/* Input and Button */}
      <div className="flex flex-col lg:flex-row justify-center items-center mt-6 relative w-full">
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email"
    className="p-3 w-full lg:w-[300px] text-black rounded-none mb-4 lg:mb-0 lg:mr-4"
  />

  {/* Sign-Up Button */}
  <button
    className="text-white font-semibold py-2 px-3 bg-[#1d1160] w-full lg:w-[118px] lg:h-[51px]"
  >
    Sign Up
  </button>
</div>
    </div>
  </div>

</section>
<div><Footer/></div>


  </div>
)}