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
    <div className="flex flex-col h-screen pb-2">
      {/* Navbar */}
      <Navbar />

      {/* Page Title */}
      <p className="text-center w-full text-[var(--color-primary)] p-3 font-bold text-2xl tracking-wide">
        {title}
      </p>

      {/* Two Columns */}
      <div className="flex w-full gap-3 p-1 flex-1 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center items-center">
            <Image
              src={leftIcon}
              alt="Left Icon"
              width={60}
              height={70}
              className="pr-2"
            />
            <p className="p-5 pl-1 text-[#25509A] font-bold">{leftTitle}</p>
          </div>
          <div className="flex-1 overflow-hidden">{leftContent}</div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center items-center">
            <Image
              src={rightIcon}
              alt="Right Icon"
              width={60}
              height={70}
              className="pr-2"
            />
            <p className="p-5 pl-1 text-[#25509A] font-bold">{rightTitle}</p>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-hidden">{rightContent}</div>
            <div className="flex justify-end pr-5 pt-2 shrink-0">
              <button
                onClick={onSave}
                className="flex bg-secondary text-white p-2 rounded-lg"
              >
                <Image
                  src="/images/campaign/save.svg"
                  alt="Save"
                  width={30}
                  height={30}
                  className="pr-2"
                />
                Запази
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignLayout;
