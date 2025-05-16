"use client";

import Image from "next/image";
import CampaignTable from "@/components/CampaignTable";
import TreeView from "@/components/TreeCampaign";
import { sampleTreeData } from "@/utils/treeData";
import { useRouter } from "next/navigation";
import Header from "@/components/auto-reports/Header";

export default function fixCampaign() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <Header title="Фискализация на кампаниите" />

      {/* Main Content */}
      <div className="flex w-full grow gap-7 overflow-hidden p-1 px-7 pl-20">
        {/* Left Side - Campaign Table */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-text-secondary pt-5 pb-2 pl-1 font-bold">
              АКТИВИРАНЕ НА КАМПАНИЯ
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CampaignTable headerMode="statusDisplay" />
          </div>
        </div>

        {/* Right Side - Tree View */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="text-text-secondary pt-5 pb-2 pl-1 font-bold">
              ПРЕГЛЕД НА КАМПАНИЯТА
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="border-text-secondary mx-auto w-full flex-1 overflow-hidden rounded-lg border-2 bg-white p-4 shadow-md">
              <TreeView
                title="Шифр 001/001 кампания № 002"
                data={sampleTreeData}
                className="mx-3 h-full max-w-md"
              />
            </div>
            <div className="flex shrink-0 justify-end py-3">
              <button className="bg-secondary flex rounded-lg p-2 text-white">
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
