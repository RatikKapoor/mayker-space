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
import { useHistory } from 'react-router';
// import redirectAfterAuthEvent from '../app/routing';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const history = useHistory();

    async function handleSubmit(email: string, password: string) {
        if (await User.login(email, password)) {
            // alert('Login success');
            // redirectAfterAuthEvent('/items');
            history.push('/items');
        } else {
            alert('Could not login, please check your credentials');
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
                <IonTitle class="loginTitle">Log In</IonTitle>
                <IonInput
                    className="loginBox"
                    placeholder="Enter your Email Address"
                    type="email"
                    onIonChange={(e) => setEmail(e.detail.value ?? '')}
                />
                <IonInput
                    className="loginBox"
                    placeholder="Enter your Password"
                    type="password"
                    onIonChange={(e) => setPassword(e.detail.value ?? '')}
                />
                <IonButtons className="loginButtonContainer">
                    <IonButton className="loginButtons" onClick={() => handleSubmit(email, password)}>
                        Log In
                    </IonButton>
                </IonButtons>
                <IonButtons className="loginButtonContainer2">
                    <IonButton className="loginButtons" onClick={() => history.push('/register')}>
                        Register
                    </IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default Login;
