import React from 'react';
import { IonDatetime, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import './ItemView.scss';

const ItemView: React.FC = () => {
    return (
        <IonList>
            <IonItem>
                <IonLabel>Start Date</IonLabel>
                <IonDatetime value="1990-02-19" placeholder="Select Date"></IonDatetime>
            </IonItem>
            <IonItem>
                <IonLabel>End Date</IonLabel>
                <IonDatetime value="1990-02-19" placeholder="Select Date"></IonDatetime>
            </IonItem>
            <IonItem>
                <IonInput placeholder="Location"></IonInput>
            </IonItem>
        </IonList>
    );
};

export default ItemView;
