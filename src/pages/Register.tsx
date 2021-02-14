import React from 'react';
import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonInput,
    IonTitle,
    IonButton,
} from '@ionic/react';
import './Register.scss';

const Register: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/">Go Back</IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="registerContainer">
                <IonTitle>Register</IonTitle>
                <IonInput placeholder="Enter your Email Address" type="email" />
                <IonInput placeholder="Enter your Password" type="password" />
                <IonInput placeholder="Re-enter your Password" type="password" />
                <IonButtons>
                    <IonButton>Register Now</IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default Register;
