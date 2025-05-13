"use client";

import Header from "@/components/auto-reports/Header";
import { formatDateToDayKey, parseDateString } from "@/utils/getDateTime";
import { sampleCampaigns } from "@/utils/mockData";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const StarIcon = (color: string) => (
  <Image src={`/images/${color}-star.svg`} alt="star" width={30} height={30} />
);

const CampaignsAndCyclesPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2020, 2, 1)); // March 2020
  const [campaignEvents, setCampaignEvents] = useState<
    Record<string, { start?: boolean; end?: boolean }>
  >({});

  useEffect(() => {
    const events: Record<string, { start?: boolean; end?: boolean }> = {};
    sampleCampaigns.forEach((campaign) => {
      const startDate = parseDateString(campaign.startDate);
      const endDate = parseDateString(campaign.endDate);
      if (startDate) {
        const key = formatDateToDayKey(startDate);
        events[key] = { ...events[key], start: true };
      }
      if (endDate) {
        const key = formatDateToDayKey(endDate);
        events[key] = { ...events[key], end: true };
      }
    });
    setCampaignEvents(events);
  }, []);

  const changeMonth = (offset: number) => {
    setCurrentDate((prevDate) => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + offset);
      return newDate;
    });
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust so Monday is 0 and Sunday is 6
  };

  const monthNames = [
    "ЯНУАРИ",
    "ФЕВРУАРИ",
    "МАРТ",
    "АПРИЛ",
    "МАЙ",
    "ЮНИ",
    "ЮЛИ",
    "АВГУСТ",
    "СЕПТЕМВРИ",
    "ОКТОМВРИ",
    "НОЕМВРИ",
    "ДЕКЕМВРИ",
  ];
  const dayHeaders = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const numDays = getDaysInMonth(year, month);
  const firstDayIndex = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < firstDayIndex; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="p-1"></div>);
  }
  for (let day = 1; day <= numDays; day++) {
    const dateKey = formatDateToDayKey(new Date(year, month, day));
    const event = campaignEvents[dateKey];
    const isToday =
      new Date().toDateString() === new Date(year, month, day).toDateString();

    calendarDays.push(
      <div
        key={day}
        className={`relative flex items-center justify-center p-1 ${isToday ? "bg-blue-100" : ""}`}
      >
        <span className="z-10 text-3xl">{day}</span>

        <div className="absolute right-1 flex">
          {event?.start && StarIcon("red")}
          {event?.end && StarIcon("green")}
        </div>
      </div>,
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Кампании и Цикли" />
      {/* Main Content Area */}
      <main className="grid flex-grow grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-[1fr_1.5fr]">
        {/* Left Column: Active Campaigns */}
        <section className="border-primary flex flex-col">
          <h2 className="text-primary mb-3 text-center text-2xl font-semibold">
            АКТИВНИ КАМПАНИИ
          </h2>
          <div className="border-primary ml-25 rounded-xl border-2 py-3 pr-3">
            <div className="custom-scrollbar max-h-[calc(100vh-270px)] flex-grow space-y-3 overflow-y-auto py-5">
              {sampleCampaigns.map((campaign) => (
                <div key={campaign.id}>
                  <p className="text-primary text-center text-lg font-semibold">
                    {campaign.code}
                  </p>
                  <p className="text-primary mb-2 text-center text-lg font-semibold">
                    {campaign.name}
                  </p>
                  <div className="bg-gray-bg py-5">
                    <div className="mb-3 flex items-center justify-between px-15">
                      <div className="flex items-center">
                        {StarIcon("red")}
                        <span className="ml-3 text-xl">Начало</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-3 text-xl">Дата</span>
                        <input
                          defaultValue={campaign.startDate}
                          type="date"
                          className="border-secondary rounded-xl border-2 bg-white px-2"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between px-15">
                      <div className="flex items-center">
                        {StarIcon("green")}{" "}
                        <span className="ml-3 text-xl">Край</span>
                      </div>
                      <div className="flex items-center">
                        <span className="mr-3 text-xl">Дата</span>
                        <input
                          defaultValue={campaign.endDate}
                          type="date"
                          className="border-secondary rounded-xl border-2 bg-white px-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Right Column: Calendar */}
        <section className="flex flex-grow flex-col overflow-hidden">
          <h2 className="text-primary mb-3 text-center text-2xl font-semibold">
            ГРАФИК КАМПАНИИ
          </h2>
          {/* Calendar Header */}
          <div className="bg-primary flex h-25 items-center justify-between rounded-t-xl px-1 py-2 text-white">
            <button onClick={() => changeMonth(-1)} className="ml-15 p-2">
              <Image
                src="/images/left-arrow.svg"
                alt="next"
                width={25}
                height={40}
              />
            </button>
            <h3 className="text-5xl">
              {monthNames[month]}, {year}
            </h3>
            <button onClick={() => changeMonth(1)} className="mr-15 p-2">
              <Image
                src="/images/right-arrow.svg"
                alt="next"
                width={25}
                height={40}
              />
            </button>
          </div>
          {/* Calendar Grid */}
          <div className="border-primary grid flex-grow grid-cols-7 rounded-b-xl border-2">
            {dayHeaders.map((header) => (
              <div
                key={header}
                className="text-secondary py-5 text-center text-4xl font-bold"
              >
                {header}
              </div>
            ))}
            {calendarDays}
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-2 px-6 pb-3 md:justify-between">
        <div></div>
        <button className="hover:bg-secondary mr-10 flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
          <Image
            src="/images/campaigns/icon3.svg"
            alt={"icon"}
            width={35}
            height={35}
          />
          <span>Архив кампании</span>
        </button>

        <div className="flex items-center space-x-2">
          <div className="mr-10 flex items-center justify-center space-x-10 text-xl">
            <div className="flex items-center">
              {StarIcon("red")}
              <span className="ml-1">Начало</span>
            </div>
            <div className="flex items-center">
              {StarIcon("green")} <span className="ml-1">Край</span>
            </div>
          </div>
          <button className="hover:bg-secondary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
            <Image src="/images/keep.svg" alt="next" width={30} height={30} />
            <span>Запази</span>
          </button>
          <button className="hover:bg-secondary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
            <span>Продължи</span>
            <Image
              src="/images/right-arrow.svg"
              alt="next"
              width={15}
              height={30}
            />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CampaignsAndCyclesPage;
