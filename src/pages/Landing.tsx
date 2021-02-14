import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonLabel} from '@ionic/react';
import React from 'react';
import './Landing.scss';
import landingbg from './images/home.svg';

const Landing: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar>
                    <IonTabButton>
                        <IonLabel>About Us</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel>Services</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel>Contact Us</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel>Sign Up</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonHeader>
            <IonContent className="homeContainer">
                <img src={landingbg} />
            </IonContent>
        </IonPage>
    );
};

export default Landing;
