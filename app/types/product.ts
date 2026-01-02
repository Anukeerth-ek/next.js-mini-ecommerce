export type ProductVariant = {
  color: string;        // "red", "green", "purple"
  bgColor: string;      // "#9D333B"
  image: string;        // shoe image path
};

export type Product = {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  variants: ProductVariant[];
};
