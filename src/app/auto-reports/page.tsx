"use client";

import React from "react";
import Image from "next/image";
import ResultsDisplay from "@/components/ResultDisplay";
import AutoReportGraphics from "@/components/AutoReportGraphics";

interface CampaignDetails {
  campaignNumber: string;
  date: string;
  themeCount: number;
  questionCount: number;
  duration: string;
  location: string;
  participantCount: number;
}

const AutoReportsPage: React.FC = () => {
  const bulletinCampaignDetails: CampaignDetails = {
    campaignNumber: "505658",
    date: "01.03.2023",
    themeCount: 5,
    questionCount: 50,
    duration: "01.03.23 - 15.03.23",
    location: "Варна, Център",
    participantCount: 3580,
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header className="flex items-center justify-between bg-white px-10 pt-5">
        <div className="flex items-center space-x-2">
          <Image
            src="/back-button.svg"
            alt="next"
            width={65}
            height={65}
            className="mr-10 cursor-pointer"
            onClick={() => window.history.back()}
          />
          <h1 className="text-primary text-5xl font-semibold">Автоотчети</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Image
            src="/next-button.svg"
            alt="next"
            width={65}
            height={65}
            className="mr-10"
          />
          <Image
            src="/images/campaigns/logo.svg"
            alt="logo"
            width={200}
            height={55}
          />
        </div>
      </header>
      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 px-8 pt-8 md:px-8 md:pt-8 lg:grid-cols-3">
        {/* Left Section */}
        <section className="flex flex-col lg:col-span-1">
          <h2 className="text-primary mb-1 text-center text-3xl font-semibold">
            БЮЛЕТИНА НА ПРОВЕДЕНА КАМПАНИЯ
          </h2>
          <p className="text-primary mb-3 text-center text-3xl">
            към дата:{" "}
            <span className="font-semibold text-gray-950">10.03.2023 г.</span>
          </p>
          <div className="mb-4 text-xl">
            <div className="text-secondary mb-1 px-3 py-1">
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Кампания №:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.campaignNumber}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Дата:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.date}
                </p>
              </div>
            </div>
            <div className="text-primary space-y-1 rounded-xl bg-[#D7D8D9] p-3">
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Количество Теми:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.themeCount}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">
                  Количество Въпроси:
                </p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.questionCount}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">
                  Срок на Кампанията:
                </p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.duration}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Локация:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.location}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">
                  Количество участници:
                </p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.participantCount}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Analysis - Spans 2 columns on lg screens */}
        <section className="flex flex-col lg:col-span-2">
          <h2 className="text-primary mb-1 text-center text-3xl font-semibold">
            АНАЛИЗ ЗА ИЗМЕНЕНИЕТО НА ОТГОВОРИТЕ ЗА 2 КОНТРОЛИ
          </h2>
          <p className="text-primary mb-3 text-center text-3xl">
            към дата:{" "}
            <span className="font-semibold text-gray-950">10.03.2023 г.</span>
          </p>

          <div className="flex flex-row space-y-1 text-xl">
            <div className="text-secondary mb-1 px-3 py-1">
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Кампания №:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.campaignNumber}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Дата:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.date}
                </p>
              </div>
            </div>
            <div className="text-secondary mb-1 px-3 py-1">
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Кампания №:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.campaignNumber}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Дата:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.date}
                </p>
              </div>
            </div>
            <div className="text-secondary mb-1 px-3 py-1">
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Кампания №:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.campaignNumber}
                </p>
              </div>
              <div className="grid grid-cols-2">
                <p className="pr-2 text-left font-medium">Дата:</p>
                <p className="text-left text-gray-950">
                  {bulletinCampaignDetails.date}
                </p>
              </div>
            </div>
          </div>
          <div className="text-primary space-y-1 rounded-xl bg-[#D7D8D9] p-3 text-xl">
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Количество Теми:</p>
              <p className="text-left text-gray-950">
                {bulletinCampaignDetails.themeCount}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
              <p className="text-left text-gray-950">
                {bulletinCampaignDetails.questionCount}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Срок на Кампанията:</p>
              <p className="text-left text-gray-950">
                {bulletinCampaignDetails.duration}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Локация:</p>
              <p className="text-left text-gray-950">
                {bulletinCampaignDetails.location}
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">
                Количество участници:
              </p>
              <p className="text-left text-gray-950">
                {bulletinCampaignDetails.participantCount}
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Results Area */}
      <div>
        <div className="mb-1 grid flex-grow grid-cols-1 gap-3 md:grid-cols-3">
          <h3 className="text-primary mb-1 text-center text-xl font-semibold">
            РЕЗУЛТАТИ
          </h3>
          <h3 className="text-primary mb-1 text-center text-xl font-semibold">
            РЕЗУЛТАТИ КОНТРОЛА 1
          </h3>
          <h3 className="text-primary mb-1 text-center text-xl font-semibold">
            РЕЗУЛТАТИ КОНТРОЛА 2
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-6 px-8 text-xl md:px-8 lg:grid-cols-3">
          <div className="text-primary space-y-1 rounded-t-xl bg-[#D7D8D9] p-3">
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Теми:</p>
              <p className="text-left text-gray-950">
                Дълго наименование на тема
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
              <p className="text-left text-gray-950">50</p>
            </div>
          </div>
          <div className="text-primary space-y-1 rounded-t-xl bg-[#D7D8D9] p-3">
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Теми:</p>
              <p className="text-left text-gray-950">
                Дълго наименование на тема
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
              <p className="text-left text-gray-950">50</p>
            </div>
          </div>
          <div className="text-primary space-y-1 rounded-t-xl bg-[#D7D8D9] p-3">
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Теми:</p>
              <p className="text-left text-gray-950">
                Дълго наименование на тема
              </p>
            </div>
            <div className="grid grid-cols-2">
              <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
              <p className="text-left text-gray-950">50</p>
            </div>
          </div>
        </div>
        <ResultsDisplay />
        <AutoReportGraphics />
      </div>
    </div>
  );
};

export default AutoReportsPage;
