import Navbar from "@/components/Navbar";
import CampainTable from "@/components/CampainTable";
import Image from "next/image";

export default function NewCampain() {
  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      <p className="text-center w-full text-[var(--color-primary)] p-3 font-bold text-2xl  tracking-wide">
        СЪЗДАВАНЕ НА КАМПАНИЯ - ТЕМА
      </p>
      <div className="flex w-full gap-3 p-1 grow-[20]">
        <div className="flex-1/2 text-center ">
          <div>
            <div className="flex justify-center ">
              <Image
                src="/images/campain/campain.svg"
                alt="campain"
                width={60}
                height={70}
                className="pr-2"
              />
              <p className="p-5 pl-1 text-[#25509A] font-bold">КАМПАНИЯ</p>
            </div>
          </div>
          <div className="flex w-full border-2 border-blue-700 rounded h-full">
            {/* Table  */}
            <CampainTable />
          </div>
        </div>
        <div className="flex-1/2 text-center">
          <div className="flex justify-center">
            <Image
              src="/images/campain/topic.svg"
              alt="campain"
              width={60}
              height={70}
              className="pr-2"
            />
            <p className="p-5 pl-1 text-[#25509A] font-bold"> ТЕМА</p>
          </div>
          <div className="w-full border-2 border-blue-700 rounded">
            <CampainTable />
          </div>
        </div>
      </div>
    </div>
  );
}
