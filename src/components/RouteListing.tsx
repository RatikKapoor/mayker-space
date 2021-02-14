import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import Route from '../Models/Route';

interface RouteProps {
    route: Route;
    showMap: CallableFunction;
    setRoute: CallableFunction;
}

const RouteListing: React.FC<RouteProps> = (props: RouteProps) => {
    return (
        <IonCard className="itemCard">
            <IonCardHeader>
                <IonCardTitle>{props.route.name}</IonCardTitle>
                <IonCardTitle>
                    {props.route.destinationlat}, {props.route.destinationlon}
                </IonCardTitle>
                <IonCardSubtitle>
                    {props.route.originlat}, {props.route.originlon}
                </IonCardSubtitle>
                <IonButton
                    onClick={() => {
                        props.showMap(true);
                        props.setRoute(props.route);
                    }}
                >
                    View Location
                </IonButton>
            </IonCardHeader>
            {/* <IonCardContent className="itemDescription">{props.route.iid}</IonCardContent> */}
        </IonCard>
    );
};

export default RouteListing;
