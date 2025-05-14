"use client";

import Header from "@/components/auto-reports/Header";
import { formatDateToDayKey, parseDateString } from "@/utils/getDateTime";
import { sampleCampaigns } from "@/utils/mockData";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Calendar from "@/components/Calendar";
import Dropdown from "@/components/Dropdown";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p className="p-10 text-center">Зареждане на картата...</p>,
});

const StarIcon = (color: string) => (
  <Image src={`/images/${color}-star.svg`} alt="star" width={30} height={30} />
);

const CampaignsAndCyclesPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2020, 2, 1)); // March 2020
  const [campaignEvents, setCampaignEvents] = useState<
    Record<string, { start?: boolean; end?: boolean }>
  >({});
  const [selected, setSelected] = useState("");

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

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Кампании и Цикли" />
      {/* Main Content Area */}
      <main className="grid flex-grow grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-[1fr_2fr]">
        {/* Left Column */}
        <section className="border-primary flex flex-grow flex-col overflow-hidden">
          <h2 className="text-primary mb-3 ml-25 text-center text-2xl font-semibold">
            КАМПАНИИ - ИЗВАДКА ПОТРЕБИТЕЛИ
          </h2>
          <div className="border-primary ml-25 flex flex-grow rounded-xl border-2">
            <div className="flex max-h-[calc(100vh-270px)] flex-grow flex-col">
              <div className="bg-primary flex h-25 items-center justify-between rounded-t-lg px-1 py-2 text-white">
                <button
                  onClick={() => console.log("clicked")}
                  className="ml-15 p-2"
                >
                  <Image
                    src="/images/left-arrow.svg"
                    alt="prev"
                    width={25}
                    height={40}
                  />
                </button>
                <div>
                  <p className="text-center text-lg font-semibold">
                    Шифр 001/001 кампания № 001
                  </p>
                  <p className="mb-2 text-center text-lg font-semibold">
                    Дълго наименование на кампанията
                  </p>
                </div>
                <button
                  onClick={() => console.log("clicked")}
                  className="mr-15 p-2"
                >
                  <Image
                    src="/images/right-arrow.svg"
                    alt="next"
                    width={25}
                    height={40}
                  />
                </button>
              </div>
              <div className="bg-gray-bg flex flex-grow flex-col justify-start gap-5 p-5">
                <div className="w-full">
                  <Dropdown
                    label="Локация"
                    value={selected}
                    onChange={setSelected}
                    options={[
                      { value: "5", label: "5" },
                      { value: "50", label: "50" },
                    ]}
                  />
                </div>
                <div className="flex w-full flex-row gap-5">
                  <Dropdown
                    label="Пол"
                    value={selected}
                    onChange={setSelected}
                    options={[
                      { value: "5", label: "5" },
                      { value: "50", label: "50" },
                    ]}
                  />
                  <Dropdown
                    label="Доход"
                    value={selected}
                    onChange={setSelected}
                    options={[
                      { value: "5", label: "5" },
                      { value: "50", label: "50" },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <Dropdown
                    label="Професия"
                    value={selected}
                    onChange={setSelected}
                    options={[
                      { value: "5", label: "5" },
                      { value: "50", label: "50" },
                    ]}
                  />
                </div>
                <div className="w-full">
                  <Dropdown
                    label="Убеждения"
                    value={selected}
                    onChange={setSelected}
                    options={[
                      { value: "5", label: "5" },
                      { value: "50", label: "50" },
                    ]}
                  />
                </div>
              </div>
              <p className="p-5 text-right text-lg font-bold">
                Количество анкети: <span className="text-primary">9000</span>
              </p>
            </div>
          </div>
        </section>

        {/* Right Column */}
        <section className="flex flex-grow flex-col">
          <h2 className="text-primary mb-3 text-center text-2xl font-semibold">
            ГРАФИК КАМПАНИИ
          </h2>
          <div className="grid min-h-0 flex-grow grid-cols-[1fr_2fr]">
            <div className="border-primary flex min-h-0 flex-col overflow-hidden rounded-l-2xl border-y-2 border-l-2">
              <Map className="h-full w-full flex-grow" />
            </div>

            <div className="border-primary flex h-full flex-col rounded-r-xl border-2">
              {/* Calendar */}
              <Calendar
                currentDate={currentDate}
                onMonthChange={changeMonth}
                events={campaignEvents}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-wrap items-center justify-center gap-2 px-6 pb-3 md:justify-between">
        <div></div>
        <button className="hover:bg-secondary mr-40 flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
          <Image
            src="/images/white-star.svg"
            alt={"icon"}
            width={30}
            height={30}
          />
          <span>Активирай кампанията</span>
        </button>
        <div></div>

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
