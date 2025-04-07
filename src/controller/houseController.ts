import { Service } from "../db/Service";
import { IDBService } from "../db/types/dbService";


export class HouseController{

    dbService: IDBService
    //En vez de declarar, se puede declarar en el constructor
    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }
    //Si se genera una prueba unitaria de la funcion de abajo, no se podria
    //Porque dependemos del constructor de la clase Service
    //Por eso se recomienda usar el patron de inyeccion de dependencias
    async getHousesbyType(type:string, minPrice:number, maxPrice:number) {
        const ctrl = new HouseController(new Service());
        const ctrl2 = new HouseController(new Service());
    }
}