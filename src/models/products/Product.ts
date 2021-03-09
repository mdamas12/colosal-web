import Category from '../categories/Category'
import Brand from '../brands/Brand'
import DetailProduct from '../detail_products/DetailProduct'

export default class Product{
    id: number;
    name: string;
    description: string;
    coin: string;
    price: number;
    quantity: number;
    image: File;
    category: Category[];
    brand: Brand[];
    detail_product: DetailProduct[]
    
    constructor(map:any){
        this.id = map.id as number;
        this.name = map.name as string;
        this.description = map.description as string;
        this.coin = map.coin as string;
        this.price = map.price as number;
        this.quantity = map.quantity as number;
        this.image = map.image as File;
        this.category = map.category as [];
        this.brand = map.brand as [];
        this.detail_product = map.detail_product as []
    }
}