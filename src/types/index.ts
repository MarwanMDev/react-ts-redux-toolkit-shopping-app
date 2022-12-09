export type Product = {
  id: Number;
  title: String;
  price: Number;
  category: String;
  description: String;
  image: String;
  rating: {
    rate: Number;
    count: Number;
  };
};

export type ProductError = {
  message: string;
};

export type GetProductsResponse = {
  data: Product[];
};
