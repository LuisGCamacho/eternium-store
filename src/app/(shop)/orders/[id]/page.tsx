
import { Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import clsx from "clsx";
import Image from 'next/image';
import { Suspense } from "react";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface Props {
  params: {
    id: string
  };
}

export default function OrdersPage({ params }: Props) {
  return (

    // // Awaiting a response of CategoryContent
    <Suspense fallback={<div>Cargando productos...</div>}>
      <OrderContent params={params} />
    </Suspense>

  );
}

export const OrderContent = async ({ params }: Props) => {

  const { id } = await params;


  // Verificacion
  // redirect(/)

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">

      <div className="flex flex-col w-[1000px]">
        
        {/* Title */}
        <Title title={`Orden #${ id} `}/>

        {/* Grid cart */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="flex flex-col mt-5">

            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {"bg-red-500": false},
                {"bg-green-700": true}
              )
            }>
              <IoCardOutline size={30}/>
              {/*<span className="mx-2">Pendiente de pago</span>*/}
              <span className="mx-2">Pagada</span>
            </div>

          {/* Items */}
          {
            productsInCart.map(product => (
              
              /* Image */
              <div key={product.slug} className="flex m-5">
                  <Image
                    src={`/products/${ product.images[0] }`}
                    width={ 100 }
                    height={ 100 }
                    style={{
                      width: "130px",
                      height:"130px"
                    }}
                    alt={ product.title }
                    className="mr-5 rounded"
                  />

                  <div>

                    {/* Name */}
                    <p>{ product.title }</p>

                    {/* Price */}
                    <p>${ product.price } x 3</p>
                    
                    {/* Subtotal */}
                    <p className="font-bold"> Subtotal: ${ product.price * 3} </p>

                  </div>
              </div>
            ))
          }
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7">

            <h2 className="text-2xl mb-2 font-bold">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl"> Luis Camacho </p>
              <p> Av. Siempre viva 124 </p>
              <p> Col. Centro </p>
              <p> Alcaldía Iztapalapa </p>
              <p> Ciudad de México </p>
              <p> CP 123124 </p>
              <p> 553243234342 </p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">

              {/* Number of products */}
              <span>No. Productos</span>
              <span className="text-right">3 articulos</span>

              {/* Subtotal*/}
              <span>Subtotal</span>
              <span className="text-right">$100</span>
              
              {/* Taxes */}
              <span>Impuestos (15%)</span>
              <span className="text-right">$100</span>

              {/* Total */}
              <span className="text-2xl mt-5">Total:</span>
              <span className="mt-5 text-2xl text-right">$100</span>

            </div>

            {/* Checkout button*/}
            <div className="mt-5 mb-2 w-full">

              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {"bg-red-500": false},
                  {"bg-green-700": true}
                )
              }>
                <IoCardOutline size={30}/>
                {/*<span className="mx-2">Pendiente de pago</span>*/}
                <span className="mx-2">Pagada</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}