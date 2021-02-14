import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './BaseMap.scss';
import Route from '../Models/Route';

interface MapProps {
    route: Route;
}

const BaseMap: React.FC<MapProps> = (props: MapProps) => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftc29uaCIsImEiOiJja2w0OG15MXkwYnlwMnZxeHJveHNidWxvIn0.QSg83CVaQ3JwLPJJzMDp6w';
    useEffect(() => {
        console.log('printing map' + props.route.originlat + ', ' + props.route.originlon);
        const map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-117.1425, 32.63638889],
            zoom: 14,
        });
        //Set navigation controls
        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, 'top-right');

        //Geolocate
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        });
        map.addControl(geolocate, 'top-right');
        const directions = new Directions({
            accessToken: 'pk.eyJ1Ijoic2Ftc29uaCIsImEiOiJja2w0OG15MXkwYnlwMnZxeHJveHNidWxvIn0.QSg83CVaQ3JwLPJJzMDp6w',
            unit: 'metric',
            profile: 'mapbox/driving',
            interactive: false,
        });
        directions.setOrigin([props.route.originlat, props.route.originlon]);
        directions.setDestination([props.route.destinationlat, props.route.destinationlon]);
        map.addControl(directions, 'top-left');
    }, []);
    return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;
