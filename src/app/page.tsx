"use client";
import Image from "next/image";
import Tab from "@/components/HomepageTabs2";
import HomeProgressBar from "@/components/HomeProgressBar";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const router = useRouter();
  const { logout } = useAuth();
  return (
    <ProtectedRoute>
      <div style={{ overflow: "hidden" }}>
        <div className="bg-primary flex items-center">
          <Image
            src="/images/home/logo.svg"
            width={160}
            height={60}
            className="m-3"
            alt="Home Logo"
            priority
          />
          <p className="-ml-50 w-full text-center text-2xl font-medium text-white">
            КАЧВАНЕ НА ДАННИТЕ В ИНФОРМАЦИОНЕН МОДЕЛ
          </p>
          <button
            onClick={logout}
            className="cursor-pointer pr-5 text-white hover:opacity-80"
          >
            Изход
          </button>
        </div>
        <div className="relative mt-8 flex items-center justify-center">
          {/* Background image */}
          <Image
            src="/images/home/backgroundLogo.svg"
            fill
            alt="Background"
            className="object-contain"
          />
          <p className="text-text-main w-30 pr-6 font-bold">ГИС СИСТЕМА</p>
          {/* Foreground logo */}
          <Image
            src="/images/home-logo.svg"
            width={220}
            height={220}
            alt="Home Logo"
            priority
            className="z-10 md:h-32"
          />
          <p className="text-text-main -ml-6 w-50 text-end font-bold">
            СТАТИСТИЧЕСКИ АНАЛИЗ
          </p>
        </div>
        <div className="flex flex-row gap-20 p-4">
          {/* First column */}
          <div className="-mt-17 flex-1 p-4">
            <div className="flex justify-center text-center">
              <Image
                src="/images/home/settings.svg"
                alt="icon"
                width={50}
                height={50}
                className="pb-5"
              ></Image>
            </div>
            <div className="text-text-main flex items-center text-2xl">
              <p className="pr-5 pl-5 text-center text-[60px] md:text-[50px]">
                1
              </p>
              <p className="flex-1 text-center md:text-[20px]">
                ПЕРСОНАЛИЗАЦИЯ НА ЦИМ
              </p>
            </div>
            <Tab
              image="/images/home/profile.svg"
              text="Потребители, роли и права на достъп"
              percents={50}
              onClick={() => router.push("/user-roles")}
            ></Tab>
            <Tab
              image="/images/home/location.svg"
              text="Настройка на ГИС"
              percents={10}
            ></Tab>
            <Tab
              image="/images/home/gift.svg"
              text="Подаръци - площадка"
              percents={100}
            ></Tab>
            <Tab
              image="/images/home/listX.svg"
              text="Шаблони"
              percents={60}
            ></Tab>
          </div>

          {/* Second column  */}
          <div className="flex-1 p-4">
            <div className="text-text-main flex items-center text-2xl">
              <p className="pr-5 pl-5 text-center text-[60px] md:text-[50px]">
                2
              </p>
              <p className="flex-1 text-center md:text-[20px]">
                УПРАВЛЕНИЕ НА ИМ ПО БАЗИ
              </p>
            </div>
            <Tab
              image="/images/home/speaker.svg"
              text="Планиране на кампании"
              percents={70}
              onClick={() => router.push("/topic-campaign")}
            ></Tab>
            <Tab
              image="/images/home/group.svg"
              text='Потребители на "Кампании"'
              percents={30}
            ></Tab>
            <Tab
              image="/images/home/glass.svg"
              text="Обзор на кампании"
              percents={45}
            ></Tab>
          </div>

          {/* Third column  */}
          <div className="-mt-17 flex-1 p-4">
            <div className="flex justify-center text-center">
              <Image
                src="/images/home/colorfullChart.svg"
                alt="icon"
                width={55}
                height={55}
                className="pb-5"
              ></Image>
            </div>
            <div className="text-text-main flex items-center text-2xl">
              <p className="pr-5 pl-5 text-center text-[60px] md:text-[50px]">
                3
              </p>
              <p className="flex-1 text-center md:text-[20px]">
                УПРАВЛЕНИЕ НА КАМПАНИЯТА
              </p>
            </div>
            <Tab
              image="/images/home/calendar.svg"
              text="Управление на кампаниите"
              percents={25}
              onClick={() => router.push("/campaigns")}
            ></Tab>
            <Tab
              image="/images/home/barchart.svg"
              text="Справки, репорт, доклад"
              percents={60}
              onClick={() => router.push("/fisc-campaign")}
            ></Tab>
            <Tab
              image="/images/home/archive.svg"
              text="Архив"
              percents={0}
              onClick={() => router.push("/question-answer-archive")}
            ></Tab>
          </div>
          {/* Progress Bars  */}
        </div>
        <div className="flex w-full items-end px-10">
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
            className="text-center font-bold"
            style={{ color: "var(  --color-gray)" }}
          >
            ИНДИКАТОР ЗА ПОПЪЛВАНЕ НА МАТРИЦАТА
          </p>
          <p className="text-center" style={{ color: "var(  --color-gray)" }}>
            базисни показатели
          </p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
