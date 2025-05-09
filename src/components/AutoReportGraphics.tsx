const AutoReportGraphics: React.FC<{
  className?: string;
}> = ({}) => {
  return (
    <div className="mx-12 mt-1 grid flex-grow grid-cols-1 gap-3 md:grid-cols-2">
      <div className="flex grid h-28 grid-cols-3 flex-col flex-row items-center justify-center p-4">
        <p className="text-primary text-xl font-semibold">
          ИЗОБРАЖЕНИЕ В ГРАФИКА/ТРЕНД 2 КОНТРОЛИ
        </p>
        <div>Graphics</div>
      </div>
      <div className="flex grid h-28 grid-cols-3 flex-col flex-row items-center justify-center p-4">
        <p className="text-primary text-xl font-semibold">
          ИЗОБРАЖЕНИЕ В ГРАФИКА/ПИТА - ОТНОСИТЕЛНО ТЕГЛО
        </p>
        <div>Graphics</div>
      </div>
    </div>
  );
};

export default AutoReportGraphics;
