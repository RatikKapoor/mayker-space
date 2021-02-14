import React from 'react';
import { IonPage } from '@ionic/react';

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
