import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonImg,
    IonItem,
    IonRow,
} from '@ionic/react';
import './ItemView.scss';
import Item from '../Models/Item';
import ItemButtons from './ItemButtons';

interface ItemProps {
    item: Item;
}

const ItemView: React.FC<ItemProps> = (props: ItemProps) => {
    return (
        <IonItem className="itemContainer">
            <IonGrid>
                <IonCard className="itemCard">
                    <IonCardHeader>
                        <IonCardTitle>{props.item.name}</IonCardTitle>
                        <IonCardSubtitle>{props.item.category}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent className="itemDescription">{props.item.description}</IonCardContent>
                </IonCard>
                <IonGrid className="ImgGrid">
                    <IonRow className="ImgGrid">
                        <IonImg src={props.item.imageUrl} className="itemImg" />
                    </IonRow>
                </IonGrid>
                <ItemButtons item={props.item} />
            </IonGrid>
        </IonItem>
    );
};

export default ItemView;
