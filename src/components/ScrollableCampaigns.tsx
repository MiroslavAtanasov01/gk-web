"use client";

import React from "react";
import Image from "next/image";

type IndicatorType = "up" | "down" | "neutral";

interface CampaignItem {
  id: string | number;
  index: number;
  imageUrl: string;
  name: string;
  primaryValue: number;
  indicatorType: IndicatorType;
  secondaryValue: number;
}

interface ScrollableCampaignListProps {
  title: string;
  items: CampaignItem[];
  containerHeightClass?: string;
  className?: string;
  number?: string;
  icon: string;
}

const ScrollableCampaignList: React.FC<ScrollableCampaignListProps> = ({
  title,
  items,
  containerHeightClass,
  className,
  number,
  icon,
}) => {
  const IndicatorArrow = (type: IndicatorType) => {
    switch (type) {
      case "up":
        return "/images/campaigns/arrow-up.svg";
      case "down":
        return "/images/campaigns/arrow-down.svg";
      case "neutral":
        return "/images/campaigns/arrow-neutral.svg";
      default:
        return null;
    }
  };

  const getIndicatorTextColor = (type: IndicatorType): string => {
    switch (type) {
      case "up":
        return "text-[#E30613]";
      case "down":
        return "text-[#7FBB48]";
      case "neutral":
        return "text-gray-500";
      default:
        return "text-gray-700";
    }
  };

  const roundedT = number === "first" ? "rounded-t-2xl" : "";
  const roundedB = number === "last" ? "rounded-b-2xl" : "";

  return (
    <div
      className={`flex flex-col ${className} ${roundedT} ${roundedB} border-primary border-2`}
    >
      <div
        className={`bg-primary flex items-center space-x-3 px-3 py-1 text-white ${roundedT}`}
      >
        <Image src={icon} alt="Gauge Icon" width={60} height={60} />
        <h3>{title}</h3>
      </div>
      <div
        className={`custom-scrollbar overflow-y-auto pr-2 ${containerHeightClass} ${roundedB} border-x-8 border-y-5 border-white`}
      >
        <ul className="grid gap-1">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center space-x-3 transition duration-150 ease-in-out hover:bg-gray-50"
            >
              <span className="w-4 text-center font-semibold text-gray-950">
                {item.index}
              </span>
              <div className="flex-shrink-0 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`${item.name}`}
                  width={40}
                  height={30}
                  className="object-cover"
                />
              </div>
              <span className="flex-grow text-gray-950">{item.name}</span>
              <span className="text-right text-lg font-semibold text-gray-950">
                {item.primaryValue}
              </span>
              <div
                className={`flex items-center justify-end space-x-1 ${getIndicatorTextColor(item.indicatorType)}`}
              >
                <Image
                  src={IndicatorArrow(item.indicatorType) || ""}
                  alt={"arrow"}
                  width={item.indicatorType === "neutral" ? 20 : 15}
                  height={item.indicatorType === "neutral" ? 15 : 20}
                />
                <span className="text-base">
                  {item.indicatorType === "neutral"
                    ? "--"
                    : item.secondaryValue}
                </span>
              </div>
            </li>
          ))}
        </ul>
        {items.length === 0 && (
          <p className="py-6 text-center text-gray-500">
            Няма активни кампании.
          </p>
        )}
      </div>
    </div>
  );
};

export const sampleCampaignDynamics: CampaignItem[] = [
  {
    id: "c005",
    index: 1,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 1",
    primaryValue: 76,
    indicatorType: "up",
    secondaryValue: 10,
  },
  {
    id: "c5",
    index: 2,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 2",
    primaryValue: 32,
    indicatorType: "down",
    secondaryValue: 20,
  },
  {
    id: "c_generic_1",
    index: 3,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 3",
    primaryValue: 21,
    indicatorType: "neutral",
    secondaryValue: 0,
  },
  {
    id: "c_generic_2",
    index: 4,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 4",
    primaryValue: 17,
    indicatorType: "down",
    secondaryValue: 20,
  },
  {
    id: "c106",
    index: 5,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 5",
    primaryValue: 7,
    indicatorType: "up",
    secondaryValue: 10,
  },
  {
    id: "c107",
    index: 6,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 6",
    primaryValue: 55,
    indicatorType: "neutral",
    secondaryValue: 0,
  },
  {
    id: "c108",
    index: 7,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 7",
    primaryValue: 42,
    indicatorType: "up",
    secondaryValue: 5,
  },
];

export { ScrollableCampaignList };
