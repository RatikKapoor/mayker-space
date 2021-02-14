export interface UserDoc {
    firstName: string;
    lastName: string;
    uid: string;
}

export interface ItemDoc {
    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
    uid: string;
    [key: string]: any;
}

export interface RouteDoc {
    id: string;
    originlat: number;
    originlon: number;
    destinationlat: number;
    destinationlon: number;
    iid: string;
    [key: string]: any;
}
