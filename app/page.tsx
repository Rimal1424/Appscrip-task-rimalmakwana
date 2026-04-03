import ProductListing from "@/components/ProductListing";
import { getProducts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | mettä muse",
  description: "Discover our exclusive range of high-quality products. Shop unique, customizable items tailored for every occasion.",
  openGraph: {
    title: "Products | mettä muse",
    description: "Discover our exclusive range of high-quality products.",
    type: "website",
  }
};

export default async function Home() {
  const products = await getProducts();

  // Generate JSON-LD Schema for E-commerce SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product: any, index: number) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://appscrip-task.vercel.app/product/${product.id}`,
      "item": {
        "@type": "Product",
        "name": product.title,
        "image": product.image,
        "description": product.description,
        "offers": {
          "@type": "Offer",
          "price": product.price,
          "priceCurrency": "USD"
        }
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
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>

      <div className="container">
        <ProductListing initialProducts={products} />
      </div>
    </>
  );
}