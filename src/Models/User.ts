import { UserDoc } from './DocTypes';
import app from './Firebase';
import FireStoreDB from './Firestore';
import FireBaseDB from './Firestore';

export default class User {
    firstName: string;
    lastName: string;
    uid: string;
    email: string;

    constructor(uid: string, email: string, firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.uid = uid;
        this.email = email;
    }

    private async fetchUserDetails(): Promise<void> {
        const doc = await app.firestore().collection('users').doc(this.uid).get();
        try {
            const data = doc.data() as UserDoc;
            this.firstName = data.firstName;
            this.lastName = data.lastName;
        } catch (err) {
            console.warn(err);
        }
    }

    private static async signUp(
        firstName: string,
        lastName: string,
        email: string,
        password: string,
    ): Promise<User | undefined> {
        try {
            const res = await app.auth().createUserWithEmailAndPassword(email, password);
            if (res.user != null) {
                const user = new User(res.user.uid, email, firstName, lastName);
                FireBaseDB.uploadDoc<UserDoc>('users', {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: user.lastName,
                });
                return user;
            } else {
                console.warn(res);
            }
        } catch (err) {
            console.warn(err);
        }
    }

    public static async signOut(): Promise<void> {
        try {
            const res = await app.auth().signOut();
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }

    public static async login(email: string, password: string): Promise<User | undefined> {
        try {
            const res = await app.auth().signInWithEmailAndPassword(email, password);
            if (res.user) {
                const userResult = res.user;

                const userDoc = await FireStoreDB.fetchDoc<UserDoc>(userResult.uid);
                const user = new User(res.user.uid, email, userDoc?.firstName, userDoc?.lastName);
                await user.fetchUserDetails();
                return user;
            } else {
                console.warn(res);
            }
        } catch (err) {
            console.error(err);
        }
    }
}
