"use client";

import React, { useState } from "react";
import Header from "@/components/auto-reports/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import "@/styles/gis.css";

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

  const toggleField = (field: keyof typeof formData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleDropdownChange = (
    field: keyof typeof formData,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // You can add a console log here to see the dynamic change
    console.log(`Dropdown for ${field} changed to:`, value);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header title="Настройка на Географската Информационна Система" />
      <main className="grid flex-grow grid-cols-1 gap-8 p-4 md:p-6 md:pb-1 lg:grid-cols-[2fr_1fr]">
        {/* Left Column */}
        <section className="flex flex-col">
          <h2 className="text-primary title-column mb-3 text-center text-xl font-semibold">
            ВИЗУАЛИЗАЦИЯ НА ИЗБРАНИЯТ РЕГИОН
          </h2>
          <div className="border-primary ml-25 flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border-2">
            <Map className="h-full w-full flex-grow" />
          </div>
        </section>

        {/* Right Column */}
        <section className="flex flex-col">
          <div className="flex flex-grow flex-col">
            <h2 className="text-primary title-column mb-3 text-center text-xl font-semibold">
              СТАТУС 1. ЛОКАЛИЗАЦИ НА РЕГИОН
            </h2>
            <div className="border-primary fields-wrapper grid flex-grow rounded-2xl border-2 p-5">
              <div className="mb-1 w-full">
                <Dropdown
                  label="Държава"
                  value={formData.country}
                  onChange={(newValue) =>
                    handleDropdownChange("country", newValue)
                  }
                  labelColor="secondary"
                  activate={formData.countryActive}
                  disabled={!formData.countryActive}
                  onToggleActivate={() => toggleField("countryActive")}
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
                  onChange={(newValue) =>
                    handleDropdownChange("city", newValue)
                  }
                  labelColor="secondary"
                  activate={formData.cityActive}
                  disabled={!formData.cityActive}
                  onToggleActivate={() => toggleField("cityActive")}
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
                  onChange={(newValue) =>
                    handleDropdownChange("district", newValue)
                  }
                  labelColor="secondary"
                  activate={formData.districtActive}
                  disabled={!formData.districtActive}
                  onToggleActivate={() => toggleField("districtActive")}
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
                  value={formData.quarter}
                  onChange={(newValue) =>
                    handleDropdownChange("quarter", newValue)
                  }
                  labelColor="secondary"
                  activate={formData.quarterActive}
                  disabled={!formData.quarterActive}
                  onToggleActivate={() => toggleField("quarterActive")}
                  options={[
                    { value: "", label: "" },
                    { value: "ce", label: "Център" },
                    { value: "vv", label: "Владиславово" },
                    { value: "ml", label: "Младост" },
                  ]}
                />
              </div>
              <div className="mb-1 w-full">
                <TextInput
                  label="Улица"
                  value={formData.street}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, street: value }))
                  }
                  activate={formData.streetActive}
                  onToggleActivate={() =>
                    setFormData((prev) => ({
                      ...prev,
                      streetActive: !prev.streetActive,
                    }))
                  }
                  disabled={!formData.streetActive}
                />
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="mb-1 w-full">
                  <TextInput
                    label="Номер"
                    value={formData.number}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, number: value }))
                    }
                    activate={formData.numberActive}
                    onToggleActivate={() =>
                      setFormData((prev) => ({
                        ...prev,
                        numberActive: !prev.numberActive,
                      }))
                    }
                    disabled={!formData.numberActive}
                  />
                </div>
                <div className="mb-1 w-full">
                  <TextInput
                    label="Блок"
                    value={formData.block}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, block: value }))
                    }
                    activate={formData.blockActive}
                    onToggleActivate={() =>
                      setFormData((prev) => ({
                        ...prev,
                        blockActive: !prev.blockActive,
                      }))
                    }
                    disabled={!formData.blockActive}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="mb-1 w-full">
                  <TextInput
                    label="Вход"
                    value={formData.entrance}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, entrance: value }))
                    }
                    activate={formData.entranceActive}
                    onToggleActivate={() =>
                      setFormData((prev) => ({
                        ...prev,
                        entranceActive: !prev.entranceActive,
                      }))
                    }
                    disabled={!formData.entranceActive}
                  />
                </div>
                <div className="mb-1 w-full">
                  <TextInput
                    label="Етаж"
                    value={formData.floor}
                    number={true}
                    onChange={(value) =>
                      setFormData((prev) => ({ ...prev, floor: value }))
                    }
                    activate={formData.floorActive}
                    onToggleActivate={() =>
                      setFormData((prev) => ({
                        ...prev,
                        floorActive: !prev.floorActive,
                      }))
                    }
                    disabled={!formData.floorActive}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <h2 className="text-primary title-column mb-3 text-center text-xl font-semibold">
              СТАТУС 2. СЪЗДАДЕН МОДЕЛ С ГЕОГРАФСКИ ДАННИ
            </h2>
            <div className="text-md border-primary fields-wrapper h-20 rounded-xl border-2 p-3">
              <p className="font-bold">№ 232356/01.01.2023 г.</p>
              <p>България, гр. Варна, кв. Владиславово</p>
            </div>
          </div>
          <div className="buttons-wrapper flex items-center justify-end space-x-3 pt-5">
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
      <div>
        <p className="pr-7 pb-2 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
};

export default GISConfigPage;
