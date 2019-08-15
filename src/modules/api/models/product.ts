export interface Product {
  id: number;
  enabled: boolean;
  name: string;
  slug: string;
  description: string;
  image_first: string;
  images: string[];
  order: number;
  images_first: string[];
  price: number;
}
