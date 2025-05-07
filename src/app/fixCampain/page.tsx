"use client";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import CampainTable from "@/components/CampainTable";
import TreeView from "@/components/TreeCampain";
import { sampleTreeData } from "@/utils/treeData";

export default function fixCampain() {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex justify-around items-center p-4 shrink-0">
        <div className="flex place-content-center cursor-pointer">
          <Image
            src="/images/campain/back-button.svg"
            alt="back"
            width={40}
            height={40}
          />
        </div>
        <div className="text-primary font-bold text-4xl">
          Фиксализация на Кампаниите
        </div>
        <div className="flex place-content-center cursor-pointer">
          <Image
            src="/images/campain/right-button.svg"
            alt="next"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full gap-3 p-1 grow overflow-hidden">
        {/* Left Side - Campaign Table */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="p-5 pl-1 text-[#25509A] font-bold">
              АКТИВИРАНЕ НА КАМПАНИЯ
            </p>
          </div>
          <div className="flex-1 overflow-hidden">
            <CampainTable showActions={false} />
          </div>
        </div>

        {/* Right Side - Tree View */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="p-5 pl-1 text-[#25509A] font-bold">
              ПРЕГЛЕД НА КАМПАНИЯТА
            </p>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col">
            <div className="flex-1 p-4 bg-white rounded-lg shadow-md w-full border-2 border-blue-700 mx-auto overflow-hidden">
              <TreeView
                title="Шифр 001/001 кампания № 002"
                data={sampleTreeData}
                className="max-w-md mx-3 h-full"
              />
            </div>
            <div className="flex justify-end pr-5 pt-2 shrink-0">
              <button className="flex bg-secondary text-white p-2 rounded-lg">
                Продължи
                <Image
                  src="/images/campain/right-arrow.svg"
                  alt="campain"
                  width={20}
                  height={25}
                  className="pl-2"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
