"use client";
import Image from "next/image";
import NavBar from "./ui/nav";
import { useState } from "react";
import { montserrat } from "./fonts";


const loveImage = "/love-big.png" 

export default function Home() {

  const [cartItems, setCartItems] = useState<number | undefined>(undefined);

  const increment = () => {
    setCartItems((prevState)=>(prevState ?? 0) + 1);
  }

  return (
    <div className="bg-[#EDEDF0] overflow-hidden">
      <div className="flex flex-col items-center">
        <NavBar cartItems = {cartItems}/>
      </div>
      <div className="flex flex-col items-center">
        <div className={`${montserrat.className}`}>
          <p className="pl-2 mt-[65px] text-lg">
            Macaronshop
          </p>
          <div className="relative flex items-center">
            <span className="absolute left-0 h-px w-5 bg-black content-['']"></span>
            <p className="mx-9 text-sm">since 2013</p>
            <span className="absolute right-0 h-px w-5 bg-black content-['']"></span>
          </div>
        </div>
        <div>
          <h1 className={`${montserrat.className} text-center mt-[40px] text-2xl`}>Настоящая любовь</h1>
          <p className="text-center max-w-[265px] text-sm mt-[5px]">
            Пирожные макарон и другие десерты <br /> из натуральных ингредиентов, приготовленные с любовью
          </p>
        </div>
        <div className="pl-[12%] scale-150 mt-[20px]">
          <Image src={loveImage} alt="Настоящая любовь" width={313} height={260}/>
        </div>
      </div>
    </div>
  );
}
