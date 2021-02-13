import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bagHandle, mapOutline, person, } from 'ionicons/icons';
import AvailableItems from './pages/AvailableItems';
import Map from './pages/Map';
import Profile from './pages/YourProfile';

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

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/items">
                        <AvailableItems />
                    </Route>
                    <Route exact path="/map">
                        <Map />
                    </Route>
                    <Route path="/me">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Redirect to="/items" />
                    </Route>
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
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
