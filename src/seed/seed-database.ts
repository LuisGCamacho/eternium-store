import prisma from "../lib/prisma"
import { initialData } from "./seed"

(async () => {

    // Borrar registros previos
    await Promise.all([
         prisma.productImage.deleteMany(),
         prisma.product.deleteMany(),
         prisma.category.deleteMany(),
    ])

    // Categories

    const { categories, products } = initialData;

    const categoriesData = categories.map( category => ({
        name: category,
    }))

    await prisma.category.createMany({
        data: categoriesData
    })

    // Get IDs
    const categoriesDB = await prisma.category.findMany();

    // Returns an object with the category name pointing to the ID
    const categoriesMap = categoriesDB.reduce((map, category) => {
        map[ category.name.toLowerCase() ] = category.id;
        
        return map
    }, {} as Record<string, string>) // <Shirt, CategoryID>
    
    // Products
    products.forEach( async product => {
        const { type, images, ...rest } = product;

        const dbProduct = await prisma.product.create({
            data: {
                ...rest,
                categoryId: categoriesMap[type],
                
            }
        })

        // Images
        const imagesData = images.map(image => ({
            url: image,
            productId: dbProduct.id
        }))

        await prisma.productImage.createMany({
            data: imagesData
        })
    })

    console.log("Ejecutado correctamente")

})()