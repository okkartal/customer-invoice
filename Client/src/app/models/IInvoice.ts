import { IBaseEntity } from "./IBaseEntity";

export interface IInvoice extends IBaseEntity {
    description: string,
    quantity: number,
    price: number,
    discount: number,
    total: number,
    grandTotal: number,
    status: boolean,
    customerId: string,
    customerName?: string
};