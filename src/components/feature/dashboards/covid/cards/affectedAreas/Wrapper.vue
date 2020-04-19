<template>
  <Card padding="0">
    <CardHeader>
      <CardTitle cardTitle="Affected Areas" cardSubtitle="Last 7 days" />
    </CardHeader>
    <styled-wrapper>
      <LMap :options="mapOptions" :zoom="zoom" :center="center">
        <LGeoJson :crs="crs" :options="options" :geojson="geojson" />
        <LMarker
          v-for="marker in markers"
          :key="marker.id"
          :latLng="marker.latLng"
        >
          <LIcon>
            <PulsingMarker :color="marker.color" />
          </LIcon>
        </LMarker>
      </LMap>
    </styled-wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { LMap, LGeoJson, LMarker, LIcon } from "vue2-leaflet";

// import * as L from "leaflet";
import proj4 from "proj4";
require("proj4leaflet");

import "leaflet/dist/leaflet.css";
import axios from "axios";
import { Card, CardHeader, CardTitle } from "../../../../../shared/card";
import PulsingMarker from "./PulsingMarker";

proj4.defs(
  "EPSG:26915",
  "+proj=utm +zone=15 +ellps=GRS80 +datum=NAD83 +units=m +no_defs"
);

const crs = {
  type: "name",
  properties: {
    name: "urn:ogc:def:crs:EPSG::26915"
  }
};

const StyledWrapper = styled.div`
  flex: 3;
  min-height: 400px;
  height: 400px;
  transform: translateY(-30px);
  width: 100%;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    min-height: 400px;
    height: 400px;
  }
`;

var myStyle = {
  color: "#ffffff",
  weight: 1,
  fill: true,
  fillColor: "#000000",
  fillOpacity: 1,
  fillPattern:
    "https://i.pinimg.com/originals/1f/da/87/1fda87202829f0b2c4272fa4fa5e7131.jpg",
  imageScale: 0.045
};

export default {
  components: {
    StyledWrapper,
    LMap,
    LGeoJson,
    LMarker,
    LIcon,
    Card,
    CardHeader,
    CardTitle,
    PulsingMarker
  },
  data() {
    return {
      crs: crs,
      url: "http://localhost:8000/api/geojson",
      zoom: 1,
      center: [52.4862, 1.8904],
      bounds: null,
      geojson: null,
      options: {
        style: myStyle
      },
      markerLatLng: [47.31322, -1.319482],
      mapOptions: {
        scrollWheelZoom: false,
        tap: false,
        dragging: false,
        zoomControl: false,
        doubleClickZoom: false,
        padding: [100]
      },
      markers: [
        {
          id: 1,
          visible: true,
          latLng: [47.31322, -1.319482],
          color: "Chart1"
        },
        {
          id: 2,
          visible: true,
          latLng: [36.778259, -119.417931],
          color: "Chart2"
        },
        {
          id: 3,
          visible: true,
          latLng: [35.652832, 139.839478],
          color: "Chart3"
        },
        {
          id: 4,
          visible: true,
          latLng: [5.55, -0.02],
          color: "Chart4"
        },
        {
          id: 5,
          visible: true,
          latLng: [40.73061, -73.935242],
          color: "Pink"
        },
        {
          id: 6,
          visible: true,
          latLng: [19.07609, 72.877426],
          color: "Purple"
        }
      ]
    };
  },
  created() {
    axios.get("/api/geojson").then(response => {
      //console.log(response);
      this.geojson = response.data;
    });
  }
};
</script>

<style>
.leaflet-container {
  background-color: rgba(255, 0, 0, 0);
}

.leaflet-pane {
  z-index: 1 !important;
}

.leaflet-overlay-pane {
  z-index: 2;
}
</style>
