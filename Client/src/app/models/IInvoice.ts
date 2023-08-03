import { IBaseEntity } from "./IBaseEntity"; 

export interface IInvoice  extends IBaseEntity{
    description: string,
    quantity: number,
    price: number,
    discount: number,
    total: number,
    grandTotal: number,
    isPaid: boolean,
    customerId: string 
}