import Category from '../categories/Category'
import PromotionDetail from '../detail_promotions/PromotionDetail'

export default class Promotion {
  id: number;
  name: string;
  description: string;
  coin: string;
  price: number;
  quantity: number;
  image: File;
  category: Category[];
  promotion_detail: PromotionDetail[]

  constructor (map:any) {
    this.id = map.id as number
    this.name = map.name as string
    this.description = map.description as string
    this.coin = map.coin as string
    this.price = map.price as number
    this.quantity = map.quantity as number
    this.image = map.image as File
    this.category = map.category as []
    this.promotion_detail = map.detail_product as []
  }
}
