import { getPaginatedProductsWithImages } from "@/src/actions";
import { ProductGrid } from "./product-grid/ProductGrid";

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

// Async component to fetch products
export async function Products({ searchParams }: Props) {
  
  const { page } = await searchParams;  // Get search parameters from the URL
  const pageNumber = page ? parseInt(page) : 1; // Convert page from string to number

  // Get products from the database
  const { products } = await getPaginatedProductsWithImages({
    page: pageNumber
  });

  return (
    <ProductGrid products={products} />
  );
}