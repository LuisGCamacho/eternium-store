"use client"

import { titleFont } from '@/src/config/fonts'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const Footer = () => {

  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className='flex w-full justify-center text-xs mb-10'>

      {/* Logo */}
      <Link href="/">
        <span className={`${titleFont.className} font-bold`}>Eternium</span>
        <span>©</span>
        <span>{year}</span>
      </Link>

      {/* Privacy and Legal */}
      <Link href="/" className='mx-3'>
        Privacidad & Legal
      </Link>

      {/* Ubication */}
      <Link href="/" className='mx-3'>
        Ubicaciones
      </Link>

    </footer>
  )
}