import { Product } from "@/components/ProductCard";

// Reliable fallback images from picsum.photos (used when fakestoreapi.com is unreachable)
const picsumImages = [
  "https://picsum.photos/seed/bag/400/400",
  "https://picsum.photos/seed/tshirt/400/400",
  "https://picsum.photos/seed/jacket/400/400",
  "https://picsum.photos/seed/shirt/400/400",
  "https://picsum.photos/seed/bracelet/400/400",
  "https://picsum.photos/seed/ring1/400/400",
  "https://picsum.photos/seed/ring2/400/400",
  "https://picsum.photos/seed/earring/400/400",
  "https://picsum.photos/seed/hdd/400/400",
  "https://picsum.photos/seed/ssd1/400/400",
  "https://picsum.photos/seed/ssd2/400/400",
  "https://picsum.photos/seed/gaming/400/400",
  "https://picsum.photos/seed/monitor1/400/400",
  "https://picsum.photos/seed/monitor2/400/400",
  "https://picsum.photos/seed/snowjacket/400/400",
  "https://picsum.photos/seed/bikerjacket/400/400",
  "https://picsum.photos/seed/raincoat/400/400",
  "https://picsum.photos/seed/womenst1/400/400",
  "https://picsum.photos/seed/womenst2/400/400",
  "https://picsum.photos/seed/womenst3/400/400",
];

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: picsumImages[0],
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
    category: "men's clothing",
    image: picsumImages[1],
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
    category: "men's clothing",
    image: picsumImages[2],
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on this page.",
    category: "men's clothing",
    image: picsumImages[3],
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Bracelet",
    price: 695.0,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
    category: "jewelery",
    image: picsumImages[4],
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave",
    price: 168.0,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days. Designed and sold by Hafeez Center in the United States.",
    category: "jewelery",
    image: picsumImages[5],
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for her. Gifts to spoil your love more for special occasions.",
    category: "jewelery",
    image: picsumImages[6],
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: picsumImages[7],
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64.0,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High compatibility.",
    category: "electronics",
    image: picsumImages[8],
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109.0,
    description:
      "Easy upgrade for faster boot up, shutdown, rendering, and data transfer. Boosts burst write performance, making it ideal for typical PC workloads.",
    category: "electronics",
    image: picsumImages[9],
  },
  {
    id: 11,
    title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance",
    price: 109.0,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootups and application launches.",
    category: "electronics",
    image: picsumImages[10],
  },
  {
    id: 12,
    title: "WD 4TB Gaming Drive - Works with Playstation 4 - Portable External Hard Drive",
    price: 114.0,
    description:
      "Expand your PS4 gaming experience. Play games with more of what you need and want.",
    category: "electronics",
    image: picsumImages[11],
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599.0,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility issues. Ideal for presentations and work.",
    category: "electronics",
    image: picsumImages[12],
  },
  {
    id: 14,
    title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA)",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE: Bring a new dimension to gaming with this 49-inch super ultrawide curved display featuring a 32:9 aspect ratio.",
    category: "electronics",
    image: picsumImages[13],
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note: The Jackets is US standard size, Please choose size as your usual size. The Jackets is designed to be worn in cold weather.",
    category: "women's clothing",
    image: picsumImages[14],
  },
  {
    id: 16,
    title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort",
    category: "women's clothing",
    image: picsumImages[15],
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfect for trip or casual use an independent distributer of fashion riders to our customers.",
    category: "women's clothing",
    image: picsumImages[16],
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for easy movement.",
    category: "women's clothing",
    image: picsumImages[17],
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture Tunic",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% Polyester. Follow care instructions provided in the product for best results on washing.",
    category: "women's clothing",
    image: picsumImages[18],
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95% COTTON, 5% SPANDEX, Size Recommendations: XS (0-2), S (4-6), M (8-10), L (12-14), XL (16-18).",
    category: "women's clothing",
    image: picsumImages[19],
  },
];
