import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem } from '@ionic/react';
import './ItemView.scss';
import Item from '../Models/Item';
import ItemButtons from './ItemButtons';

interface ItemProps {
    item: Item;
}

const ItemView: React.FC<ItemProps> = (props: ItemProps) => {
    return (
        <IonItem className="itemContainer">
            <IonCard className="itemCard">
                <IonCardHeader>
                    <IonCardTitle>{props.item.name}</IonCardTitle>
                    <IonCardSubtitle>{props.item.category}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent className="itemDescription">{props.item.description}</IonCardContent>
            </IonCard>
            <img src={props.item.imageUrl} className="itemImg"></img>
            <ItemButtons />
        </IonItem>
    );
};

export default ItemView;
