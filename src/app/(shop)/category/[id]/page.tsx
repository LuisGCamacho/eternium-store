import { Suspense } from "react";
import { ProductGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed/seed";
import { Category } from "@/src/interfaces";


const seedProducts = initialData.products;

interface Props {
  params: Promise<{ id: Category }>;
}

export default function CategoryPage({ params }: Props) {
  return (

    // // Awaiting a response of CategoryContent
    <Suspense fallback={<div>Cargando productos...</div>}>
      <CategoryContent params={params} />
    </Suspense>

  );
}

async function CategoryContent({ params }: Props) {
  const { id } = await params;

  // Filter category
  const products = seedProducts.filter((product) => product.gender === id);

  // Diccionary for the title
  const labels: Record <Category, string> = {
    "men": "Hombres",
    "women": "Mujeres",
    "kid": "Niños",
    "unisex": "Todos",
  }


  return (
    <>
      {/* Title */}
      <Title
        title={`Articulos para ${ labels[id] }`}
        subtitle={`Los mejores articulos para ${ labels[id] }`}
        className="mb-1"
      />

      {/* Products */}
      <ProductGrid products={products} />
    </>
  );
}