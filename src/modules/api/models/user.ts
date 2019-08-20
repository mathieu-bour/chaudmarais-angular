export interface User {
  id: number;
  email: string;
  password?: string;
  first_name: string;
  last_name: string;
  stripe_id?: string;
  created_at: Date;
  updated_at: Date;
}
