import ProductListing from "@/components/ProductListing";
import { getProducts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | mettä muse",
  description: "Explore our latest products at mettä muse.",
};

export default async function Home() {
  const products = await getProducts();

  // 1. JSON-LD Schema Settings (SEO requirement)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://appscrip-task-rimalmakwana.netlify.app/product/${product.id}`,
      name: product.title,
      image: product.image,
      offers: {
        "@type": "Offer",
        price: product.price,
        priceCurrency: "USD"
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="page-hero">
        {/* H1 Tag (SEO requirement) */}
        <h1>Discover Our Products</h1>
        <p>
          Explore a wide range of high-quality products designed just for you.
        </p>
      </div>

      <div className="container">
        {/* H2 Tag (SEO Requirement: "Setting of H1&H2 tags") visually hidden to match design */}
        <h2 className="sr-only">Product Collection</h2>
        <ProductListing initialProducts={products} />
      </div>
    </>
  );
}