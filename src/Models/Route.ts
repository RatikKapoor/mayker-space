export default class Route {
    /**
     * A class for holding a a route between lender and lender
     */

    id: string;
    origin: string;
    destination: string;

    constructor(id: string, origin: string, destination: string) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
    }
}
