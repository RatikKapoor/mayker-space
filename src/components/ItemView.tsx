import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import './ItemView.scss';
import Item from '../Models/Item';

interface ItemProps {
    item: Item;
}

const ItemView: React.FC<ItemProps> = (props: ItemProps) => {
    return (
        <IonCard>
            <img src={props.item.imageUrl}></img>
            <IonCardHeader>
                <IonCardSubtitle>{props.item.category}</IonCardSubtitle>
                <IonCardTitle>{props.item.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{props.item.description}</IonCardContent>
            <IonButton>Request</IonButton>
        </IonCard>
    );
};

export default ItemView;
