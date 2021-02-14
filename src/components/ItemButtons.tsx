import { IonButton, IonIcon, IonLabel } from '@ionic/react';
import { chatbox, chatboxEllipses, pin, send } from 'ionicons/icons';
import React from 'react';
import './ItemView.scss';

const ItemButtons: React.FC = () => {
    return (
        <div className="iconButtons">
            <IonButton className="iconButton">
                <IonIcon icon={send} />
                <IonLabel>Request to Borrow</IonLabel>
            </IonButton>
            <IonButton className="iconButton">
                <IonIcon icon={pin} />
                <IonLabel>Check Location</IonLabel>
            </IonButton>
            <IonButton className="iconButton">
                <IonIcon icon={chatboxEllipses} />
                <IonLabel>Send a Message</IonLabel>
            </IonButton>
        </div>
    );
};

export default ItemButtons;
