/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Category from '../categories/Category'
import Brand from '../brands/Brand'
import DetailProduct from '../detail_products/DetailProduct'

export default class Product {
  id: number;
  name: string;
  description: string;
  coin: string;
  price: number;
  quantity: number;
  image: string;
  category: Category[];
  brand: Brand[];
  detail_product: DetailProduct[]
  picture : ProductImage[]

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (map:any) {
    this.id = map.id as number
    this.name = map.name as string
    this.description = map.description as string
    this.coin = map.coin as string
    this.price = map.price as number
    this.quantity = map.quantity as number
    this.image = map.image as string
    this.category = map.category as []
    this.brand = map.brand as []
    this.detail_product = map.detail_product as []
    let picture = map.picture as any[]
    this.picture = picture.map(item => new ProductImage(item))
    if(this.image){
      let aux : any = {
        "image" : this.image
      }
      this.picture.push(new ProductImage(aux))
    }
  }
}

export class ProductImage{
    image : string;

    constructor(map:any){
        this.image = map.image
    }
}
