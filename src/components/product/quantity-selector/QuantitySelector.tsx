"use client"

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {

    // Counter
    const [count, setCount ] = useState(quantity)
    
    // Change counter
    const onQuantityChanged = ( value: number ) => {
        if ( count + value < 1 ) return

        setCount ( count + value)
    }

    return (
        <div className="flex items-center mt-4">
            {/* Decrease button */}
            <button>
                <IoRemoveCircleOutline 
                    onClick={() => onQuantityChanged(-1)} 
                    className="cursor-pointer" 
                    size={30}/>
            </button>

            {/* Counter */}
            <span className="w-20 mx-3 h-10 bg-gray-200 flex items-center justify-center rounded">
                { count }
            </span>

            {/* Increase button */}
            <button>
                <IoAddCircleOutline 
                    onClick={() => onQuantityChanged(+1)} 
                    className="cursor-pointer" 
                    size={30}/>
            </button>
        </div>
    )
}
