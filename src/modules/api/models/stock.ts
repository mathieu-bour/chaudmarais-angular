export interface Stock {
  id: number;
  price: number;
  size: string;
  inventory: number;
  available_inventory: number;
  product_id: number;
  created_at: Date;
  updated_at: Date;
}
