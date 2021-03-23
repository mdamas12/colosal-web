/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Product from './Product'

export default class ProductsPagination {
  count: number;
  next: number;
  previous: number;
  results: Product[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (map:any) {
    this.count = map.count as number
    this.next = map.next as number
    this.previous = map.previous as number
    this.results = map.results as []
  }
}
