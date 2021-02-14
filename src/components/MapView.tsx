import { IonModal } from '@ionic/react';
import React, { useState } from 'react';
import { ItemCategory } from '../Models/Enums';
import Route from '../Models/Route';
import BaseMap from './BaseMap';
import './NewItemView.scss';

interface NewItemViewProps {
    isOpen: boolean;
    route: Route;
    closeCallback: CallableFunction;
}

const MapView: React.FC<NewItemViewProps> = (props: NewItemViewProps) => {
    // const [name, setName] = useState<string>('');
    // const [category, setCategory] = useState<ItemCategory>(ItemCategory.Component);
    // const [description, setDescription] = useState<string>('');
    // const [imageURL, setImageURL] = useState<string>('');
    // const [latitude, setLatitude] = useState<number>(0);
    // const [longitude, setLongitude] = useState<number>(0);

    return (
        <IonModal isOpen={props.isOpen} onDidDismiss={() => props.closeCallback()}>
            <BaseMap route={props.route} />
        </IonModal>
    );
};

export default MapView;
