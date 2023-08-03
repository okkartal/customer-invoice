import { IBaseEntity } from "./IBaseEntity";

export interface ICustomer extends IBaseEntity {
    name: string,
    address: string,
    phone: string
}