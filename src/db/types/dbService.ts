import {House} from "../../types/db/house";


export interface IDBService{
    getHousesList(type:string, minPrice:number, maxPrice:number): Promise<House[]>;
    getHousesListbyId(id:number): Promise<House[]>;
}


