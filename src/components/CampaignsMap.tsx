"use client";

import React, { useState } from "react";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { sampleCampaignsData } from "@/utils/mockData";
import DetailPanel from "./DetailPanel";

export interface CampaignData {
  id: string;
  position: LatLngExpression;
  value: string | number;
  themeName: string;
  questions: string;
  totalQueries: number;
  responses: number;
  activityPercentage: number;
  ratingTrendPercentage: number;
}

const MapPage: React.FC = () => {
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignData | null>(
    null,
  );

  const createCustomIcon = (campaign: CampaignData) => {
    return L.divIcon({
      html: `<div>${campaign.value}%</div>`,
      className: "custom-map-marker",
      iconSize: [60, 30],
      iconAnchor: [30, 15],
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-red-500 font-sans">
      <main className="relative flex-grow">
        <MapContainer
          center={[43.214, 27.915]}
          zoom={13}
          className="z-0 h-full w-full"
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {sampleCampaignsData.map((campaign) => (
            <Marker
              key={campaign.id}
              position={campaign.position}
              icon={createCustomIcon(campaign)}
              eventHandlers={{
                click: () => {
                  setSelectedCampaign(campaign);
                },
              }}
            />
          ))}
        </MapContainer>
        <DetailPanel
          data={selectedCampaign}
          onClose={() => setSelectedCampaign(null)}
        />
      </main>
    </div>
  );
};

export default MapPage;
