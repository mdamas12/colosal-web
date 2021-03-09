import Product from './Product'

export default class ProductsPagination {
	count: number;
	next: number;
	previous: number;
	results: Product[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}