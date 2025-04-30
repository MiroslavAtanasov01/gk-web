import Image from "next/image";
import Tab from "@/components/HomepageTabs";
import HomeProgressBar from "@/components/HomeProgressBar";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="bg-[var(--color-primary)] flex items-center ">
        <Image
          src="/images/home/logo.svg"
          width={160}
          height={60}
          className="m-3"
          alt="Home Logo"
          priority
        />
        <p className=" text-2xl text-white text-center w-full font-medium -ml-50">
          КАЧВАНЕ НА ДАННИТЕ В ИНФОРМАЦИОНЕН МОДЕЛ
        </p>
      </div>
      <div className="relative flex items-center justify-center mt-8">
        {/* Background image */}
        <Image
          src="/images/home/backgroundLogo.svg"
          fill
          alt="Background"
          className="object-contain"
        />
        <p className="text-[var(--color-text-main)] font-bold pr-6 w-30">
          ГИС СИСТЕМА
        </p>
        {/* Foreground logo */}
        <Image
          src="/images/home-logo.svg"
          width={220}
          height={220}
          alt="Home Logo"
          priority
          className="z-10 md:h-32"
        />
        <p className="text-[var(--color-text-main)] font-bold -ml-6 w-50 text-end">
          СТАТИСТИЧЕСКИ АНАЛИЗ
        </p>
      </div>
      <div className="flex flex-row gap-20 p-4  ">
        {/* First column */}
        <div className="p-4 flex-1  -mt-17">
          <div className="flex text-center justify-center">
            <Image
              src="/images/home/settings.svg"
              alt="icon"
              width={50}
              height={50}
              className="pb-5"
            ></Image>
          </div>
          <div className="flex items-center text-[var(--color-text-main)] text-2xl">
            <p className="text-center pl-5 pr-5 text-[60px] md:text-[50px]">
              1
            </p>
            <p className="flex-1 text-center md:text-[20px]">
              ПЕРСОНАЛИЗАЦИЯ НА ЦИМ
            </p>
          </div>
          <Tab
            image="/images/home/profile.svg"
            text="Потребители, роли и права на достъп"
            precents={50}
          ></Tab>
          <Tab
            image="/images/home/location.svg"
            text="Настройка на ГИС"
            precents={10}
          ></Tab>
          <Tab
            image="/images/home/gift.svg"
            text="Подаръци - площадка"
            precents={100}
          ></Tab>
          <Tab
            image="/images/home/listX.svg"
            text="Шаблони"
            precents={60}
          ></Tab>
        </div>

        {/* Second column  */}
        <div className="p-4 flex-1">
          <div className="flex items-center text-[var(--color-text-main)] text-2xl">
            <p className="text-center pl-5 pr-5 text-[60px] md:text-[50px]">
              2
            </p>
            <p className="flex-1 text-center md:text-[20px]">
              УПРАВЛЕНИЕ НА ИМ ПО БАЗИ
            </p>
          </div>
          <Tab
            image="/images/home/speaker.svg"
            text="Планиране на кампании"
            precents={70}
          ></Tab>
          <Tab
            image="/images/home/group.svg"
            text='Потребители на "Кампании"'
            precents={30}
          ></Tab>
          <Tab
            image="/images/home/glass.svg"
            text="Обзор на кампании"
            precents={45}
          ></Tab>
        </div>

        {/* Third column  */}
        <div className="p-4 flex-1 -mt-17">
          <div className="flex text-center justify-center">
            <Image
              src="/images/home/colorfullChart.svg"
              alt="icon"
              width={55}
              height={55}
              className="pb-5"
            ></Image>
          </div>
          <div className="flex items-center text-[var(--color-text-main)] text-2xl">
            <p className="text-center pl-5 pr-5 text-[60px] md:text-[50px]">
              3
            </p>
            <p className="flex-1 text-center md:text-[20px]">
              УПРАВЛЕНИЕ НА КАМПАНИЯТА
            </p>
          </div>
          <Tab
            image="/images/home/calendar.svg"
            text="Управление на кампаниите"
            precents={25}
          ></Tab>
          <Tab
            image="/images/home/barchart.svg"
            text="Справки, репорт, доклад"
            precents={60}
          ></Tab>
          <Tab image="/images/home/archive.svg" text="Архив" precents={0}></Tab>
        </div>
        {/* Progress Bars  */}
      </div>
      <div className="flex items-end w-full px-10">
        <div className="flex-1">
          <HomeProgressBar value={10} />
        </div>
        <div className="flex-1">
          <HomeProgressBar value={50} />
        </div>
        <div className="flex-1">
          <HomeProgressBar value={90} />
        </div>
      </div>
      <div className="py-5">
        <p
          className="text-center font-bold "
          style={{ color: "var(  --color-gray)" }}
        >
          ИНДИКАТОР ЗА ПОПЪЛВАНЕ НА МАТРИЦАТА
        </p>
        <p className="text-center" style={{ color: "var(  --color-gray)" }}>
          базисни показатели
        </p>
      </div>
    </div>
  );
}
