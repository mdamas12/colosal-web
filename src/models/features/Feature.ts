export default class Feature{
    id: number;
    name: string;

    constructor(map:any){
        this.id = map.id as number;
        this.name = map.name as string;
    }
}