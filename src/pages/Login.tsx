import React, { useState } from 'react';
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
import User from '../Models/User';
import redirectAfterAuthEvent from '../app/routing';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function handleSubmit(email: string, password: string) {
        if (await User.login(email, password)) {
            alert('Login success');
            redirectAfterAuthEvent('/items');
        } else {
            alert('Could not login');
        }
    }

    async function handleLogout() {
        const res = await User.signOut();
        console.log('Sign out action', res);
    }

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
                <IonInput
                    placeholder="Enter your Email Address"
                    type="email"
                    onIonChange={(e) => setEmail(e.detail.value ?? '')}
                />
                <IonInput
                    placeholder="Enter your Password"
                    type="password"
                    onIonChange={(e) => setPassword(e.detail.value ?? '')}
                />
                <IonButtons>
                    <IonButton onClick={() => handleSubmit(email, password)}>Log In</IonButton>
                    <IonButton onClick={() => handleLogout()}>Log Out</IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default Login;
