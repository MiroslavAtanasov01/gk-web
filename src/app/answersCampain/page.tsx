"use client";

import Navbar from "@/components/Navbar";
import CampainTable from "@/components/CampainTable";
import Image from "next/image";

export default function NewsCampain() {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Title */}
      <p className="text-center w-full text-[var(--color-primary)] p-3 font-bold text-2xl tracking-wide">
        СЪЗДАВАНЕ НА ВЪПРОС - ОТГОВОРИ
      </p>

      {/* Main Content */}
      <div className="flex w-full gap-3 p-1 flex-1 overflow-hidden">
        {/* Left Column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center items-center">
            <Image
              src="/images/campain/questions-blue.svg"
              alt="campain"
              width={60}
              height={70}
              className="pr-2"
            />
            <p className="p-5 pl-1 text-[#25509A] font-bold">ВЪПРОСИ</p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CampainTable />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center items-center">
            <Image
              src="/images/campain/answer-blue.svg"
              alt="campain"
              width={60}
              height={70}
              className="pr-2"
            />
            <p className="p-5 pl-1 text-[#25509A] font-bold">ОТГОВОРИ</p>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 overflow-hidden">
              <CampainTable />
            </div>
            <div className="flex justify-end pr-5 pt-2 shrink-0">
              <button className="flex bg-secondary text-white p-2 rounded-lg">
                <Image
                  src="/images/campain/save.svg"
                  alt="campain"
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
}
