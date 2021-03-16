import Category from './Category'

export default class CategoriesPagination {
  count: number;
  next: number;
  previous: number;
  results: Category[];

  constructor (map:any) {
    this.count = map.count as number
	  this.next = map.next as number
	  this.previous = map.previous as number
	  this.results = map.results as []
  }
}
