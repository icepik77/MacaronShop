"use client";
import Image from "next/image";
import NavBar from "./ui/nav";
import { useState } from "react";
import { montserrat } from "./fonts";


const loveImage = "/love-big.png" 
const arrowRight = "/arrow-right-svgrepo-com.svg"
const catalog1 = "/catalog1.png";
const bcgCatalog1 = "/background-catalog1.png";

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
      <section className="hidden">
        <div className="flex flex-col items-center md:flex-row md:flex-row-reverse md:h-[475px]">
          <div className="w-full md:w-[35%]">
            <div className={`${montserrat.className} flex flex-col items-center`}>
              <p className="pl-2 mt-[65px] text-lg">
                Macaronshop
              </p>
            </div>
            <div className="relative flex justify-center w-full">
              <span className="mt-[3%] h-px w-5 bg-black content-['']"></span>
              <p className="mx-3 text-sm">since 2013</p>
              <span className="mt-[3%] h-px w-5 bg-black content-['']"></span>
            </div>
            <div className="flex flex-col items-center">
              <h1 className={`${montserrat.className} text-center mt-[40px] text-2xl`}>Настоящая любовь</h1>
              <p className="text-center max-w-[265px] text-sm mt-[5px] ">
                Пирожные макарон и другие десерты <br /> из натуральных ингредиентов, приготовленные с любовью
              </p>
            </div>
          </div>  
          <div className="flex justify-center pl-[12%] md:pl-0 mt-[20px] md:w-[65%] md:h-full">
            <Image src={loveImage} alt="Настоящая любовь" width={313} height={260}/>
          </div>
        </div>
       
      </section>

      {/* Секция наборов */}
       
      <section className="bg-white">
         <div className="hidden lg:grid lg:grid-cols-2 lg:grid-rows-3 max-w-[1440px] lg:h-[832px] lg:gap-x-[26px] lg:gap-y-[31px] lg:px-[9.4%] mx-auto">
          <div className="flex flex-col items-center border-2 border-indigo-500 px-[10%] py-[10%] bg-[url('/background-catalog1.png')] bg-cover bg-center">
              <Image src={catalog1} width={100} height={100} alt="Готовые наборы"></Image>
              <div className="flex max-w-[470px] items-center justify-between pt-[10px] px-[5%] h-[49.5px]">
                <h3 className={`${montserrat.className}`}>Готовые наборы</h3>
                <Image className="pl-[5px]" src={arrowRight} width={12} height={7.58} alt="arrow" />
              </div>
              <div>
                <p className="text-center">
                  Готовые наборы со скидкой. <br /> Вы можете подобрать набор на подходящий случай.
                </p>
              </div>
              
          </div>
          <div className="border-2 border-indigo-500"></div>
          <div className="border-2 border-indigo-500"></div>
          <div className="border-2 border-indigo-500"></div>
          <div className="border-2 border-indigo-500"></div>
          <div className="border-2 border-indigo-500"></div>
         </div>
         <div className="lg:hidden">
         <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Готовые наборы</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
          <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Собрать свой набор</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
          <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Набор с индивидуальной печатью</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
          <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Свадебные предложения</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
          <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Корпаративные подарки</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
          <div className="flex w-full items-center justify-between px-[5%] border-b-2 border-[#E5E5E5] h-[49.5px]">
            <h3 className={`${montserrat.className}`}>Для юридических лиц</h3>
            <Image className="" src={arrowRight} width={12} height={7.58} alt="arrow" />
          </div>
            
         </div>
      </section>
      
    </div>
  );
}
