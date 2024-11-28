"use client";
import Image from "next/image";
import NavBar from "./ui/nav";
import { useState } from "react";

export default function Home() {

  const [cartItems, setCartItems] = useState<number | undefined>(undefined);

  const increment = () => {
    setCartItems((prevState)=>(prevState ?? 0) + 1);
  }

  return (
    <div className="flex flex-col items-center">
      <NavBar cartItems = {cartItems}/>
      <div>
        <button onClick={increment}>Увеличить</button>
      </div>
    </div>
  );
}
