import app, { DocumentData, WhereFilterOp } from './Firebase';

export default class FireStoreDB {
    // static db = app.firestore();
    db;

    constructor() {
        this.db = app.firestore();
    }

    public async fetchDoc<DocType>(path: string): Promise<DocumentData | undefined | null> {
        try {
            const doc = await this.db.doc(path).get();
            return doc.data() as DocType;
        } catch (e) {
            return null;
        }
    }

    public async query<T>(
        collection: string,
        field: string,
        operator: WhereFilterOp,
        value: string | Map<string, string | number> | Array<string | number> | number,
    ): Promise<Array<DocumentData>> {
        const query = (await this.db.collection(collection).where(field, operator, value).get()).docs.map(
            (doc) => doc.data() as T,
        );
        return query;
    }

    public async uploadDoc<DocType>(collection: string, fields: DocType): Promise<void> {
        try {
            await this.db.collection(collection).doc().set(fields);
        } catch (err) {
            console.warn(err);
        }
    }
}
