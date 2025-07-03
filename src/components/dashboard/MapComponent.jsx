import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useTheme } from "../../theme/ThemeContext";

const darkMapStyle = [
  {
    featureType: "all",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "all",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#000000",
      },
      {
        lightness: 13,
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#144b53",
      },
      {
        lightness: 14,
      },
      {
        weight: 1.4,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#08304b",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "geometry",
    stylers: [
      {
        color: "#0c4152",
      },
      {
        lightness: 5,
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0b434f",
      },
      {
        lightness: 25,
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#0b3d51",
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        color: "#000000",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "all",
    stylers: [
      {
        color: "#146474",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "all",
    stylers: [
      {
        color: "#021019",
      },
    ],
  },
];

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 32.4678,
  lng: 74.5126,
};

export default function MapComponent() {
  const { theme } = useTheme();
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDQmPq0HH1XTcSNa55xUP748V1Vv4hhK1w",
  });
  const mapOptions = {
    styles: theme === "dark" ? darkMapStyle : [],
    disableDefaultUI: true,
    zoomControl: true,
  };
  return (
    <div className="h-full w-full">
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          options={mapOptions}
        />
      )}
    </div>
  );
}
