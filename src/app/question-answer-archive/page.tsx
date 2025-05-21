"use client";

import Image from "next/image";
import CampaignTable from "@/components/CampaignTable";
import Header from "@/components/auto-reports/Header";

export default function fixCampaign() {
  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header title="Архивиране на въпроси и отговори" />

      {/* Main Content */}
      <div className="flex w-full grow gap-8 overflow-hidden p-1 px-10 pl-17">
        {/* Left Side - Campaign Table */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-primary w-full p-3 text-center text-2xl font-semibold tracking-wide">
              АРХИВ “ВЪПРОСИ” И “ОТГОВОРИ”
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CampaignTable headerMode="questions" />
          </div>
        </div>

        {/* Right Side - Tree View */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-primary w-full p-3 text-center text-2xl font-semibold tracking-wide">
              ВИЗУАЛИЗАЦИЯ НА ВЪПРОСА
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <CampaignTable headerMode="answers" />
            </div>
            <div className="flex shrink-0 justify-end pt-10">
              <button className="bg-secondary mr-2 flex min-w-1/5 items-center justify-center rounded-xl p-2 text-lg font-semibold text-white">
                <Image
                  src="/images/campaign/topic-white.svg"
                  alt="campaign"
                  width={40}
                  height={40}
                  className="pr-2"
                />
                Качи в тема
              </button>

              <button className="bg-secondary mr-2 flex min-w-1/5 items-center justify-center rounded-xl p-2 text-lg font-semibold text-white">
                Откажи
              </button>

              <button className="bg-secondary flex min-w-1/5 items-center justify-center rounded-xl p-2 text-lg font-semibold text-white">
                <Image
                  src="/images/keep.svg"
                  alt="campaign"
                  width={40}
                  height={40}
                  className="pr-2"
                />
                Запази
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="py-3 pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
}
