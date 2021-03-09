import Brand from './Brand'

export default class BrandsPagination{
    count: number;
	next: number;
	previous: number;
	results: Brand[];

	constructor (map:any) {
		this.count = map.count as number;
		this.next = map.next as number;
		this.previous = map.previous as number;
		this.results = map.results as []
	}
}