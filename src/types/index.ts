export type Product = {
  id: Number;
  title: String;
  price: Number;
  category: String;
  description: String;
  image: String;
};

export type GetProductsResponse = {
  data: Product[];
};
