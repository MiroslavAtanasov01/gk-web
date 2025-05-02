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

const ButtonBar: React.FC = () => {
  const { time, date } = getFormattedDateTime();
  const router = useRouter();

  return (
    <div className="flex items-stretch justify-between bg-gray-100 p-1 gap-1 py-2">
      {/* Logo Section */}
      <div className="flex items-center justify-center bg-white cursor-pointer border-2 border-[var(--color-primary)] hover:bg-gray-100 rounded-2xl px-5 py-5 shadow-lg shadow-gray-400 transition duration-150 ease-in-out">
        <Image
          src="/images/campaigns/logo.svg"
          alt="ГРАЖДАНИ на квартала Logo"
          onClick={() => router.push("/")}
          width={300}
          height={80}
        />
      </div>
      {/* Buttons Section */}
      <div className="flex-grow flex items-stretch justify-center gap-2 px-1 ">
        {buttonsData.map((button) => (
          <button
            key={button.id}
            style={{ width: button.large ? "200px" : "100px" }}
            className="gap-2 flex flex-col items-center justify-center border-2 border-[var(--color-secondary)] bg-[radial-gradient(circle,#74ACDA,_#25509A)] text-white rounded-xl px-3 py-2 hover:opacity-80 transition duration-150 ease-in-out text-center flex-grow cursor-pointer"
            onClick={() => {
              console.log(`${button.label} clicked`);
            }}
          >
            <span className="text-lg font-medium leading-tight">
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
      <div className="flex flex-col items-center justify-center bg-white border-2 border-[var(--color-primary)] rounded-xl px-4 py-2 text-[var(--color-primary)] min-w-[100px]">
        <span className="text-3xl font-bold">{time}</span>
        <span className="text-lg">{date}</span>
      </div>
    </div>
  );
};

export default ButtonBar;
