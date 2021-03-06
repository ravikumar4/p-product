import { Injectable } from '@angular/core';
import { IProduct } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  public message: string;
  private localProductList: IProduct[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2019',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl: 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2019',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl: 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    },
    {
      productId: 3,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2018',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl: 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    },
    {
      productId: 4,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2019',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl: 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    },
    {
      productId: 5,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2018',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl: 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
      tag: 'mytag'
    }
  ];

  constructor() { }

  public getProducts(): IProduct[] {
    return this.localProductList;
  }

  public getProduct(id: number): IProduct {

    if (id === 0) {
      return {productId: 0,
        productName: '',
        productCode: '',
        releaseDate: '',
        description: '',
        price: 0,
        starRating: 0,
        imageUrl: ''};
    }
    //   console.log(this.getProducts().find(value => value.productId === id));
    return this.getProducts().find(value => value.productId === id);
  }

  createProduct(product: IProduct) {
    product.productId = this.localProductList.length + 1;
    this.localProductList.push(product);
  }
}
