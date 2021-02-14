import { IonList, IonPage, IonItem } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import BaseMap from '../components/BaseMap';
import './Map.scss';
import { RouteDoc } from '../Models/DocTypes';
import FireStoreDB from '../Models/Firestore';
import { loadingComponent } from '../components/Loading';
import RouteListing from '../components/RouteListing';

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

    const testRoute = new Route('test', -117.1425, 32.63638889, -116.5616667, 32.93583333, 'herlnkjf');

    return (
        <IonPage>
            <BaseMap route={testRoute} />
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
            {/* <BaseMap /> */}
        </IonPage>
    );
};

export default Map;
