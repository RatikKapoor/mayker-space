import React from 'react';
import { IonContent, IonHeader, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './AvailableItems.scss';

import Item from '../Models/Item';
import ItemView from '../components/ItemView';
import ItemRequest from '../components/ItemRequest';

const testItem = new Item(
    'ABC123',
    'Arduino Uno',
    'Microcontroller',
    'I have an Arduino Uno R3 available for use. Would only be willing to give it up for a few weeks.',
    'https://drscdn.500px.org/photo/58131206/q%3D80_m%3D2000/v2?sig=d6e8d355df86733d2430b9a42c9af7718b324f3b49ff78e8983eb60673770553',
);

const AvailableItems: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Available Items</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Available Items</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <ItemRequest />
                <IonList>
                    <ItemView item={testItem} />
                    <ItemView item={testItem} />
                    <ItemView item={testItem} />
                    <ItemView item={testItem} />
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default AvailableItems;
