import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./BaseMap.scss";

const BaseMap = () => {
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2Ftc29uaCIsImEiOiJja2w0OG15MXkwYnlwMnZxeHJveHNidWxvIn0.QSg83CVaQ3JwLPJJzMDp6w';

  useEffect(() => {
    new mapboxgl.Map({
      container: "mapContainer",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [51.1, -114],
      zoom: 9,
    });
  }, []);

  return <div id="mapContainer" className="map"></div>;
};

export default BaseMap;
