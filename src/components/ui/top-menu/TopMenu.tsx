import { titleFont } from '@/src/config/fonts'
import Link from 'next/link'
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5'


export const TopMenu = () => {
  return (
    <nav className='flex px-5 justify-between items-center w-full'>
        {/* Logo */}
        <div>
            <Link href={"/"}></Link>
            <span className={`${ titleFont.className } font-bold `}>ETERNIUM</span>
        </div>

        {/* Center Menu */}
        <div className='hidden sm:block'>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/men"}> Hombres </Link>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/woman"}> Mujeres </Link>
          <Link className='m-2 p-2 rounded-md transition-all hover:bg-gray-100' href={"/category/kids"}> Niños </Link>
        </div>

        {/* Search, Cart*, Menu*/}
        <div className='flex items-center p-4 gap-2'>
          {/* Search*/}
          <Link className="x-5" href={"/search"}>
            <IoSearchOutline className='w-5 h-5'/>
          </Link>
          {/* Cart */}
          <Link className="x-2" href={"/cart"}>
            <div className='relative'>
              <IoCartOutline className='w-5 h-5'/>
              <span className='absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2'>3</span>
            </div>
          </Link>
          
          {/* Menu */}
          <button className='mr-2 ml-1 p-2 rounded-md transition-all hover:bg-gray-100'>
            Menú
          </button>
        </div>
    </nav>
  )
}
