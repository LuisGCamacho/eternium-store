"use client"

import { useUIStore } from "@/src/store";
import clsx from "clsx";
import Link from "next/link";
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5";


const menuItems = [
    {
        name: "Perfil",
        icon: <IoPersonOutline size={30}/>,
        patch: "/"
    },
    {
        name: "Ordenes",
        icon: <IoTicketOutline size={30}/>,
        patch: "/"  
    },
    {
        name: "Ingresar",
        icon: <IoLogInOutline size={30}/>,
        patch: "/"
    },
    {
        name: "Salir",
        icon: <IoLogOutOutline size={30}/>,
        patch: "/"
    }
]

const menuItemsAdmin = [
    {
        name: "Productos",
        icon: <IoShirtOutline size={30}/>,
        patch: "/"
    },
    {
        name: "Ordenes",
        icon: <IoTicketOutline size={30}/>,
        patch: "/"
    },
    {
        name: "Usuarios",
        icon: <IoPeopleOutline size={30}/>,
        patch: "/"
    },

]

export const Sidebar = () => {

    const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen )
    const closeMenu = useUIStore( state => state.closeSideMenu )

  return (
    <div>
      {/* Background black */}
      {
        isSideMenuOpen &&(
            <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-20"></div>
        )
      }
      
      {/* Blur */}
      {
        isSideMenuOpen &&(
            <div 
                className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-blur-xs"
                onClick={closeMenu}
            ></div>
        )
      }
      
      {/* Sidemenu */}
      <nav className={
        clsx(
            "fixed right-0 top-0 w-[500px] h-screen bg-white shadow-2xl z-20 transform transition-all duration-300",
            {
                "translate-x-full": !isSideMenuOpen
            }
        )
      }>

        {/* Close button */}
        <IoCloseOutline
        onClick={closeMenu}
          size={50}
          className="absolute top-5 right-5 cursor-pointer"
        />

        {/* Input */}
        <div className="relative mt-24 mx-3">
          <IoSearchOutline
            size={20}
            className="absolute top-2 left-3"
          />

          <input
            type="text"
            placeholder="Buscar"
            className="mb-3 w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-300 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Menu */}
        {
            menuItems.map(item => (
                <Link
                    key={item.name}
                    href={`${item.patch}`}
                    className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    {item.icon}
                    <span className="ml-3 text-xl">{item.name}</span>
                </Link>
            ))
        }

        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10"></div>
        
        {/* Items admin menu */}
        {
            menuItemsAdmin.map(item => (
                <Link
                    key={item.name}
                    href={`${item.patch}`}
                    className="flex items-center mt-3 p-2 hover:bg-gray-100 rounded transition-all"
                >
                    {item.icon}
                    <span className="ml-3 text-xl">{item.name}</span>
                </Link>
            ))
        }
      </nav>
    </div>
  );
};