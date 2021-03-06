export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  tag?: string;
}

export interface ProductResolved {
  product: IProduct;
  error?: any;
}

