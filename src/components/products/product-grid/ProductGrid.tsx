import { Product } from "@/src/interfaces"
import { ProductGridItem } from "./ProductGridItem"

interface Props {
    products: Product[]
}

export const ProductGrid = ({ products }: Props) => {
  return (
    /* Grid */
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-10">
        {
            /* Show products */
            products.map(product => (
                <ProductGridItem key={product.slug} product={product}/>
            ))
        }
    </div>
  )
}
