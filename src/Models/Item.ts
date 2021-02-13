export default class Item {
    /**
     * A class for holding a tool that is available for renting
     */

    id: string;
    name: string;
    category: string;
    description: string;
    imageUrl: string;

    constructor(id: string, name: string, category: string, description: string, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
