import { HouseController } from "../controller/houseController";
import { Service } from "../db/Service";

export class HouseHandler {
    getHousesbyType(){
        const ctrl = new HouseController(new Service());
    }

}