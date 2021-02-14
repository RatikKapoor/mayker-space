import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem } from '@ionic/react';
import Route from '../Models/Route';
import BaseMap from './BaseMap';

interface RouteProps {
    route: Route;
}

const RouteListing: React.FC<RouteProps> = (props: RouteProps) => {
    return (
        <IonCard className="itemCard">
            <IonCardHeader>
                <IonCardTitle>
                    {props.route.destinationlat}, {props.route.destinationlon}
                </IonCardTitle>
                <IonCardSubtitle>
                    {props.route.originlat}, {props.route.originlon}
                </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent className="itemDescription">{props.route.iid}</IonCardContent>
        </IonCard>
    );
};

export default RouteListing;
