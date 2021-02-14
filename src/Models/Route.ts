import FireStoreDB from './Firestore';
import { RouteDoc } from './DocTypes';

export default class Route {
    /**
     * A class for holding a a route between lender and lendee
     */

    id: string;
    originlat: number;
    originlon: number;
    destinationlat: number;
    destinationlon: number;
    iid: string;

    constructor(
        id: string,
        originlat: number,
        originlon: number,
        destinationlat: number,
        destinationlon: number,
        iid: string,
    ) {
        this.id = id;
        this.originlat = originlat;
        this.originlon = originlon;
        this.destinationlat = destinationlat;
        this.destinationlon = destinationlon;
        this.iid = iid;
    }

    public static async addRoute(route: RouteDoc): Promise<void> {
        const fireStoreDB = new FireStoreDB();
        await fireStoreDB.uploadDoc<RouteDoc>('routes', route);
    }
}
