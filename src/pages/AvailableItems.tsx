import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonGrid, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AvailableItems.scss';
import { ItemDoc } from '../Models/DocTypes';
import Item from '../Models/Item';
import ItemView from '../components/ItemView';
import ItemRequest from '../components/ItemRequest';
import FireStoreDB from '../Models/Firestore';
import { loadingComponent } from '../components/Loading';
import { ItemCategory } from '../Models/Enums';
import NewItemView from '../components/NewItemView';

// const testItem = new Item(
//     'ABC123',
//     'Arduino Uno',
//     'Microcontroller',
//     'I have an Arduino Uno R3 available for use. Would only be willing to give it up for a few weeks.',
//     'https://drscdn.500px.org/photo/58131206/q%3D80_m%3D2000/v2?sig=d6e8d355df86733d2430b9a42c9af7718b324f3b49ff78e8983eb60673770553',
// );

const AvailableItems: React.FC = () => {
    const [items, setItems] = useState<Array<{ id: string; data: ItemDoc }>>();
    const [newItemViewVisible, setNewItemViewVisible] = useState<boolean>(false);
    const db = new FireStoreDB();

    async function getItems() {
        const unsub = db.db
            .collection('items')
            .orderBy('name', 'desc')
            .onSnapshot({
                next: (snapshot: firebase.default.firestore.QuerySnapshot) => {
                    const snapshots = snapshot.docs;
                    const docs = snapshots.map((docSnapshot) => {
                        return { id: docSnapshot.id, data: docSnapshot.data() as ItemDoc };
                    });
                    setItems(docs);
                },
            });
        return unsub;
    }

    useEffect(() => {
        const unsub = getItems();
        return () => {
            unsub
                .then((v) => v())
                .catch((e) => {
                    console.log(e);
                });
        };
    }, [items]);

    return (
        <IonPage>
            <IonHeader className="IonHeader">
                <IonGrid className="IonToolbar">
                    <IonTitle>Available Items</IonTitle>
                    <IonButton onClick={() => setNewItemViewVisible(true)}>+</IonButton>
                </IonGrid>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Available Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ItemRequest />
                <IonList>
                    {items
                        ? items.map((v, k) => {
                              return (
                                  <ItemView
                                      key={k}
                                      item={
                                          new Item(
                                              'items/' + v.id,
                                              v.data.name,
                                              ItemCategory.Component,
                                              v.data.description,
                                              v.data.imageUrl,
                                              v.data.latitude,
                                              v.data.longitude,
                                              v.data.uid,
                                          )
                                      }
                                  />
                              );
                          })
                        : loadingComponent}
                </IonList>
            </IonContent>
            <NewItemView isOpen={newItemViewVisible} closeCallback={setNewItemViewVisible} />
        </IonPage>
    );
};

export default AvailableItems;
