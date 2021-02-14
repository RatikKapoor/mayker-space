import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import app from '../Models/Firebase';
import { loadingComponent } from './Loading';

interface PrivateRouteInterface {
    component: React.FC;
    path: string;
    exact?: boolean;
}

export const PrivateRoute: React.FC<{ component: React.FC; path: string; exact?: boolean }> = (
    props: PrivateRouteInterface,
) => {
    const [loading, setLoadingState] = useState(true);
    const [authed, setAuthed] = useState<boolean | null>();

    app.auth().onAuthStateChanged((user) => {
        setAuthed(Boolean(user));
        setLoadingState(authed == null);
    });

    console.log(authed);
    const loadedComponent = authed ? (
        <Route path={props.path} exact={props.exact} component={props.component} />
    ) : (
        <Redirect to="/login" exact={true} />
    );
    return loading ? loadingComponent : loadedComponent;
};
