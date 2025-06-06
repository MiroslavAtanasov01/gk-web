"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@/styles/campaign.css";
import { campaignData } from "@/utils/mockData";

type HeaderMode = "mainActions" | "statusDisplay" | "questions" | "answers";

interface CampaignTableProps {
  headerMode?: HeaderMode;
  sectionTitle?: string;
}

function CampaignTable({
  headerMode = "mainActions",
  sectionTitle,
}: CampaignTableProps) {
  const [selectedId, setSelectedId] = useState<number | null>(null);

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
          <div className="text-text-secondary mr-5 text-xl font-semibold">
            Статус
          </div>
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
            <span className="text-text-secondary title-fields w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary title-fields mr-2 ml-2 font-semibold">
              {sectionTitle}
            </span>
          </>
        );
      case "statusDisplay":
        return (
          <>
            <div className="text-text-secondary title-fields mr-1 w-25 font-semibold">
              {" "}
              Активирай
            </div>{" "}
            <span className="text-text-secondary title-fields w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary title-fields mr-2 ml-2 font-semibold">
              Кампании
            </span>
          </>
        );
      case "questions":
        return (
          <>
            <div className="mr-1 w-8"></div>{" "}
            <span className="text-primary title-fields w-11 text-center font-semibold">
              №
            </span>
            <span className="text-primary title-fields mr-2 ml-2 font-semibold">
              Въпрос
            </span>
          </>
        );
      case "answers":
        return (
          <div className="text-primary title-fields flex w-full justify-center font-semibold">
            ШИФЪР 002 ВЪПРОС 0001
          </div>
        );
      default:
        return (
          <>
            <div className="mr-1 w-8"></div>
            <span className="text-text-secondary title-fields w-11 text-center font-semibold">
              №
            </span>
            <span className="text-text-secondary title-fields mr-2 ml-2 font-semibold">
              Кампания
            </span>
          </>
        );
    }
  };

  return (
    <div className="border-primary flex h-full w-full flex-col rounded-xl border-2 p-4">
      {/* Header Row */}
      <div className="mb-5 flex items-center justify-between pr-3">
        {headerMode === "answers" ? (
          renderHeaderTitles()
        ) : (
          <>
            <div className="flex items-center text-xl">
              {renderHeaderTitles()}
            </div>
            {renderHeaderActions()}
          </>
        )}
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
                  className={`w-8 text-center ${isSelected ? "" : "text-black"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-black"}`}>
                  Шифр {item.code} {item.name}{" "}
                </span>
              </>
            );
          } else if (headerMode === "questions") {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-black"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-black"}`}>
                  {item.name}{" "}
                </span>
              </>
            );
          } else if (headerMode === "answers") {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-black"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-black"}`}>
                  {item.name}{" "}
                </span>
              </>
            );
          } else {
            rowContent = (
              <>
                <span
                  className={`w-8 text-center ${isSelected ? "" : "text-black"}`}
                >
                  {item.id}
                </span>
                <span className={`ml-4 ${isSelected ? "" : "text-black"}`}>
                  Шифр {item.code} {item.name}
                </span>
              </>
            );
          }

          return (
            <div
              key={item.id}
              onClick={() => handleRowClick(item.id)}
              className={`mr-3 flex cursor-pointer items-center rounded-2xl py-1 transition duration-150 ease-in-out ${
                isSelected
                  ? "bg-custom-green font-normal text-white"
                  : isEven
                    ? "bg-gray-bg text-black hover:bg-gray-200"
                    : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              <div
                className={`mr-1 flex items-center justify-center ${
                  headerMode === "statusDisplay" ? "w-25" : "w-8"
                }`}
              >
                {isSelected ? (
                  <Image
                    src="/images/campaign/check.svg"
                    alt="Checked"
                    width={20}
                    height={20}
                    className="text-xl"
                  />
                ) : (
                  <div
                    className="h-5 w-5 rounded-full border-2 border-black text-xl"
                    style={{ backgroundColor: "transparent" }}
                  />
                )}
              </div>
              {rowContent}
              {isSelected && headerMode === "statusDisplay" && (
                <span className="mr-10 ml-auto text-sm">OK</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CampaignTable;
