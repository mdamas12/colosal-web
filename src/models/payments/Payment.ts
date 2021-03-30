export default class Payment {
    id: number;
    name: string;
    account_owner: string;
    account_number: string;
    owner_id: string;
    email: string;
    phone: string;
    currency: string;
    methods:  PaymentMethod[]
    
    constructor (map:any) {
      this.id = map.id as number
      this.name = map.name as string
      this.account_owner = map.account_owner as string
      this.account_number = map.account_number as string
      this.owner_id = map.owner_id as string
      this.email = map.email as string
      this.phone = map.phone as string
      this.currency = map.currency as string
    
      let methods = map.methods as any[]
      this.methods = methods.map(item => new PaymentMethod(item))
    }

    getMethods(){
        var methods = ""
        
        var first_iteration = true;
        this.methods.forEach(element => {
            if(first_iteration){
                methods += element.payment_type
                first_iteration = false
            }else{
                methods += ", " + element.payment_type
            }
        });
  
        return methods.trim()
      }
}

export class PaymentMethod {
    payment_type: string;
  
    constructor(map:any) {
      this.payment_type = map.payment_type as string
    }
  }