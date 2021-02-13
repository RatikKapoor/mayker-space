import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './BaseMap.css';

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
        //Set marker to Ratik's House
        const marker = new mapboxgl.Marker()
            //This will set the marker
            .setLngLat([-113.92, 50.9])
            .addTo(map);
        //Geolocate
        const geolocate = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true,
            },
            trackUserLocation: true,
        });

        map.addControl(geolocate, 'top-right');
    }, []);
    return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;
