"use client";

import React, { useState } from "react";
// import { useRouter } from "next/navigation"; // Keep if needed
import Image from "next/image";
import "@/styles/campain.css"; // Make sure this path is correct

// --- Icons ---
const IconUncheckedCircle = ({ className }) => (
  <span className={className}>⚪</span>
);
const IconCheckedCircle = ({ className }) => (
  <span className={className}>✔️</span>
);

// --- Data (add more items to make scrolling likely) ---
const campaignData = [
  { id: 1, code: "001/001", name: "кампания № 001" },
  { id: 2, code: "001/001", name: "кампания № 002" },
  { id: 3, code: "001/001", name: "кампания № 003" },
  { id: 4, code: "001/001", name: "кампания № 004" },
  { id: 5, code: "001/001", name: "кампания № 005" },
  { id: 6, code: "001/001", name: "кампания № 006" },
  { id: 7, code: "001/001", name: "кампания № 007" },
  { id: 8, code: "001/001", name: "кампания № 008" },
  { id: 9, code: "001/001", name: "кампания № 009" },
  { id: 10, code: "001/001", name: "кампания № 010" },
];

function CampaignTable() {
  const [selectedId, setSelectedId] = useState(2);

  const handleRowClick = (id) => {
    setSelectedId(id);
    console.log(`Selected campaign ID: ${id}`);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto overflow-hidden border-2 border-blue-700 rounded h-full">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200 pr-2">
        {" "}
        {/* Column Titles */}
        <div className="flex items-center space-x-4 ">
          <div className="w-8 mr-1"></div>
          <span
            className="font-semibold w-11 text-center"
            style={{ color: "var(--color-text-secondary)" }}
          >
            №
          </span>
          <span
            className="font-semibold ml-2 mr-2 "
            style={{ color: "var(--color-text-secondary)" }}
          >
            Кампания
          </span>
        </div>
        {/* Action Buttons */}
        <div className="flex items-center space-x-2">
          <button className="btn-primary">
            <Image
              src="/images/campain/template.svg"
              alt="Шаблон"
              width={20}
              height={20}
              className="pr-1"
            />
            <p className="pr-2">Шаблон</p>
          </button>
          <button className="btn-primary">
            <Image
              src="/images/campain/import.svg"
              alt="Импорт"
              width={20}
              height={20}
              className="pr-1"
            />{" "}
            <p className="pr-2">Импорт</p>
          </button>
          <button className="btn-primary btn-icon" title="Изтрий">
            {" "}
            <Image
              src="/images/campain/delete.svg"
              alt="Изтрий"
              width={18}
              height={18}
            />
          </button>
          <button className="btn-primary btn-icon" title="Редактирай">
            {" "}
            <Image
              src="/images/campain/pencil.svg"
              alt="Редактирай"
              width={20}
              height={20}
            />
          </button>
          <button className="btn-primary btn-icon" title="Добави">
            {" "}
            <Image
              src="/images/campain/plus.svg"
              alt="Добави"
              width={20}
              height={20}
            />
          </button>
          <button className="btn-primary">
            <Image
              src="/images/campain/import.svg"
              alt="Експорт"
              width={20}
              height={20}
              className="pr-1"
            />
            <p className="pr-2">Експорт</p>
          </button>
        </div>
      </div>

      {/* Data Rows Container - Added classes here */}
      <div className="custom-scrollbar space-y-1 max-h-72 overflow-y-auto pr-1">
        {" "}
        {campaignData.map((campaign, index) => {
          const isSelected = campaign.id === selectedId;
          const isEven = index % 2 === 0;

          return (
            <div
              key={campaign.id}
              onClick={() => handleRowClick(campaign.id)}
              className={`flex items-center p-1 rounded-lg cursor-pointer transition duration-150 ease-in-out mr-1 ${
                isSelected
                  ? "bg-[#7FBB48] text-white font-semibold"
                  : isEven
                    ? "bg-white hover:bg-gray-400 text-gray-800"
                    : "bg-[#D7D8D9] hover:bg-gray-400 text-gray-800"
              }`}
            >
              <div className="w-8 flex justify-center items-center mr-1">
                {isSelected ? (
                  <IconCheckedCircle className={`text-xl`} />
                ) : (
                  <IconUncheckedCircle className={`text-xl text-gray-500`} />
                )}
              </div>

              <span
                className={`w-8 text-center ${
                  isSelected ? "" : "text-gray-700"
                }`}
              >
                {campaign.id}
              </span>

              <span className={`ml-4 ${isSelected ? "" : "text-gray-900"}`}>
                Шифр {campaign.code} {campaign.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CampaignTable;
