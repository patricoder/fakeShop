export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
}

export interface IProducts {
  products: IProduct[];
  filteredProducts: IProduct[];
  status: string;
  error: null | string | undefined;
}
