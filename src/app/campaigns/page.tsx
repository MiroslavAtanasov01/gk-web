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

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p className="p-10 text-center">Зареждане на картата...</p>,
});

function Campaigns() {
  return (
    <div className="flex h-screen flex-col">
      <div className="bg-primary flex h-[50px] flex-shrink-0 items-center">
        <p className="w-full text-center text-3xl text-white">
          ОПЕРАТИВНО УПРАВЛЕНИЕ КАМПАНИИТЕ
        </p>
      </div>
      <div className="flex flex-grow flex-col overflow-hidden px-4 pt-1 pb-8 md:px-10">
        <div className="mb-1 flex-shrink-0">
          <ButtonBar />
        </div>

        {/* Main  */}
        <div className="grid min-h-0 flex-grow grid-cols-1 gap-3 lg:grid-cols-[1fr_2fr_1fr] xl:grid-cols-[3fr_5.5fr_1.9fr]">
          <div className="flex min-h-0 flex-col gap-2">
            <div className="grid flex-shrink-0 grid-cols-[1fr_2fr] items-stretch gap-2">
              <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-gray-300 bg-white p-3 shadow-lg shadow-gray-400 md:p-5">
                <span className="mb-1 text-base leading-tight font-medium text-gray-400 md:text-lg">
                  КАМЕРА
                </span>
                <Image
                  src="/images/campaigns/icon8.svg"
                  alt="Camera icon"
                  width={50}
                  height={50}
                />
              </div>
              <div className="border-primary flex flex-col justify-around rounded-2xl border-2 bg-white p-2 shadow-lg shadow-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <Image
                    src="/images/campaigns/icon9.svg"
                    alt="Active campaigns icon"
                    width={40}
                    height={40}
                    className="flex-shrink-0"
                  />
                  <span className="text-primary flex-grow text-center text-sm leading-tight font-bold md:text-base">
                    АКТИВНИ КАМПАНИИ
                  </span>
                  <span className="text-primary text-2xl leading-tight font-bold md:text-4xl">
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
                  <span className="text-primary flex-grow text-center text-sm leading-tight font-bold md:text-base">
                    АРХИВ КАМПАНИИ
                  </span>
                  <span className="text-primary text-2xl leading-tight font-bold md:text-4xl">
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
              className="min-h-0 flex-grow"
            />
            <ScrollableGridContainer
              title="ПРЕДСТОЯЩИ КАМПАНИИ"
              items={sampleCampaigns}
              color="orange"
              containerHeightClass="flex-grow min-h-0"
              className="min-h-0 flex-grow"
            />
            <ScrollableGridContainer
              title="ЗАВЪРШЕНИ КАМПАНИИ"
              items={sampleCampaigns}
              color="blue"
              containerHeightClass="flex-grow min-h-0"
              className="min-h-0 flex-grow"
            />
          </div>

          <div className="flex min-h-0 flex-col overflow-hidden rounded-2xl">
            <Map className="h-full w-full flex-grow" />
          </div>

          <div className="flex min-h-0 flex-col">
            <ScrollableCampaignList
              title="ДИНАМИКА НА АКТИВНИТЕ КАМПАНИИ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="min-h-0 flex-grow"
              number="first"
              icon="/images/campaigns/side-icon1.svg"
            />
            <ScrollableCampaignList
              title="ПРЕДПОЧИТАНИ СПОНСОРИ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="min-h-0 flex-grow"
              icon="/images/campaigns/side-icon2.svg"
            />
            <ScrollableCampaignList
              title="ТОП 10 СТАРТЕР МЕРОПРИЯТИЯ"
              items={sampleCampaignDynamics}
              containerHeightClass="flex-grow min-h-0"
              className="min-h-0 flex-grow"
              number="last"
              icon="/images/campaigns/side-icon3.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Campaigns;
