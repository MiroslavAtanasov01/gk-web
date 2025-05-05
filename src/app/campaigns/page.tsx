"use client";

import React from "react";
import ButtonBar from "@/components/ButtonBar";
import Image from "next/image";
import {
  sampleCampaigns,
  ScrollableGridContainer,
} from "@/components/ScrollableGrid";

import dynamic from "next/dynamic";
import {
  sampleCampaignDynamics,
  ScrollableCampaignList,
} from "@/components/ScrollableCampaigns";

const Map = dynamic(() => import("@/components/Map"));

function Campaigns() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-primary flex-shrink-0 flex items-center h-[50px]">
        <p className="text-3xl text-white text-center w-full">
          ОПЕРАТИВНО УПРАВЛЕНИЕ КАМПАНИИТЕ
        </p>
      </div>
      <div className="px-4 md:px-10 pb-8 pt-1 flex flex-col flex-grow overflow-hidden">
        <div className="flex-shrink-0 mb-1">
          <ButtonBar />
        </div>

        {/* Main  */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[3fr_5.5fr_1.9fr] gap-3 flex-grow min-h-0">
          <div className="flex flex-col gap-2 min-h-0">
            <div className="grid grid-cols-[1fr_2fr] gap-2 items-stretch flex-shrink-0">
              <div className="p-3 md:p-5 shadow-lg shadow-gray-400 border-2 border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-white">
                <span className="text-base md:text-lg font-medium leading-tight text-gray-400 mb-1">
                  КАМЕРА
                </span>
                <Image
                  src="/images/campaigns/icon8.svg"
                  alt="Camera icon"
                  width={50}
                  height={50}
                />
              </div>
              <div className="p-2 shadow-lg shadow-gray-400 border-2 border-primary rounded-2xl flex flex-col justify-around bg-white">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/campaigns/icon9.svg"
                    alt="Active campaigns icon"
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <span className="text-sm md:text-base font-bold leading-tight text-primary text-center flex-grow">
                    АКТИВНИ КАМПАНИИ
                  </span>
                  <span className="text-2xl md:text-4xl font-bold leading-tight text-primary">
                    5
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/campaigns/icon10.svg"
                    alt="Archive campaigns icon"
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <span className="text-sm md:text-base font-bold leading-tight text-primary text-center flex-grow">
                    АРХИВ КАМПАНИИ
                  </span>
                  <span className="text-2xl md:text-4xl font-bold leading-tight text-primary">
                    555
                  </span>
                </div>
              </div>
            </div>
            <ScrollableGridContainer
              title="АКТИВНИ КАМПАНИИ"
              items={sampleCampaigns}
              color="green"
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
            />
            <ScrollableGridContainer
              title="ПРЕДСТОЯЩИ КАМПАНИИ"
              items={sampleCampaigns}
              color="orange"
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
            />
            <ScrollableGridContainer
              title="ЗАВЪРШЕНИ КАМПАНИИ"
              items={sampleCampaigns}
              color="blue"
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
            />
          </div>

          <div className="flex flex-col min-h-0 rounded-2xl overflow-hidden shadow-lg">
            <Map className="flex-grow w-full h-full" />
          </div>

          <div className="flex flex-col min-h-0">
            <ScrollableCampaignList
              title="ДИНАМИКА НА АКТИВНИТЕ КАМПАНИИ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
              number="first"
            />
            <ScrollableCampaignList
              title="ПРЕДПОЧИТАНИ СПОНСОРИ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
            />
            <ScrollableCampaignList
              title="ТОП 10 СТАРТЕР МЕРОПРИЯТИЯ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="flex-grow min-h-0"
              number="last"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
