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
}

const IndicatorArrow: React.FC<{ type: IndicatorType }> = ({ type }) => {
  switch (type) {
    case "up":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-red-500"
        >
          <path
            fillRule="evenodd"
            d="M10 17a.75.75 0 01-.75-.75V5.612L5.03 9.83a.75.75 0 01-1.06-1.06l5.5-5.5a.75.75 0 011.06 0l5.5 5.5a.75.75 0 11-1.06 1.06L10.75 5.612V16.25a.75.75 0 01-.75.75z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "down":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-green-500"
        >
          <path
            fillRule="evenodd"
            d="M10 3a.75.75 0 01.75.75v10.638l4.22-4.22a.75.75 0 111.06 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-5.5-5.5a.75.75 0 111.06-1.06l4.22 4.22V3.75A.75.75 0 0110 3z"
            clipRule="evenodd"
          />
        </svg>
      );
    case "neutral":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-gray-500"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.17 5.03a.75.75 0 011.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06L14.388 10.75H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          />
        </svg>
      );
    default:
      return null;
  }
};

const ScrollableCampaignList: React.FC<ScrollableCampaignListProps> = ({
  title,
  items,
  containerHeightClass = "h-50",
}) => {
  const getIndicatorTextColor = (type: IndicatorType): string => {
    switch (type) {
      case "up":
        return "text-red-500";
      case "down":
        return "text-green-500";
      case "neutral":
        return "text-gray-500";
      default:
        return "text-gray-700";
    }
  };

  return (
    // Outer container with background, padding, rounded corners, shadow
    <div className="">
      {/* Header Section */}
      <div className="flex items-center bg-blue-700 text-white p-3 rounded-t-lg space-x-3">
        {/* Placeholder for Gauge Icon */}
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700">
          {/* Replace with your actual gauge icon (SVG, Font Awesome, etc.) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
        <h3 className="font-semibold text-lg uppercase tracking-wide">
          {title}
        </h3>
      </div>
      <div
        className={`overflow-y-auto ${containerHeightClass} bg-white rounded-b-lg`}
      >
        {/* List Container - using ul for semantic list */}
        <ul className="divide-y divide-gray-200">
          {" "}
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center p-3 space-x-3 hover:bg-gray-50 transition duration-150 ease-in-out"
            >
              <span className="font-bold text-gray-700 w-6 text-center">
                {item.index}
              </span>
              <div className="flex-shrink-0 w-12 h-12 rounded overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={`Thumbnail for ${item.name}`}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Campaign Name */}
              <span className="flex-grow font-medium text-gray-800 truncate mr-2">
                {item.name}
              </span>{" "}
              {/* Allow shrinking/growing, truncate long names */}
              {/* Primary Value */}
              <span className="font-bold text-gray-900 w-10 text-right">
                {item.primaryValue}
              </span>
              {/* Indicator and Secondary Value */}
              <div
                className={`flex items-center space-x-1 w-16 justify-end ${getIndicatorTextColor(item.indicatorType)}`}
              >
                <IndicatorArrow type={item.indicatorType} />
                <span className="font-semibold">{item.secondaryValue}</span>
              </div>
            </li>
          ))}
        </ul>
        {/* Add a message if there are no items */}
        {items.length === 0 && (
          <p className="text-center text-gray-500 py-6">
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
    name: "Кампания 005",
    primaryValue: 76,
    indicatorType: "up",
    secondaryValue: 10,
  },
  {
    id: "c5",
    index: 2,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 5",
    primaryValue: 32,
    indicatorType: "down",
    secondaryValue: 20,
  },
  {
    id: "c_generic_1",
    index: 3,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания",
    primaryValue: 21,
    indicatorType: "neutral",
    secondaryValue: 0,
  },
  {
    id: "c_generic_2",
    index: 4,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания",
    primaryValue: 17,
    indicatorType: "down",
    secondaryValue: 20,
  },
  {
    id: "c106",
    index: 5,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 106",
    primaryValue: 7,
    indicatorType: "up",
    secondaryValue: 10,
  },
  {
    id: "c107",
    index: 6,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 107",
    primaryValue: 55,
    indicatorType: "neutral",
    secondaryValue: 0,
  },
  {
    id: "c108",
    index: 7,
    imageUrl: "/images/campaigns/image.png",
    name: "Кампания 108",
    primaryValue: 42,
    indicatorType: "up",
    secondaryValue: 5,
  },
];

export { ScrollableCampaignList };
