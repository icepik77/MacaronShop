import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './logo'
import Image from 'next/image'
import { useState } from 'react'

import { FaTelegramPlane } from "react-icons/fa";


const navigation = [
  { name: 'Санкт-Петербург', href: '#', current: false },
  { name: 'Сладкие дни', href: '#', current: false },
  { name: 'Подарочные наборы', href: '#', current: false },
  { name: 'Создать набор', href: '#', current: false },
  { name: 'Создать дизайн', href: '#', current: false },
  { name: 'Компаниям', href: '#', current: false },
  { name: 'Весь каталог', href: '#', current: false },
  { name: '8 812 309-82-88', href: '#', current: false },

]

function classNames(...classes: (string | boolean | null | undefined)[]): string {
    return classes.filter(Boolean).join(' ')
}

const cart = "/cart.svg";

interface NavBarInterface{
  cartItems: number | undefined; 
}
  

const NavBar: React.FC<NavBarInterface> = ({cartItems}) => {
  return (
    <Disclosure as="nav" className="bg-[#F7EBE5] w-full max-w-screen-2xl px-4 relative">
      <div className="max-w-screen-2xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="bg-[#F7EBE5] group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:justify-between ">
            <div className="flex flex-shrink-0 items-start">
              <Logo/>
            </div>
            <div className="hidden sm:block mx-auto flex justify-center items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className='border-b-2 border-slate-500'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex relative inline-flex items-end">
            <Image src={cart} width={25} height={25} alt="cart" />
            <div className="text-slate-50 bg-slate-950 w-[15px] h-[15px] rounded-full text-xs text-center align-middle absolute bottom-0 right-0 translate-x-2 translate-y-1">
                {cartItems ?? "1"}              
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? '' : 'border-b border-slate-300 text-center hover:bg-gray-700 hover:text-white',
                'block  px-3 py-2 text-base font-medium last:border-0',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default NavBar;
