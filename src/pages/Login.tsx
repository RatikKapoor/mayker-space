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
import './Login.scss';

const Login: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/">Go Back</IonBackButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="loginContainer">
                <IonTitle>Log In</IonTitle>
                <IonInput placeholder="Enter your Email Address" type="email" />
                <IonInput placeholder="Enter your Password" type="password" />
                <IonButtons>
                    <IonButton>Log In</IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default Login;
