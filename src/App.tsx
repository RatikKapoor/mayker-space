import React, { useEffect, useState } from 'react';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bagHandle, clipboard, key, mapOutline, person } from 'ionicons/icons';
import AvailableItems from './pages/AvailableItems';
import Map from './pages/Map';
import Profile from './pages/YourProfile';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';

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
import app from './Models/Firebase';
//import User from './Models/User';
// import redirectAfterAuthEvent from './app/routing';
import { PrivateRoute } from './components/PrivateRoute';

const App: React.FC = () => {
    const history = useHistory();
    const [authed, setAuthed] = useState<boolean | null>();

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setAuthed(Boolean(user));
            if (user) {
                console.log('User:', user);
                // redirectAfterAuthEvent('/items');
                // history.push('/items');
            } else {
                // redirectAfterAuthEvent('/login');
                console.log('No user');
                // history.push('/login');
            }
        });
        return () => {
            // cleanup
        };
    }, []);

    return (
        <IonApp>
            <IonReactRouter>
                <IonTabs>
                    <IonTabBar slot="bottom" hidden={!authed}>
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

                    <IonRouterOutlet id="main">
                        <Route path="/landing" component={Landing} exact={true} />
                        <Route path="/login" component={Login} exact={true} />
                        <Route path="/register" component={Register} exact={true} />
                        <PrivateRoute path="/items" component={AvailableItems} exact={true} />
                        <PrivateRoute path="/map" component={Map} exact={true} />
                        <PrivateRoute path="/me" component={Profile} exact={true} />
                        <Route path="/" render={() => <Redirect to={authed ? '/items' : '/landing'} />} exact={true} />
                    </IonRouterOutlet>
                </IonTabs>
            </IonReactRouter>
        </IonApp>
    );
};

export default App;
