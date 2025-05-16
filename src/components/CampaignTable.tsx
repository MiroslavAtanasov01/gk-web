"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/styles/campaign.css";

const IconUncheckedCircle = ({ className }: { className?: string }) => (
  <div
    className={`${className} h-5 w-5 rounded-full border-2 border-black`}
    style={{ backgroundColor: "transparent" }}
  />
);

const IconCheckedCircle = ({ className }: { className?: string }) => (
  <Image
    src="/images/campaign/check.svg"
    alt="Checked"
    width={20}
    height={20}
    className={className}
  />
);

const campaignData = [
  { id: 1, code: "001/001", name: "кампания № 001" },
  { id: 2, code: "001/001", name: "кампания № 002" },
  { id: 10, code: "001/001", name: "кампания № 010" },
];

type HeaderMode = "mainActions" | "statusDisplay" | "questions" | "answers";

interface CampaignTableProps {
  headerMode?: HeaderMode;
}

function CampaignTable({ headerMode = "mainActions" }: CampaignTableProps) {
  const [selectedId, setSelectedId] = useState(2);

  const handleRowClick = (id: number) => {
    setSelectedId(id);
    console.log(`Selected campaign ID: ${id}`);
  };

  const renderHeaderActions = () => {
    switch (headerMode) {
      case "mainActions":
        return (
          <div className="flex items-center space-x-2">
            <button className="btn-primary">
              <Image
                src="/images/campaign/template.svg"
                alt="Шаблон"
                width={20}
                height={20}
                className="pr-1"
              />
              <p className="pr-2">Шаблон</p>
            </button>
            <button className="btn-primary">
              <Image
                src="/images/campaign/import.svg"
                alt="Импорт"
                width={20}
                height={20}
                className="pr-1"
              />
              <p className="pr-2">Импорт</p>
            </button>
            <button className="btn-primary btn-icon" title="Изтрий">
              <Image
                src="/images/campaign/delete.svg"
                alt="Изтрий"
                width={18}
                height={18}
              />
            </button>
            <button className="btn-primary btn-icon" title="Редактирай">
              <Image
                src="/images/campaign/pencil.svg"
                alt="Редактирай"
                width={20}
                height={20}
              />
            </button>
            <button className="btn-primary btn-icon" title="Добави">
              <Image
                src="/images/campaign/plus.svg"
                alt="Добави"
                width={20}
                height={20}
              />
            </button>
            <button className="btn-primary">
              <Image
                src="/images/campaign/import.svg"
                alt="Експорт"
                width={20}
                height={20}
                className="pr-1"
              />
              <p className="pr-2">Експорт</p>
            </button>
          </div>
        );
      case "statusDisplay":
        return (
          <div className="text-text-secondary mr-5 font-semibold">Статус</div>
        );
      case "questions":
        return null;
      case "answers":
        return null;
      default:
        return null;
    }
  };

  const renderHeaderTitles = () => {
    switch (headerMode) {
      case "mainActions":
        return (
          <>
            <div className="mr-1 w-7"> </div>{" "}
            <span className="text-text-secondary w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary mr-2 ml-2 font-semibold">
              Кампания
            </span>
          </>
        );
      case "statusDisplay":
        return (
          <>
            <div className="text-text-secondary mr-1 w-20 font-semibold">
              {" "}
              Активирай
            </div>{" "}
            <span className="text-text-secondary w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary mr-2 ml-2 font-semibold">
              Кампания
            </span>
          </>
        );
      case "questions":
        return (
          <>
            <div className="mr-1 w-8"></div>{" "}
            <span className="text-text-secondary w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary mr-2 ml-2 font-semibold">
              Въпрос
            </span>
          </>
        );
      case "answers":
        return (
          <div className="text-text-secondary w-full text-center font-semibold">
            Въпрос номер {selectedId}
          </div>
        );
      default:
        return (
          <>
            <div className="mr-1 w-8"></div>
            <span className="text-text-secondary w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary mr-2 ml-2 font-semibold">
              Кампания
            </span>
          </>
        );
    }
  };

  return (
    <div className="border-primary flex h-full w-full flex-col rounded-lg border-2 bg-white p-4 shadow-md">
      {/* Header Row */}
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {renderHeaderTitles()}
        </div>

        {renderHeaderActions()}
      </div>

      {/* Data Rows */}

      <div className="custom-scrollbar min-h-0 flex-1 space-y-1 overflow-y-auto">
        {campaignData.map((item, index) => {
          const isSelected = item.id === selectedId;
          const isEven = index % 2 === 0;

          let rowContent;
          if (headerMode === "mainActions" || headerMode === "statusDisplay") {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-gray-700"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-gray-900"}`}>
                  Шифр {item.code} {item.name}{" "}
                </span>
              </>
            );
          } else if (headerMode === "questions") {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-gray-700"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-gray-900"}`}>
                  {item.name}{" "}
                </span>
              </>
            );
          } else if (headerMode === "answers") {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-gray-700"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-gray-900"}`}>
                  {item.name}{" "}
                </span>
              </>
            );
          } else {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-gray-700"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-gray-900"}`}>
                  Шифр {item.code} {item.name}
                </span>
              </>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              className={`mr-3 flex cursor-pointer items-center rounded-xl transition duration-150 ease-in-out ${
                isSelected
                  ? "bg-[#7FBB48] font-normal text-white"
                  : isEven
                    ? "bg-[#D7D8D9] text-gray-800 hover:bg-gray-400"
                    : "bg-white text-gray-800 hover:bg-gray-400"
              }`}
            >
              <div
                className={`mr-1 flex items-center justify-center ${
                  headerMode === "statusDisplay" ? "w-20" : "w-8"
                }`}
              >
                {isSelected ? (
                  <IconCheckedCircle className="text-xl" />
                ) : (
                  <IconUncheckedCircle className="text-xl" />
                )}
              </div>
              {rowContent}
              {isSelected && headerMode === "statusDisplay" && (
                <span className="mr-5 ml-auto text-sm">OK</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CampaignTable;
