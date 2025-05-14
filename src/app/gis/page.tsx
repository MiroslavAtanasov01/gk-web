"use client";

import React, { useState } from "react";
import Header from "@/components/auto-reports/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p className="p-10 text-center">Зареждане на картата...</p>,
});

const GISConfigPage: React.FC = () => {
  const [formData, setFormData] = useState({
    country: "България",
    city: "Варна",
    district: "",
    quarter: "",
    street: "",
    number: "",
    block: "",
    entrance: "",
    floor: "",
    countryActive: true,
    cityActive: true,
    districtActive: false,
    quarterActive: false,
    streetActive: false,
    numberActive: false,
    blockActive: false,
    entranceActive: false,
    floorActive: false,
  });

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Настройка на Географската Информационна Система" />
      <main className="grid flex-grow grid-cols-1 gap-8 p-4 md:p-6 lg:grid-cols-[2fr_1fr]">
        {/* Left Column */}
        <section className="flex flex-col">
          <h2 className="text-primary mb-3 text-center text-xl font-semibold">
            ВИЗУАЛИЗАЦИЯ НА ИЗБРАНИЯТ РЕГИОН
          </h2>
          <div className="border-primary ml-25 flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2">
            {/* <Map className="h-full w-full flex-grow" /> */}
          </div>
        </section>

        {/* Right Column */}
        <section className="flex flex-col">
          <div className="flex-1">
            <h2 className="text-primary mb-3 text-center text-xl font-semibold">
              СТАТУС 1. ЛОКАЛИЗАЦИ НА РЕГИОН
            </h2>
            <div className="border-primary rounded-2xl border-2 p-3">
              <div className="mb-1 w-full">
                <Dropdown
                  label="Държава"
                  value={formData.country}
                  onChange={() => console.log(1)}
                  labelColor="secondary"
                  activate={true}
                  options={[
                    { value: "", label: "" },
                    { value: "bg", label: "България" },
                    { value: "ru", label: "Румъния" },
                    { value: "ge", label: "Гърция" },
                  ]}
                />
              </div>
              <div className="mb-1 w-full">
                <Dropdown
                  label="Град"
                  value={formData.city}
                  onChange={() => console.log(1)}
                  labelColor="secondary"
                  activate={true}
                  options={[
                    { value: "", label: "" },
                    { value: "vn", label: "Варна" },
                    { value: "sv", label: "София" },
                    { value: "pv", label: "Пловдив" },
                  ]}
                />
              </div>
              <div className="mb-1 w-full">
                <Dropdown
                  label="Район"
                  value={formData.district}
                  onChange={() => console.log(1)}
                  labelColor="secondary"
                  activate={true}
                  options={[
                    { value: "", label: "" },
                    { value: "ce", label: "Център" },
                    { value: "vv", label: "Владиславово" },
                    { value: "ml", label: "Младост" },
                  ]}
                />
              </div>
              <div className="mb-1 w-full">
                <Dropdown
                  label="Квартал"
                  value={formData.district}
                  onChange={() => console.log(1)}
                  labelColor="secondary"
                  activate={true}
                  options={[
                    { value: "", label: "" },
                    { value: "ce", label: "Център" },
                    { value: "vv", label: "Владиславово" },
                    { value: "ml", label: "Младост" },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="">
            <h2 className="text-primary mb-3 text-center text-xl font-semibold">
              СТАТУС 2. СЪЗДАДЕН МОДЕЛ С ГЕОГРАФСКИ ДАННИ
            </h2>
            <div className="text-md border-primary rounded-xl border-2 p-3">
              <p className="font-bold">№ 232356/01.01.2023 г.</p>
              <p>България, гр. Варна, кв. Владиславово</p>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-3 pt-5">
            <button className="hover:bg-secondary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
              <Image src="/images/keep.svg" alt="next" width={30} height={30} />
              <span>Запази</span>
            </button>
            <button className="hover:bg-secondary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150">
              <span>Продължи</span>
              <Image
                src="/images/right-arrow.svg"
                alt="next"
                width={15}
                height={30}
              />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GISConfigPage;
