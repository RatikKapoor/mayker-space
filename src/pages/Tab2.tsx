import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.scss';
import BaseMap from '../components/BaseMap';

const Tab2: React.FC = () => {
    return (
        <IonPage>
            <BaseMap />
        </IonPage>
    );
};

export default Tab2;
