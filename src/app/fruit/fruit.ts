export interface Fruit {
    id: string;
    name: string;
    quantity: number;
    price: number;
  }
  
  export type CreateFruit = Omit<Fruit, 'id'>;
  