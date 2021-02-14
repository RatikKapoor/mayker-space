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
import './Register.scss';
import User from '../Models/User';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    async function handleSubmit(email: string, password: string, firsName: string, lastName: string) {
        console.warn(User.signUp(firsName, lastName, email, password));
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
            <IonContent className="registerContainer">
                <IonTitle>Register</IonTitle>
                <IonInput
                    placeholder="Enter your first name"
                    type="text"
                    onIonChange={(e) => setFirstName(e.detail.value ?? '')}
                />
                <IonInput
                    placeholder="Enter your last name"
                    type="text"
                    onIonChange={(e) => setLastName(e.detail.value ?? '')}
                />
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
                {/* TODO: Make re-enter validation work */}
                <IonInput placeholder="Re-enter your Password" type="password" />
                <IonButtons>
                    <IonButton onClick={() => handleSubmit(email, password, firstName, lastName)}>
                        Register Now
                    </IonButton>
                </IonButtons>
            </IonContent>
        </IonPage>
    );
};

export default Register;
