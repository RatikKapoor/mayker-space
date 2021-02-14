import React from 'react';
import { IonPage, IonList, IonItem, IonIcon, IonLabel, IonTitle } from '@ionic/react';
import { lockClosed, personCircle, shield } from 'ionicons/icons';

const ProfilePage: React.FC = () => {
    return (
        <IonPage>
            <IonTitle>Settings</IonTitle>
            <IonList>
                <IonItem>
                    <IonIcon slot="start" icon={personCircle}/>
                    <IonLabel>
                        <h2>Account Preferences</h2>
                        <p>The basics of your profile and experience on Mayker.space</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon slot="start" icon={lockClosed}/>
                    <IonLabel>
                        <h2>Sign in & Security</h2>
                        <p>Making your account safe</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon slot="start" icon={lockClosed}/>
                    <IonLabel>
                        <h2>Sign in & Security</h2>
                        <p>Making your account safe</p>
                    </IonLabel>
                </IonItem>
                <IonItem>
                    <IonIcon slot="start" icon={shield}/>
                    <IonLabel>
                        <h2>Data Privacy</h2>
                        <p>Control how your information is seen from others</p>
                    </IonLabel>
                </IonItem>
            </IonList>
        </IonPage>
    );
};

export default ProfilePage;