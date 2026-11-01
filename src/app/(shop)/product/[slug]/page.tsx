import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/src/components";
import { titleFont } from "@/src/config/fonts";
import { initialData } from "@/src/seed/seed";
import { notFound } from "next/navigation";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  }
}

export default function ProductPage({ params }: Props) {
  return (

    // // Awaiting a response of ProductContent
    <Suspense fallback={<div>Cargando productos...</div>}>
      <ProductContent params={params} />
    </Suspense>

  );
}

async function ProductContent({ params }: Props) {
  
  const { slug } = await params;

  // Get products
  const product = initialData.products.find(( product ) => product.slug === slug)

  if ( !product ) {
    notFound()
  }
  
  return (
    <div className="mt-5 mb-20 grid md:grid-cols-3 gap-3">

      {/* Slideshows */}
      <div className="col-span-1 md:col-span-2 ">

        {/* Mobile Slideshow */}
        <ProductMobileSlideshow 
          title={ product.title } 
          images={ product.images }
          className="block md:hidden"
          />

        {/* Desktop Slideshow */}
        <ProductSlideshow 
          title={ product.title}  
          images={ product.images }
          className="hidden md:block"
        />

      </div>

      {/* Details */}
      <div className="col-span-1 px-5">

        {/* Name */}
        <h1 className={` ${ titleFont.className } font-bold text-xl`}>{product.title}</h1>

        {/* Price */}
        <p className="text-lg mb-5">${product.price}</p>

        {/* Sizes */}
        <SizeSelector
          selectedSize= {product.sizes[0]}
          availableSizes={ product.sizes }
        />
        
        {/* Amount */}
        <QuantitySelector quantity={4}/>

        {/* Button */}
        <button className="btn-primary my-5 cursor-pointer"> Agregar al carrito </button>
        
        {/* Description */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">{ product.description }</p>
      </div>


    </div>
  );
}