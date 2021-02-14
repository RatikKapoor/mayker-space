import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bagHandle, clipboard, key, mapOutline, person } from 'ionicons/icons';
import AvailableItems from './pages/AvailableItems';
import Map from './pages/Map';
import Profile from './pages/YourProfile';
import Login from './pages/Login';
import Register from './pages/Register';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import Landing from './pages/Landing';

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/landing" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/items" component={AvailableItems} />
                    <Route exact path="/map" component={Map} />
                    <Route path="/me" component={Profile} />
                    <Route exact path="/" render={() => <Redirect to="/landing" />} />
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="items" href="/items">
                        <IonIcon icon={bagHandle} />
                        <IonLabel>Available Items</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="map" href="/map">
                        <IonIcon icon={mapOutline} />
                        <IonLabel>Routes</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="profile" href="/me">
                        <IonIcon icon={person} />
                        <IonLabel>Your Items</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="login" href="/login">
                        <IonIcon icon={key} />
                        <IonLabel>Login</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="register" href="/register">
                        <IonIcon icon={clipboard} />
                        <IonLabel>Register</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
