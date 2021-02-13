import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

import BaseMap from '../components/BaseMap';
import './Map.scss';

const Map: React.FC = () => {
    return (
        <IonPage>
            <BaseMap />
        </IonPage>
    );
};

export default Map;
