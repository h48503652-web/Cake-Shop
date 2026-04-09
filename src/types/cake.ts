export type CakeCategory = "number-cakes" | "dessert-cups" | "cakes";

export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  category: CakeCategory;
}