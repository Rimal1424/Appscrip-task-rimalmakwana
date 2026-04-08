import { Product } from "@/components/ProductCard";

// Curated Unsplash images matched to each specific product
const productImages = {
  // Men's Clothing
  backpack: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
  mensShirt: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
  mensJacket: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop&auto=format",
  mensSlimFit: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop&auto=format",

  // Jewelery
  bracelet: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop&auto=format",
  goldRing: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop&auto=format",
  diamondRing: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=400&h=400&fit=crop&auto=format",
  earrings: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop&auto=format",

  // Electronics
  hardDrive: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop&auto=format",
  ssd1: "https://images.unsplash.com/photo-1600348712270-5af9e3d0f7dc?w=400&h=400&fit=crop&auto=format",
  ssd2: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=400&h=400&fit=crop&auto=format",
  gamingDrive: "https://images.unsplash.com/photo-1592853625511-ad8378aa2f22?w=400&h=400&fit=crop&auto=format",
  monitor1: "https://images.unsplash.com/photo-1527443224154-c4a573d5e6d1?w=400&h=400&fit=crop&auto=format",
  monitor2: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?w=400&h=400&fit=crop&auto=format",

  // Women's Clothing
  snowJacket: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&auto=format",
  bikerJacket: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format",
  rainJacket: "https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?w=400&h=400&fit=crop&auto=format",
  womenTop1: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop&auto=format",
  womenTop2: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop&auto=format",
  womenTshirt: "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=400&fit=crop&auto=format",
};

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: productImages.backpack,
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: productImages.mensShirt,
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image: productImages.mensJacket,
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on this page.",
    category: "men's clothing",
    image: productImages.mensSlimFit,
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
    price: 695.0,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "jewelery",
    image: productImages.bracelet,
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168.0,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
    category: "jewelery",
    image: productImages.goldRing,
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for her. Gifts to spoil your love more for special occasions.",
    category: "jewelery",
    image: productImages.diamondRing,
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: productImages.earrings,
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64.0,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High compatibility.",
    category: "electronics",
    image: productImages.hardDrive,
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109.0,
    description:
      "Easy upgrade for faster boot up, shutdown, rendering, and data transfer. Boosts burst write performance, making it ideal for typical PC workloads.",
    category: "electronics",
    image: productImages.ssd1,
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance",
    price: 109.0,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootups and application launches.",
    category: "electronics",
    image: productImages.ssd2,
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive - Works with Playstation 4 - Portable External Hard Drive",
    price: 114.0,
    description:
      "Expand your PS4 gaming experience. Play games with more of what you need and want.",
    category: "electronics",
    image: productImages.gamingDrive,
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599.0,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility issues. Ideal for presentations and work.",
    category: "electronics",
    image: productImages.monitor1,
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE: Bring a new dimension to gaming with this 49-inch super ultrawide curved display featuring a 32:9 aspect ratio.",
    category: "electronics",
    image: productImages.monitor2,
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note: The Jackets is US standard size, Please choose size as your usual size. The Jackets is designed to be worn in cold weather.",
    category: "women's clothing",
    image: productImages.snowJacket,
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort",
    category: "women's clothing",
    image: productImages.bikerJacket,
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfect for trip or casual use an independent distributer of fashion riders to our customers.",
    category: "women's clothing",
    image: productImages.rainJacket,
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for easy movement.",
    category: "women's clothing",
    image: productImages.womenTop1,
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture Tunic",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% Polyester. Follow care instructions provided in the product for best results on washing.",
    category: "women's clothing",
    image: productImages.womenTop2,
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95% COTTON, 5% SPANDEX, Size Recommendations: XS (0-2), S (4-6), M (8-10), L (12-14), XL (16-18).",
    category: "women's clothing",
    image: productImages.womenTshirt,
  },
];
