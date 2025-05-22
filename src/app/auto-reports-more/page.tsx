"use client";

import React from "react";
import ResultsDisplay from "@/components/auto-reports/ResultDisplay";
import Header from "@/components/auto-reports/Header";
import SectionHeader from "@/components/auto-reports/SectionHeader";
import CampaignDateAndNumber from "@/components/auto-reports/CampaignDateAndNumber";
import CampaignInfo from "@/components/auto-reports/CampaignInfo";
import ResultsHeader from "@/components/auto-reports/ResultsHeader";
import ResultsSectionHeader from "@/components/auto-reports/ResultsSectionHeader";
import LineChart from "@/components/charts/LineChart";

export interface CampaignDetails {
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
      <Header title="Автоотчети" />
      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 px-8 pt-8 md:px-8 md:pt-8 lg:grid-cols-3">
        {/* Left Section */}
        <section className="flex flex-col lg:col-span-2">
          <SectionHeader
            title="АНАЛИЗ ЗА ИЗМЕНЕНИЕТО НА ОТГОВОРИТЕ ЗА 2 КОНТРОЛИ"
            date="10.03.2023"
          />
          <div className="flex flex-row space-y-1 text-xl">
            <CampaignDateAndNumber
              number={bulletinCampaignDetails.campaignNumber}
              date={bulletinCampaignDetails.date}
            />
            <CampaignDateAndNumber
              number={bulletinCampaignDetails.campaignNumber}
              date={bulletinCampaignDetails.date}
            />
            <CampaignDateAndNumber
              number={bulletinCampaignDetails.campaignNumber}
              date={bulletinCampaignDetails.date}
            />
          </div>
          <CampaignInfo bulletinCampaignDetails={bulletinCampaignDetails} />
        </section>

        {/* Right Section */}
        <section className="flex flex-col justify-end lg:col-span-1">
          <p className="text-primary mb-3 text-xl font-semibold">
            ИЗОБРАЖЕНИЕ В ГРАФИКА/ПИТА - ОТНОСИТЕЛНО ТЕГЛО
          </p>
          <div className="grid grid-cols-[2fr_1fr] items-center gap-4 rounded-xl bg-[#D7D8D9] p-4">
            <div className="h-[200px] w-full">
              <LineChart />
            </div>
            <div className="space-y-1">
              <p className="text-[#7FBB48]">Контрола 1</p>
              <p className="text-[#E30613]">Контрола</p>
            </div>
          </div>
        </section>
      </div>
      {/* Results Area */}
      <div className="mt-5">
        <ResultsHeader />
        <div className="grid grid-cols-1 gap-6 px-8 text-xl md:px-8 lg:grid-cols-3">
          <ResultsSectionHeader
            themes="Дълго наименование на тема"
            quantity="50"
          />
          <ResultsSectionHeader
            themes="Дълго наименование на тема"
            quantity="50"
          />
          <ResultsSectionHeader
            themes="Дълго наименование на тема"
            quantity="50"
          />
        </div>
        <ResultsDisplay height="65" />
      </div>
      <div>
        <p className="py-2 pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
};

export default AutoReportsPage;
