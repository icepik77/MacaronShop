"use client";
import Image from "next/image";
import NavBar from "./ui/nav";
import { useState } from "react";
import { montserrat } from "./fonts";


const loveImage = "/love-big.png" 
const arrowRight = "/arrow-right-svgrepo-com.svg"
const catalog1 = "/catalog1.png";
const bcgCatalog1 = "/background-catalog1.png";
const heart = "/popular/heart.png"

export default function Home() {

  const [cartItems, setCartItems] = useState<number | undefined>(undefined);

  const increment = () => {
    setCartItems((prevState)=>(prevState ?? 0) + 1);
  }

  return (
    <div className="bg-[#EDEDF0]">
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

      <section className="bg-white mt-[40px] px-[16px] pb-[30px]">
        <div>
          <h1 className="mb-[28px] text-center">Популярные наборы</h1>
        </div>
        <div className="grid grid-cols-2">
          <div className="w-[140px] lg:w-[370px] h-[215px] lg:h-[459px] border border-[#EDEDF0] rounded-[5px] mr-[8px] mt-[9px]">
            <div className="p-[8px] lg:p-[0px]">
              <Image className="w-[124px] lg:w-[370px] h-[98px] lg:h-[300px]" src={heart} width={370} height={300} alt="heart"></Image>
            </div>
            <div className="px-[8px] py-[21px]">
              <h3 className="text-xs lg:text-[18px]">Сердце</h3>
              <p className="text-[10px] lg:text-[14px]">24 штуки в коробке в виде сердца. Ассорти из 6 вкусов</p>
            </div>
            <div className="flex border-t border-[#EDEDF0] items-center">
              <div className="flex justify-center items-center border-r border-[#EDEDF0] w-[70%] lg:text-[18px] h-[56px]">
                2800 руб
              </div>
              <div className="w-[30%] flex items-center justify-center">
                <div className="flex items-center justify-center w-[12px] h-[16px] lg:w-[103px] lg:h-[20px] border border-indigo-500">
                  <div className="w-[12px] h-[16px] border border-indigo-500 mr-[10px]"></div>
                  <span>В корзину</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      
    </div>
  );
}
