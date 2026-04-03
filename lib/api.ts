import { mockProducts } from "./mockProducts";

export async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.warn(`API unavailable (${res.status}), using mock data.`);
      return mockProducts;
    }

    const contentType = res.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      console.warn("Unexpected content-type, using mock data.");
      return mockProducts;
    }

    return res.json();
  } catch (error) {
    console.warn("Could not reach API, using mock data:", error);
    return mockProducts;
  }
}