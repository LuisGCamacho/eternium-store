import { Products, Title } from "@/src/components";
import { Suspense } from "react";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default function Home({ searchParams }: Props) {

  return (
    <>
      {/* Main title */}
      <Title 
        title="Tienda" 
        subtitle="Todos los productos"
        className="mb-1"
      />

      {/* Main Products */}
      <Suspense fallback={<p>Loading products...</p>}>
        <Products searchParams={ searchParams } />
      </Suspense>
    </>
  );
}
