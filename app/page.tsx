import ProductListing from "@/components/ProductListing";
import { getProducts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | mettä muse",
  description: "Explore our latest products at mettä muse.",
};

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <div className="page-hero">
        <h1>Discover Our Products</h1>
        <p>
          Explore a wide range of high-quality products designed just for you.
        </p>
      </div>

      <div className="container">
        <ProductListing initialProducts={products} />
      </div>
    </>
  );
}