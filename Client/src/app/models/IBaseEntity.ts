export interface IBaseEntity {
    id: string,
    creationDate: Date,
    lastModifiedDate?: Date,
    status: boolean
}