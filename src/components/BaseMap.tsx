import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import Directions from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import './BaseMap.scss';

const BaseMap = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftc29uaCIsImEiOiJja2w0OG15MXkwYnlwMnZxeHJveHNidWxvIn0.QSg83CVaQ3JwLPJJzMDp6w';
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'mapContainer',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-113.92, 50.9],
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
        });
        map.addControl(directions, 'top-left');
    }, []);
    return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;
