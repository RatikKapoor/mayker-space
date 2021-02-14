import { ItemDoc } from './DocTypes';
import { ItemCategory } from './Enums';
import FireStoreDB from './Firestore';

export default class Item {
    /**
     * A class for holding a tool that is available for renting
     */

    id: string;
    name: string;
    category: ItemCategory;
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
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
        this.latitude = latitude;
        this.longitude = longitude;
        this.uid = uid;
    }

    public static async addItem(item: ItemDoc): Promise<void> {
        const fireStoreDB = new FireStoreDB();
        await fireStoreDB.uploadDoc<ItemDoc>('items', item);
    }
}
