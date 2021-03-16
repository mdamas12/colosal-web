export default class Category {
  id: number;
  name: string;
  image: string

  constructor (map:any) {
    this.id = map.id as number
    this.name = map.name as string
    this.image = map.image as string
  }
}
