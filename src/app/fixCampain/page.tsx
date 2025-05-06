import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import CampainTable from "@/components/CampainTable";
import TreeView from "@/components/TreeCampain";
import { sampleTreeData } from "@/utils/treeData";

export default function fixCampain() {
  return (
    <div>
      <div className="flex place-content-around w-full">
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
      <div className="flex w-full gap-3 p-1 grow-[20]">
        <div className="flex-1/2 text-center ">
          <div>
            <div className="flex justify-center ">
              <p className="p-5 pl-1 text-[#25509A] font-bold">
                АКТИВИРАНЕ НА КАМПАНИЯ
              </p>
            </div>
          </div>
          <div className="flex w-full h-[105%]">
            {/* Table  */}
            <CampainTable />
          </div>
        </div>
        <div className="flex-1/2 text-center">
          <div className="flex justify-center">
            <p className="p-5 pl-1 text-[#25509A] font-bold ">
              {" "}
              ПРЕГЛЕД НА КАМПАНИЯТА
            </p>
          </div>
          <div className="w-full h-full">
            <div className="p-4 bg-white rounded-lg shadow-md w-full max-w-2xl mx-auto overflow-hidden border-2 border-blue-700 rounded h-full">
              <TreeView
                title="Шифр 001/001 кампания № 002"
                data={sampleTreeData}
                className="max-w-md mx-auto"
              />
            </div>
            <div className="flex justify-end text-end pr-5 pt-2">
              <button className="flex bg-secondary text-white p-2 rounded-lg">
                Напред
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
