const Houses_List = [
    { 
        id: 1,
        price: 1000000,
        ubicacion: "Ciudad de México",
        description: "A beautiful house with a garden",
        calificacion: 4.5,
        area: 2500,
        duracion: 12,
        tipo: "VENTA    ",
        garage: true,
        garden: true
    },
    {
        id: 2,
        price: 2000000,
        ubicacion: "Monterrey",
        description: "A beautiful house with a garage",
        calificacion: 4.8,
        area: 2500,
        duracion: 24,
        tipo: "RENTA",
        garage: true,
        garden: true
    },
    {
        id: 3,
        price: 3000000,
        ubicacion: "Guadalajara",
        description: "A beautiful house with a window",
        calificacion: 4.2,
        area: 2500,
        duracion: 6,
        tipo: "RENTA",
        garage: true,
        garden: true
    }
];

export class Service{
    async getHousesList(type:string, minPrice:number, maxPrice:number) {
        return Houses_List;
    }

    async getHousesListbyId() {
        return Houses_List.map(house => house.id);
    }
}