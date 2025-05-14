"use client";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import CampaignTable from "@/components/CampaignTable";
import TreeView from "@/components/TreeCampaign";
import { sampleTreeData } from "@/utils/treeData";
import { useRouter } from "next/navigation";

export default function fixCampaign() {
  const router = useRouter();

  return (
    <div className="flex h-screen flex-col">
      {/* Header */}
      <div className="flex shrink-0 p-4">
        <div className="flex cursor-pointer place-content-center">
          <Image
            src="/images/campaign/back-button.svg"
            alt="back"
            width={40}
            height={40}
          />
        </div>
        <div className="text-primary col-span-4 mr-auto ml-5 text-start text-4xl font-bold">
          Фискализация на кампаниите
        </div>
        <div className="flex cursor-pointer place-content-center">
          <Image
            src="/images/campaign/right-button.svg"
            alt="next"
            width={40}
            height={40}
            className="mr-5"
          />
          <Image
            src="/images/campaign/logo.svg"
            alt="logo"
            width={150}
            height={80}
            onClick={() => router.push("/")}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full grow gap-3 overflow-hidden p-1 px-7">
        {/* Left Side - Campaign Table */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="pt-5 pb-2 pl-1 font-bold text-[#25509A]">
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
            <p className="pt-5 pb-2 pl-1 font-bold text-[#25509A]">
              ПРЕГЛЕД НА КАМПАНИЯТА
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="mx-auto w-full flex-1 overflow-hidden rounded-lg border-2 border-blue-700 bg-white p-4 shadow-md">
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
