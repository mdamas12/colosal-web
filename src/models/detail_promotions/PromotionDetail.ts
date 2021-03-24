/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Product from '../products/Product'

export default class PromotionDetail {
    id: number;
    product: Product[];
    created: string;
    modified: string;
    quantity: number;
    promotion: number

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor (map:any) {
      this.id = map.id as number
      this.product = map.product as []
      this.created = map.created as string
      this.modified = map.modified as string
      this.quantity = map.description as number
      this.promotion = map.product as number
    }
}

