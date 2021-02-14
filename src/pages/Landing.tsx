import { IonContent, IonHeader, IonPage, IonTabBar, IonTabButton, IonLabel } from '@ionic/react';
import React from 'react';
import './Landing.scss';
import landingbg from './images/home.svg';
import aboutUs from './images/aboutUs.svg';
import community from './images/community.svg';
import team from './images/team.svg';
import ourService from './images/our_service.svg';
import share from './images/share.svg';

const Landing: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar className="tabBar">
                    <IonTabButton className="image">
                        <img src="https://i.imgur.com/F0NPu4M.png"></img>
                    </IonTabButton>
                    <IonTabButton href="#items">
                        <IonLabel className="aboutUsButton">About Us</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel className="whiteButton">Services</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel className="whiteButton">Contact Us</IonLabel>
                    </IonTabButton>
                    <IonTabButton>
                        <IonLabel className="signUp">Sign Up</IonLabel>
                    </IonTabButton>
                </IonTabBar>
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
