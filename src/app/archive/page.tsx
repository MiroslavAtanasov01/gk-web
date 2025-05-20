"use client";

import React, { useState } from "react";
import Image from "next/image";
import Header from "@/components/auto-reports/Header";

interface CampaignStatus {
  id: number;
  campaignNumberText: string;
  status: "Активна" | "Очакване" | "Приключила" | string;
  startDate: string;
  endDate: string;
  sampleSize?: string | number;
  responseRate?: string;
}

const sampleCampaignData: CampaignStatus[] = [
  {
    id: 1,
    campaignNumberText: "Шифър 001/001 кампания № 001",
    status: "Активна",
    startDate: "01.10.2024",
    endDate: "10.10.2024",
    sampleSize: "10 000 000",
    responseRate: "80 %",
  },
  {
    id: 2,
    campaignNumberText: "Шифър 001/001 кампания № 002",
    status: "Активна",
    startDate: "01.10.2024",
    endDate: "10.10.2024",
    sampleSize: "5 000 000",
    responseRate: "90 %",
  },
  {
    id: 3,
    campaignNumberText: "Шифър 001/001 кампания № 003",
    status: "Очакване",
    startDate: "01.10.2024",
    endDate: "10.10.2024",
    sampleSize: "-",
    responseRate: "-",
  },
  {
    id: 4,
    campaignNumberText: "Шифър 001/001 кампания № 004",
    status: "Приключила",
    startDate: "01.09.2024",
    endDate: "15.09.2024",
    sampleSize: "3 000 000",
    responseRate: "75 %",
  },
  {
    id: 5,
    campaignNumberText: "Шифър 001/001 кампания № 005",
    status: "Активна",
    startDate: "05.10.2024",
    endDate: "20.10.2024",
    sampleSize: "8 000 000",
    responseRate: "85 %",
  },
  {
    id: 6,
    campaignNumberText: "Шифър 001/001 кампания № 006",
    status: "Очакване",
    startDate: "15.10.2024",
    endDate: "25.10.2024",
    sampleSize: "-",
    responseRate: "-",
  },
  {
    id: 7,
    campaignNumberText: "Шифър 001/001 кампания № 007",
    status: "Приключила",
    startDate: "01.08.2024",
    endDate: "10.08.2024",
    sampleSize: "6 000 000",
    responseRate: "70 %",
  },
  {
    id: 8,
    campaignNumberText: "Шифър 001/001 кампания № 008",
    status: "Активна",
    startDate: "10.10.2024",
    endDate: "20.10.2024",
    sampleSize: "4 000 000",
    responseRate: "88 %",
  },
];

const CampaignStatusArchivePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = sampleCampaignData.filter((campaign) =>
    campaign.campaignNumberText
      .toLowerCase()
      .includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen flex-col text-gray-950">
      <Header title="Автоотчети" />

      {/* Main Content Area */}
      <main className="flex-grow p-4 px-10 md:p-8">
        {/* Search Bar */}
        <div className="mb-6 flex flex-row items-center space-x-4 pl-5">
          <div className="text-md text-secondary">
            Търсене номер на кампания
          </div>
          <div className="relative">
            <input
              type="text"
              id="searchCampaign"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-secondary w-70 rounded-xl border-2 py-1 pr-10 pl-3 focus:border-blue-500 focus:ring-red-500 sm:text-sm"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <Image
                src="/images/search.svg"
                alt="search"
                width={20}
                height={22}
              />
            </div>
          </div>
        </div>

        {/* Table Container with custom scrollbar for overflow */}
        <div className="custom-scrollbar overflow-x-auto">
          <table className="min-w-full">
            <thead className="sticky top-0 z-5">
              {/* Make header sticky if table scrolls vertically */}
              <tr>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider"
                >
                  №
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider"
                >
                  Номер кампания
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider"
                >
                  Статус
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider"
                >
                  Начало
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider"
                >
                  Край
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider whitespace-nowrap"
                >
                  Извадка бр.
                </th>
                <th
                  scope="col"
                  className="text-primary text-md px-4 py-3 text-center font-semibold tracking-wider whitespace-nowrap"
                >
                  Отговори %
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-950">
              {filteredData.map((campaign, index) => {
                const isEvenRow = index % 2 === 0;
                const rowBgClass = isEvenRow ? "bg-[#D7D8D9]" : "bg-white";

                return (
                  <tr key={campaign.id} className="group">
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} rounded-l-xl transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {index + 1}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.campaignNumberText}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.status}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.startDate}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.endDate}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.sampleSize !== undefined
                          ? campaign.sampleSize
                          : "-"}
                      </div>
                    </td>
                    <td className="px-0 py-0">
                      <div
                        className={`text-md h-full px-4 py-1 text-center whitespace-nowrap ${rowBgClass} rounded-r-xl transition-colors duration-150 group-hover:bg-gray-200`}
                      >
                        {campaign.responseRate !== undefined
                          ? campaign.responseRate
                          : "-"}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="text-md px-4 py-10 text-center text-gray-500"
                  >
                    Няма намерени кампании.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer with Pagination Buttons */}
      <footer className="sticky bottom-0 z-10 flex items-center justify-between border-t border-gray-200 bg-white px-6 py-3 shadow-sm md:px-8">
        <button className="hover:bg-secondary hover:bg-primary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
          <Image
            src="/images/left-arrow.svg"
            alt="next"
            width={15}
            height={30}
          />
          <span>Обратно</span>
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
      </footer>
    </div>
  );
};

export default CampaignStatusArchivePage;
