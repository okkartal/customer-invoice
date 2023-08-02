import { IBaseEntity } from "./IBaseEntity";
import { ICustomer } from "./ICustomer";

export interface IInvoice  extends IBaseEntity{
    description: string,
    quantity: number,
    price: number,
    discount: number,
    total: number,
    grandTotal: number,
    isPaid: number,
    customer: ICustomer, 
}