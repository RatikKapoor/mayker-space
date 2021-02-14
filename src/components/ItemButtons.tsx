import { IonButton, IonContent, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { chatbox, chatboxEllipses, pin, send } from 'ionicons/icons';
import React from 'react';
import './ItemView.scss';
import './ItemButtons.scss';
import Item from '../Models/Item';
import Route from '../Models/Route';
import { RouteDoc } from '../Models/DocTypes';

interface ItemButtonProps {
    item: Item;
}

const ItemButtons: React.FC<ItemButtonProps> = (props: ItemButtonProps) => {
    const handleRouteCreation = () => {
        const newRoute: RouteDoc = {
            id: props.item.id,
            originlat: props.item.latitude,
            originlon: props.item.longitude,
            destinationlat: 51.077472,
            destinationlon: -114.139632,
            iid: props.item.id,
        };
        Route.addRoute(newRoute);
        alert('You have sucessfuly requested the item, a route has now been created');
    };

    return (
        <IonGrid className="iconButtons">
            <IonRow className="IonRow">
                <IonButton className="iconButton" fill="outline" onClick={() => handleRouteCreation()}>
                    <IonIcon icon={send} />
                    <IonLabel>Request to Borrow</IonLabel>
                </IonButton>
                <IonButton className="iconButton" fill="outline">
                    <IonIcon icon={pin} />
                    <IonLabel>Check Location</IonLabel>
                </IonButton>
                <IonButton className="iconButton" fill="outline">
                    <IonIcon icon={chatboxEllipses} />
                    <IonLabel>Send a Message</IonLabel>
                </IonButton>
            </IonRow>
        </IonGrid>
    );
};

export default ItemButtons;
