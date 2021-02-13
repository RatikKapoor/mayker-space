export default class Item {
    /**
     * A class for holding a tool that is avalible for renting
     */

    id: string;
    name: string;

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
    }
}
