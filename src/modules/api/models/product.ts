export interface Product {
  id: number;
  enabled: boolean;
  name: string;
  slug: string;
  type: string;
  description: string;
  image_first: string;
  images: string[];
  order: number;
  created_at: Date;
  updated_at: Date;
  images_first: string[];
  price: number;
}
