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

export type IProductCardSlide = {
  title: string;
  price: number;
  rating: number;
  img: string;
};

export type IAccordian = {
  title: string;
  summery: string;
};
