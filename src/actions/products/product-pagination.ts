"use server";

import prisma from "@/src/lib/prisma";

interface PaginationOptions {
    page?: number;
    take?: number;
}

// Retrieve all products from the Product table
export const getPaginatedProductsWithImages = async ({
    page = 1,
    take = 13,
}: PaginationOptions) => {

    // Page validations
    if ( isNaN( Number( page )) ) page = 1;
    if ( page < 1 ) page = 1;
    

    try {
        const products = await prisma.product.findMany({
            take: take,
            skip: ( page - 1) * take,
            // Include the related images for each product
            include: {
                ProductImage:{
                    take: 2,            // Retrieve only the first 2 images for each product
                    select: { 
                        url: true       // Select only the URL field from each image
                    }
                }
            }
        })

        return {
            products: products.map(product => ({
                ...product,
                images: product.ProductImage.map(image => image.url)
            }))
        }

    } catch (error){
        throw new Error ("No se pudo cargar los productos")
    }

}