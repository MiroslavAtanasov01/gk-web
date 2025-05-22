import { CloseIcon } from "@/utils/icons";
import { CampaignData } from "./CampaignsMap";
import Image from "next/image";
import LineChart from "./charts/LineChart";

interface DetailPanelProps {
  data: CampaignData | null;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="bg-transperant absolute right-4 bottom-65 z-[1000] w-80">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col gap-2">
        <div className="mx-auto flex w-40 justify-center rounded-xl border-2 border-[#7FBB48] bg-[radial-gradient(circle,_#7FBB48,_#236252)] p-3 text-white">
          К № 000015
        </div>
        <div className="border-primary rounded-xl border-2 bg-white">
          <div className="text-md text-primary p-1 text-center font-semibold">
            <p>Тема: {data.themeName}</p>
            <p>Въпроси: {data.questions}</p>
          </div>

          <div className="bg-gray-bg flex gap-2 rounded-b-xl p-2 text-sm">
            <div className="">
              <Image
                src="/images/user-info.svg"
                alt="User Icon"
                width={60}
                height={60}
              />
            </div>
            <div>
              <p>
                Общ брой запитани:{" "}
                <span className="text-primary font-semibold">
                  {data.totalQueries} id
                </span>
              </p>
              <p>
                Отговорили към момента:{" "}
                <span className="text-primary font-semibold">
                  {data.responses}
                </span>
              </p>
              <p>
                Активност:{" "}
                <span className="text-primary font-semibold">
                  {data.activityPercentage}%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="border-primary rounded-xl border-2 bg-white">
          <p className="text-md text-primary p-1 text-center font-semibold">
            Тенденция на рейтинга: {data.ratingTrendPercentage}%
          </p>
          <div className="bg-gray-bg mt-1 flex h-32 items-center justify-center">
            <LineChart />
          </div>
          <div className="flex justify-around p-3 text-xs">
            <span>Параметър 1</span>
            <span>Параметър 2</span>
            <span>Параметър 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailPanel;
