import { ProductGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";

const products = initialData.products

export default function Home() {
  return (
    <>
      <Title 
        title="Tienda" 
        subtitle="Todos los productos"
        className="mb-1"
      />

      <ProductGrid products={ products }/>
    </>
  );
}
