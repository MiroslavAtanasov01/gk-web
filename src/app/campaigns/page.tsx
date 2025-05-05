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
    <div>
      {/* Header */}
      <div className="bg-primary flex items-center h-[50px]">
        <p className=" text-3xl text-white text-center w-full">
          ОПЕРАТИВНО УПРАВЛЕНИЕ КАМПАНИИТЕ
        </p>
      </div>
      <div className="px-10">
        <ButtonBar />

        {/* Main */}
        <div className="grid grid-cols-[3.33fr_6fr_2fr] gap-1 lg:gap-3 items-center">
          <div className="grid gap-2">
            <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
              <div className="p-5 shadow-lg shadow-gray-400 border-2 border-gray-300 rounded-2xl flex flex-col items-center">
                <span className="text-lg font-medium leading-tight text-gray-300">
                  КАМЕРА
                </span>
                <Image
                  src="/images/campaigns/icon8.svg"
                  alt={`icon`}
                  width={60}
                  height={60}
                />
              </div>
              <div className="p-2 shadow-lg shadow-gray-400 border-2 border-[var(--color-primary)] rounded-2xl">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/campaigns/icon9.svg"
                    alt={`icon`}
                    width={60}
                    height={60}
                  />
                  <span className="text-lg font-bold leading-tight text-[var(--color-primary)]">
                    АКТИВНИ КАМПАНИИ
                  </span>
                  <span className="text-4xl font-bold leading-tight text-[var(--color-primary)]">
                    5
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/campaigns/icon10.svg"
                    alt={`icon`}
                    width={60}
                    height={60}
                  />
                  <span className="font-bold leading-tight text-[var(--color-primary)]">
                    АРХИВ КАМПАНИИ
                  </span>
                  <span className="text-4xl font-bold leading-tight text-[var(--color-primary)]">
                    555
                  </span>
                </div>
              </div>
            </div>
            <div className="grid gap-2">
              <ScrollableGridContainer
                title="АКТИВНИ КАМПАНИИ"
                items={sampleCampaigns}
              />
              <ScrollableGridContainer
                title="ПРЕДСТОЯЩИ КАМПАНИИ"
                items={sampleCampaigns}
              />
              <ScrollableGridContainer
                title="ЗАВЪРШЕНИ КАМПАНИИ"
                items={sampleCampaigns}
              />
            </div>
          </div>
          <div className="">
            <Map />
          </div>
          <div className="">
            <ScrollableCampaignList
              title="ДИНАМИКА НА АКТИВНИТЕ КАМПАНИИ"
              items={sampleCampaignDynamics}
            />
            <ScrollableCampaignList
              title="ПРЕДПОЧИТАНИ СПОНСОРИ"
              items={sampleCampaignDynamics}
            />
            <ScrollableCampaignList
              title="ТОП 10 СТАРТЕР МЕРОПРИЯТИЯ"
              items={sampleCampaignDynamics}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
