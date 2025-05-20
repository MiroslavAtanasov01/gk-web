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
      <div className="flex w-full grow gap-10 overflow-hidden p-1 px-7 pl-17">
        {/* Left Side - Campaign Table */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-text-secondary pt-5 pb-2 pl-1 font-bold uppercase">
              {`  Архив "Въпроси" и "Отговори"`}
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CampaignTable headerMode="questions" />
          </div>
        </div>

        {/* Right Side - Tree View */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-text-secondary pt-5 pb-2 pl-1 font-bold">
              ВИЗУАЛИЗАЦИЯ НА ВЪПРОСА
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <CampaignTable headerMode="answers" />
            </div>
            <div className="flex shrink-0 justify-end py-3">
              <button className="bg-secondary mr-2 flex min-w-1/5 items-center justify-center rounded-xl p-2 text-white">
                <Image
                  src="/images/campaign/topic-white.svg"
                  alt="campaign"
                  width={30}
                  height={35}
                  className="pr-2"
                />
                Качи в тема
              </button>

              <button className="bg-secondary mr-2 flex min-w-1/5 items-center justify-center rounded-xl p-2 text-white">
                Откажи
              </button>

              <button className="bg-secondary flex min-w-1/5 items-center justify-center rounded-xl p-2 text-white">
                Продължи
                <Image
                  src="/images/campaign/right-arrow.svg"
                  alt="campaign"
                  width={20}
                  height={25}
                  className="pl-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
}
