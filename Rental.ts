export default class Rental {

    id: string;
    item: string;
    renter: string;
    rentee: string;
    start_time: Date;
    end_time: Date;

    constructor(id: string, item: string, renter: string, rentee: string, 
        start_time: Date, end_time: Date){
        this.id = id;
        this.item = item;
        this.renter = renter;
        this.rentee = rentee;
        this.start_time = start_time;
        this.end_time = end_time;
    }
}
