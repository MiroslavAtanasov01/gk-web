"use client";

import Header from "@/components/auto-reports/Header";
import { formatDateToDayKey, parseDateString } from "@/utils/getDateTime";
import { sampleCampaigns } from "@/utils/mockData";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Calendar from "@/components/Calendar";
import Link from "next/link";

const StarIcon = (color: string) => (
  <Image src={`/images/${color}-star.svg`} alt="star" width={30} height={30} />
);

const CampaignsAndCyclesPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2020, 2, 1)); // March 2020
  const [campaignEvents, setCampaignEvents] = useState<
    Record<string, { start?: boolean; end?: boolean }>
  >({});
  const [searchTerm, setSearchTerm] = useState("");

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
      <main className="grid flex-grow grid-cols-1 gap-6 p-4 md:p-6 lg:grid-cols-[1fr_1.5fr]">
        {/* Left Column: Active Campaigns */}
        <section className="border-primary flex flex-grow flex-col overflow-hidden">
          <h2 className="text-primary mb-3 ml-25 text-center text-2xl font-semibold">
            НАСТРОЙКИ
          </h2>
          <div className="border-primary ml-25 flex flex-grow rounded-xl border-2 py-3">
            <div className="max-h-[calc(100vh-270px)] flex-grow space-y-3 py-5">
              <div className="mb-7">
                <p className="text-primary mb-3 text-center text-xl font-semibold">
                  Бонус Подаръци
                </p>
                <div className="bg-gray-bg flex justify-center py-5">
                  <div className="items-center">
                    <div className="flex items-center">
                      <span className="text-xl">На всеки</span>
                      <div className="relative inline-block">
                        <select
                          className="border-secondary mx-3 appearance-none rounded-xl border-2 bg-white px-2 pr-10 text-xl"
                          defaultValue=""
                        >
                          <option value="5">5</option>
                          <option value="50">50</option>
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                          <Image
                            src="/images/down-arrow.svg"
                            alt="arrow"
                            width={20}
                            height={15}
                          />
                        </span>
                      </div>
                      <span className="mr-3 text-xl">отговор</span>
                    </div>
                    <span className="flex justify-center text-xl">0-50</span>
                  </div>
                </div>
              </div>
              <div className="mb-7">
                <p className="text-primary mb-3 text-center text-xl font-semibold">
                  Бонус Подаръци
                </p>
                <div className="bg-gray-bg flex justify-center py-5">
                  <div className="items-center">
                    <div className="flex items-center">
                      <span className="text-xl">На всеки</span>
                      <div className="relative inline-block">
                        <select
                          className="border-secondary mx-3 appearance-none rounded-xl border-2 bg-white px-2 pr-10 text-xl"
                          defaultValue=""
                        >
                          <option value="5">5</option>
                          <option value="50">50</option>
                        </select>
                        <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                          <Image
                            src="/images/down-arrow.svg"
                            alt="arrow"
                            width={20}
                            height={15}
                          />
                        </span>
                      </div>
                      <span className="mr-3 text-xl">отговор</span>
                    </div>
                    <span className="flex justify-center text-xl">0-50</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-primary mb-3 text-center text-xl font-semibold">
                  Линк към площадката за благодарности
                </p>
                <div className="bg-gray-bg flex justify-center py-10">
                  <Link
                    href="https://varnahub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-gray-950 underline hover:text-blue-800"
                  >
                    www.varnahub.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Calendar */}
        <section className="flex flex-grow flex-col">
          <div className="flex flex-row items-center justify-between px-15">
            <h2 className="text-primary mb-3 text-center text-2xl font-semibold">
              ПЛОЩАДКА ЗА БЛАГОДАРНОСТ
            </h2>
            <h2 className="text-primary mb-3 text-center text-2xl font-semibold">
              ГРАФИК КАМПАНИИ
            </h2>
          </div>
          <div className="grid min-h-0 flex-grow grid-cols-[1fr_2fr]">
            <div className="flex flex-col">
              <div className="border-primary h-full flex-grow rounded-l-xl border-y-2 border-l-2">
                <div className="relative mx-auto mt-5 w-fit">
                  <input
                    type="text"
                    id="searchCampaign"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Търси..."
                    className="border-secondary rounded-2xl border-2 py-1 pr-10 pl-3 text-center sm:text-sm"
                  />
                  <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
                    <Image
                      src="/images/search.svg"
                      alt="search"
                      width={20}
                      height={22}
                    />
                  </span>
                </div>
                <div className="flex flex-row items-center justify-between px-5 py-3">
                  <span className="font-bold">Препоръчваме</span>
                  <span className="text-primary underline">Мероприятия</span>
                  <span className="text-primary underline">Помощ</span>
                </div>
                <Image
                  src="/images/sample.png"
                  alt="sample"
                  width={300}
                  height={200}
                  className="mx-auto mb-3 h-auto max-h-[25vh] object-contain"
                />
                <span className="flex justify-center text-sm font-bold">
                  Мероприятия граждани на квартала
                </span>
                <div className="flex flex-row items-center justify-between px-5 py-3">
                  <div>
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />

                    <span className="flex justify-center text-xs">
                      Мероприятие 1
                    </span>
                  </div>
                  <div>
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />

                    <span className="flex justify-center text-xs">
                      Мероприятие 1
                    </span>
                  </div>
                  <div className="">
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />

                    <span className="flex justify-center text-xs">
                      Мероприятие 1
                    </span>
                  </div>
                </div>
                <span className="flex justify-center text-sm font-bold">
                  Нека ви подкрепим да пазите Вашите права
                </span>
                <div className="flex flex-row items-center justify-between px-5 py-3">
                  <div>
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />
                  </div>
                  <div>
                    <Image
                      src="/images/gift.svg"
                      alt="sample"
                      width={100}
                      height={100}
                      className="h-auto max-h-[12vh] object-contain"
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-between px-10 py-3">
                  <button
                    className="rounded-3xl px-5 py-3 text-white shadow-sm shadow-gray-950"
                    style={{
                      background:
                        "linear-gradient(90deg, #1D71B8 0%, #52A3DB 50%, #1D71B8 100%)",
                    }}
                  >
                    ВЪПРОСИ
                  </button>
                  <button
                    className="rounded-3xl px-5 py-3 text-white shadow-sm shadow-gray-950"
                    style={{
                      background:
                        "linear-gradient(90deg, #1D71B8 0%, #52A3DB 50%, #1D71B8 100%)",
                    }}
                  >
                    ИЗХОД
                  </button>
                </div>
              </div>
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
        <button className="hover:bg-secondary mr-50 flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
          <Image
            src="/images/connect.svg"
            alt={"icon"}
            width={30}
            height={30}
          />
          <span>Провери връзката</span>
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
