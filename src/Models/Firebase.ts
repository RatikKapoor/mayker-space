import firebase from 'firebase';

export const Timestamp = firebase.firestore.Timestamp;
export type DocumentData = firebase.firestore.DocumentData;
export type WhereFilterOp = firebase.firestore.WhereFilterOp;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAehClw_s0DpwZ8pghl_RZ3xzNXYYspfmU',
    authDomain: 'mayker-space.firebaseapp.com',
    projectId: 'mayker-space',
    storageBucket: 'mayker-space.appspot.com',
    messagingSenderId: '444509071028',
    appId: '1:444509071028:web:d7313207c8f78959d0d9e1',
    measurementId: 'G-PK984EC49M',
};
const app: firebase.app.App = firebase.initializeApp(firebaseConfig);

export default app;
