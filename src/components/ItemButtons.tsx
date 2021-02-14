import { IonButton, IonContent, IonGrid, IonIcon, IonLabel, IonRow } from '@ionic/react';
import { chatbox, chatboxEllipses, pin, send } from 'ionicons/icons';
import React from 'react';
import './ItemView.scss';
import './ItemButtons.scss';

const ItemButtons: React.FC = () => {
    return (
        <IonGrid className="iconButtons">
            <IonRow className="IonRow">
                <IonButton className="iconButton" fill="outline">
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
