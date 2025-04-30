import Navbar from "@/components/Navbar";
import CampainTable from "@/components/CampainTable";

export default function NewCampain() {
  return (
    <div>
      <Navbar />
      <p className="text-center w-full text-[var(--color-primary)] p-3 font-bold text-2xl ">
        СЪЗДАВАНЕ НА КАМПАНИЯ - ТЕМА
      </p>
      <div className="flex w-full gap-3 p-1">
        <div className="flex-1/2 text-center">
          <div>
            <p className="p-5">КАМПАНИЯ</p>
          </div>
          <div className="w-full border-2 border-blue-700 rounded">
            {/* Table  */}
            <CampainTable />
          </div>
        </div>
        <div className="flex-1/2 text-center">
          <p className="p-5"> ТЕМА</p>
          <div className="w-full border-2 border-blue-700 rounded">
            <CampainTable />
          </div>
        </div>
      </div>
    </div>
  );
}
