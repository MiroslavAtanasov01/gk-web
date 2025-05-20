"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { ReactNode } from "react";

interface CampaignLayoutProps {
  leftIcon: string;
  leftTitle: string;
  rightIcon: string;
  rightTitle: string;
  leftContent: ReactNode;
  rightContent: ReactNode;
  onSave: () => void;
  title: string;
}

const CampaignLayout: React.FC<CampaignLayoutProps> = ({
  leftIcon,
  leftTitle,
  rightIcon,
  rightTitle,
  leftContent,
  rightContent,
  title,
  onSave,
}) => {
  return (
    <div className="flex h-screen flex-col pb-2">
      {/* Navbar */}
      <Navbar />

      {/* Page Title */}
      <p className="text-primary w-full p-3 text-center text-3xl font-bold tracking-wide">
        {title}
      </p>

      {/* Two Columns */}
      <div className="flex w-full flex-1 gap-8 overflow-hidden p-1 px-8">
        {/* Left Column */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={leftIcon}
              alt="Left Icon"
              width={70}
              height={70}
              className="pr-2"
            />
            <p className="text-primary p-5 pl-1 text-xl font-bold">
              {leftTitle}
            </p>
          </div>
          <div className="flex-1 overflow-hidden">{leftContent}</div>
        </div>

        {/* Right Column */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="mb-3 flex items-center justify-center">
            <Image
              src={rightIcon}
              alt="Right Icon"
              width={70}
              height={70}
              className="pr-2"
            />
            <p className="text-primary p-5 pl-1 text-xl font-bold">
              {rightTitle}
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-hidden">{rightContent}</div>
            <div className="mt-5 flex shrink-0 justify-end">
              <button
                onClick={onSave}
                className="bg-secondary flex rounded-lg p-2 text-xl text-white"
              >
                <Image
                  src="/images/campaign/save.svg"
                  alt="Save"
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
        <p className="pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
};

export default CampaignLayout;
