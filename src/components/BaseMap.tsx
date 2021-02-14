import React, { useCallback, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL, { GeolocateControl, Marker } from 'react-map-gl';
import './BaseMap.scss';
import Route from '../Models/Route';

interface MapProps {
    route: Route;
}

const geolocateStyle = {
    top: 0,
    left: 0,
    margin: 10,
};

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;

const SIZE = 20;

const positionOptions = { enableHighAccuracy: true };

const BaseMap: React.FC<MapProps> = (props: MapProps) => {
    const accessToken = 'pk.eyJ1Ijoic2Ftc29uaCIsImEiOiJja2w0OG15MXkwYnlwMnZxeHJveHNidWxvIn0.QSg83CVaQ3JwLPJJzMDp6w';

    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 1,
    });
    const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), []);
    return (
        <div style={{ height: '100vh' }}>
            <MapGL
                {...viewport}
                width="100%"
                height="100%"
                onViewportChange={handleViewportChange}
                mapboxApiAccessToken={accessToken}
                mapStyle="mapbox://styles/mapbox/streets-v11"
            >
                {props.route.originlat && props.route.originlon && (
                    <Marker key={`marker-1`} longitude={props.route.originlon} latitude={props.route.originlat}>
                        <svg
                            height={SIZE}
                            viewBox="0 0 24 24"
                            style={{
                                cursor: 'pointer',
                                fill: '#d00',
                                stroke: 'none',
                                transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                            }}
                        >
                            <path d={ICON} />
                        </svg>
                    </Marker>
                )}
                <Marker key={`marker-1`} longitude={props.route.destinationlon} latitude={props.route.destinationlat}>
                    <svg
                        height={SIZE}
                        viewBox="0 0 24 24"
                        style={{
                            cursor: 'pointer',
                            fill: '#d00',
                            stroke: 'none',
                            transform: `translate(${-SIZE / 2}px,${-SIZE}px)`,
                        }}
                    >
                        <path d={ICON} />
                    </svg>
                </Marker>
                <GeolocateControl
                    style={geolocateStyle}
                    positionOptions={positionOptions}
                    // trackUserLocation
                    auto
                    onGeolocate={(e) => {
                        console.log(e);
                    }}
                />
            </MapGL>
        </div>
    );
};

export default BaseMap;
