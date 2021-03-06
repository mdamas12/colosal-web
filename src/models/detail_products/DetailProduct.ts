/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Feature from '../features/Feature'

export default class DetailProduct {
    id: number;
    characteristic: Feature[];
    created: string;
    modified: string;
    description: string;
    product: number

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor (map:any) {
      this.id = map.id as number
      this.characteristic = map.characteristic as []
      this.created = map.created as string
      this.modified = map.modified as string
      this.description = map.description as string
      this.product = map.product as number
    }
}
