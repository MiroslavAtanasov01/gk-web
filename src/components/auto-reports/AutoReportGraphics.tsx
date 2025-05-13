import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";

const AutoReportGraphics: React.FC<{
  className?: string;
}> = ({}) => {
  return (
    <div className="mx-12 mt-1 grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
      <div className="grid grid-cols-3 items-center gap-4 p-4">
        <p className="text-primary col-span-1 text-xl font-semibold">
          ИЗОБРАЖЕНИЕ В ГРАФИКА/ТРЕНД 2 КОНТРОЛИ
        </p>
        <div className="col-span-2 h-[100px] w-full">
          <PieChart />
        </div>
      </div>

      <div className="grid grid-cols-[1.3fr_2fr_1.3fr] items-center gap-4 p-4">
        <p className="text-primary text-xl font-semibold">
          ИЗОБРАЖЕНИЕ В ГРАФИКА/ПИТА - ОТНОСИТЕЛНО ТЕГЛО
        </p>
        <div className="h-[150px] w-full">
          <LineChart />
        </div>
        <div className="space-y-1">
          <p className="text-[#7FBB48]">Контрола 1</p>
          <p className="text-[#E30613]">Контрола</p>
        </div>
      </div>
    </div>
  );
};

export default AutoReportGraphics;
