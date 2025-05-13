"use client";

import React from "react";
import ResultsDisplay from "@/components/auto-reports/ResultDisplay";
import AutoReportGraphics from "@/components/auto-reports/AutoReportGraphics";
import Header from "@/components/auto-reports/Header";
import SectionHeader from "@/components/auto-reports/SectionHeader";
import CampaignDateAndNumber from "@/components/auto-reports/CampaignDateAndNumber";
import CampaignInfo from "@/components/auto-reports/CampaignInfo";
import ResultsHeader from "@/components/auto-reports/ResultsHeader";
import ResultsSectionHeader from "@/components/auto-reports/ResultsSectionHeader";

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
        <section className="flex flex-col lg:col-span-1">
          <SectionHeader
            title="БЮЛЕТИНА НА ПРОВЕДЕНА КАМПАНИЯ"
            date="10.03.2023"
          />
          <div className="mb-4 text-xl">
            <CampaignDateAndNumber
              number={bulletinCampaignDetails.campaignNumber}
              date={bulletinCampaignDetails.date}
            />
            <CampaignInfo bulletinCampaignDetails={bulletinCampaignDetails} />
          </div>
        </section>

        {/* Right Section */}
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
      </div>
      {/* Results Area */}
      <div>
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
        <ResultsDisplay height="40" />
        <AutoReportGraphics />
      </div>
    </div>
  );
};

export default AutoReportsPage;
