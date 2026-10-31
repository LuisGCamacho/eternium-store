"use client"

import Image from "next/image"
import Link from "next/link"

import { Product } from "@/src/interfaces"
import { useState } from "react"

interface Props {
    product: Product
}

export const ProductGridItem = ({ product }:Props) => {

  const [displayImage, setDisplayImage] = useState( product.images[0] )

  return (
    /* Product Card*/
    <div className='rounded-md overflow-hidden fade-in'>

      {/* Image */}
      <Link className="cursor-pointer" href={`/product/${ product.slug }`}>
        <Image 
          src={`/products/${displayImage}`}
          alt={ product.title }
          className="w-full object-cover rounded"          
          width={ 500 }
          height={ 500 }

          /* Change Image */
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>

      {/* title, price */}
      <div className="p-4 flex flex-col">
          {/* title */}
          <Link className="hover:text-blue-500" href={`/product/${ product.slug }`}>
            { product.title }
          </Link>

          {/* price */}
          <span className="font-bold">${ product.price }</span>
      </div>
        

    </div>
  )
}
