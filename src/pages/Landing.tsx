import {
    IonContent,
    IonHeader,
    IonPage,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonButton,
    IonGrid,
    IonImg,
    IonRow,
    IonCol,
} from '@ionic/react';
import React from 'react';
import './Landing.scss';
import landingbg from './images/home.svg';
import aboutUs from './images/aboutUs.svg';
import community from './images/community.svg';
import team from './images/team.svg';
import ourService from './images/our_service.svg';
import share from './images/share.svg';
import landing_logo from './images/landing_logo.svg';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
    const history = useHistory();
    return (
        <IonPage>
            <IonHeader className="IonHeader">
                <IonGrid className="IonGrid">
                    <IonRow className="tabRow">
                        <IonCol size="4">
                            <IonButton className="image" fill="clear">
                                <IonImg src={landing_logo} className="IonImg" />
                            </IonButton>
                        </IonCol>
                        <IonCol size="8" className="IonColRight">
                            <IonButton fill="clear">
                                <IonLabel className="aboutUsButton">About Us</IonLabel>
                            </IonButton>
                            <IonButton fill="clear">
                                <IonLabel className="whiteButton">Services</IonLabel>
                            </IonButton>
                            <IonButton fill="clear">
                                <IonLabel className="whiteButton">Contact Us</IonLabel>
                            </IonButton>
                            <IonButton fill="clear" onClick={() => history.push('/login')}>
                                <IonLabel className="login" color="danger">
                                    Login
                                </IonLabel>
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonHeader>
            <IonContent className="homeContainer">
                <img src={landingbg} />
                <img src={aboutUs} className="aboutUs" />
                <img src={community} className="community" />
                <img src={team} className="team" />
                <img src={ourService} className="our_service" />
                <img src={share} className="share" />
            </IonContent>
        </IonPage>
    );
};

export default Landing;
