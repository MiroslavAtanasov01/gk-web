"use client";
import React from "react";
import Image from "next/image";
import { getFormattedDateTime } from "@/utils/getDateTime";
import { useRouter } from "next/navigation";

interface ButtonInfo {
  id: number;
  label: string;
  iconSrc: string;
  href?: string;
  large?: boolean;
}

const buttonsData: ButtonInfo[] = [
  {
    id: 1,
    label: "АВТОИЧНИ ОТЧЕТИ",
    iconSrc: "/images/campaigns/icon1.svg",
  },
  {
    id: 2,
    label: "УПРАВЛЕНИЕ КАМПАНИИ",
    iconSrc: "/images/campaigns/icon2.svg",
  },
  {
    id: 3,
    label: "АРХИВ КАМПАНИИ",
    iconSrc: "/images/campaigns/icon3.svg",
  },
  {
    id: 4,
    label: "ПРОГНОЗИ КАМПАНИИ",
    iconSrc: "/images/campaigns/icon4.svg",
  },
  {
    id: 5,
    label: "БЛАГОДАРНОСТ КАМПАНИИ",
    iconSrc: "/images/campaigns/icon5.svg",
  },
  {
    id: 6,
    label: "ОЦЕНКА НА СТАРТЕР МЕРОПРИЯТИЯ",
    iconSrc: "/images/campaigns/icon6.svg",
    large: true,
  },
  {
    id: 7,
    label: "НАСТРОЙКИ ОУК",
    iconSrc: "/images/campaigns/icon7.svg",
  },
];

const buttonsLinks: { [key: string]: string } = {
  "АВТОИЧНИ ОТЧЕТИ": "/auto-reports",
  "УПРАВЛЕНИЕ КАМПАНИИ": "/campaign-management",
  "АРХИВ КАМПАНИИ": "/archive",
  "ПРОГНОЗИ КАМПАНИИ": "/campaign-forecast",
  "БЛАГОДАРНОСТ КАМПАНИИ": "/campaign-thanks",
  "ОЦЕНКА НА СТАРТЕР МЕРОПРИЯТИЯ": "/event-starter-evaluation",
  "НАСТРОЙКИ ОУК": "/settings",
};

const ButtonBar: React.FC = () => {
  const { time, date } = getFormattedDateTime();
  const router = useRouter();

  return (
    <div className="flex items-stretch justify-between gap-1 bg-gray-100 p-1 py-2">
      {/* Logo Section */}
      <div className="flex cursor-pointer items-center justify-center rounded-2xl border-2 border-primary bg-white px-5 py-5 shadow-lg shadow-gray-400 transition duration-150 ease-in-out hover:bg-gray-100">
        <Image
          src="/images/campaigns/logo.svg"
          alt="ГРАЖДАНИ на квартала Logo"
          onClick={() => router.push("/")}
          width={300}
          height={80}
        />
      </div>
      {/* Buttons Section */}
      <div className="flex flex-grow items-stretch justify-center gap-2 px-1">
        {buttonsData.map((button) => (
          <button
            key={button.id}
            style={{ width: button.large ? "200px" : "100px" }}
            className="flex flex-grow cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-secondary bg-[radial-gradient(circle,#74ACDA,_#25509A)] px-3 py-2 text-center text-white transition duration-150 ease-in-out hover:opacity-80"
            onClick={() => {
              router.push(buttonsLinks[button.label]);
            }}
          >
            <span className="leading-tight font-medium xl:text-sm 2xl:text-lg">
              {button.label}
            </span>
            <Image
              src={button.iconSrc}
              alt={`${button.label} icon`}
              width={60}
              height={60}
            />
          </button>
        ))}
      </div>
      {/* Date/Time Section */}
      <div className="flex min-w-[100px] flex-col items-center justify-center rounded-xl border-2 border-primary bg-white px-4 py-2 text-primary">
        <span className="text-3xl font-bold">{time}</span>
        <span className="text-lg">{date}</span>
      </div>
    </div>
  );
};

export default ButtonBar;
