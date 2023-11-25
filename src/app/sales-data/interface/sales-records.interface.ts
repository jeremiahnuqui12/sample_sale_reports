export interface SalesPerson {
    id:number
    name:string,
    status:boolean
}
export interface Items {
    id: number,
    name: string,
    price: number,
    status: boolean
}
export interface ItemSalesTransaction {
    id:number,
    sales_person_id: number,
    item_id: number,
}

export const sales_person_container: SalesPerson[] = [{
    id:1, name: "JM", status: true,
}];
export const item_container: Items[] = [{
    id:1, name:"Apple", price:100, status: true,
}];
export const sales_transaction_container: ItemSalesTransaction[] = [{
    id:1, sales_person_id:1, item_id:1,
}];