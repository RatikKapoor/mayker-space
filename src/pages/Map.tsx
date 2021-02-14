import { IonList, IonPage, IonButton } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BaseMap from '../components/BaseMap';
import './Map.scss';
import { RouteDoc } from '../Models/DocTypes';
import FireStoreDB from '../Models/Firestore';
import { loadingComponent } from '../components/Loading';
import RouteListing from '../components/RouteListing';
import MapView from '../components/MapView';

import Route from '../Models/Route';

const Map: React.FC = () => {
    const [routes, setRoutes] = useState<Array<{ id: string; data: RouteDoc }>>();
    const [newRouteViewVisible, setNewRouteViewVisible] = useState<boolean>(false);

    const db = new FireStoreDB();

    async function getRoutes() {
        const unsub = db.db
            .collection('routes')
            .orderBy('iid', 'desc')
            .onSnapshot({
                next: (snapshot: firebase.default.firestore.QuerySnapshot) => {
                    const snapshots = snapshot.docs;
                    const docs = snapshots.map((docSnapshot) => {
                        return { id: docSnapshot.id, data: docSnapshot.data() as RouteDoc };
                    });
                    setRoutes(docs);
                },
            });
        return unsub;
    }

    useEffect(() => {
        const unsub = getRoutes();
        return () => {
            unsub
                .then((v) => v())
                .catch((e) => {
                    console.log(e);
                });
        };
    }, [routes]);

    const testRoute = new Route('test', 37.7577, -122.4376, 37.7677, -122.4568, 'herlnkjf');

    return (
        <IonPage>
            <IonButton onClick={() => setNewRouteViewVisible(true)}>+</IonButton>
            <IonList>
                {routes
                    ? routes.map((v, k) => {
                          return (
                              <RouteListing
                                  key={k}
                                  route={
                                      new Route(
                                          'routes/' + v.id,
                                          v.data.originlat,
                                          v.data.originlon,
                                          v.data.destinationlat,
                                          v.data.destinationlon,
                                          v.data.iid,
                                      )
                                  }
                              />
                          );
                      })
                    : loadingComponent}
            </IonList>
            <MapView isOpen={newRouteViewVisible} route={testRoute} closeCallback={setNewRouteViewVisible} />
        </IonPage>
    );
};

export default Map;
