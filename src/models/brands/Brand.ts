/* eslint-disable @typescript-eslint/no-unsafe-member-access */
export default class Brand {
  id: number;
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor (map:any) {
    this.id = map.id as number
    this.name = map.name as string
  }
}
