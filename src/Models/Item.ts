import { ItemCategory } from './Enums';
import User from './User';
export default class Item {
    /**
     * A class for holding a tool that is available for renting
     */

    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;
    latitude: number;
    longitude: number;
    uid: string;

    constructor(
        id: string,
        name: string,
        category: ItemCategory,
        description: string,
        imageUrl: string,
        latitude: number,
        longitude: number,
        uid: string,
    ) {
        this.id = id;
        this.name = name;
        this.category = category.toString();
        this.description = description;
        this.imageUrl = imageUrl;
        this.latitude = latitude;
        this.longitude = longitude;
        this.uid = uid;
    }
}
