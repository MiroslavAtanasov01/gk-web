"use client";

import React, { useState } from "react";
import Header from "@/components/auto-reports/Header";
import dynamic from "next/dynamic";
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import TextInput from "@/components/TextInput";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import "@/styles/gis.css";

const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => <p className="p-10 text-center">Зареждане на картата...</p>,
});

export interface Region {
  id: string;
  number: number;
  name: string;
  creationDate: string;
  regionLocation: string | null;
}

interface GisPageClientProps {
  availableRegions: Region[];
}

const GisPageClient: React.FC<GisPageClientProps> = ({ availableRegions }) => {
  console.log("Available Regions:", availableRegions);
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  //TODO: Adding a new region via POST /api/Region is available by the first token if "isAddingNewRegion": true
  //isAddingNewRegion is available in user object in the BE response
  const handleAddRegion = async () => {
    setIsSubmitting(true);
    try {
      const newRegionPayload = {
        name: formData.country,
        // TODO add other fields
        // for now BE creates region with empty data !!! TODO ask BE to change this !!!
      };

      const createdRegion = await api.post("/api/regions", newRegionPayload);

      console.log("Successfully created region:", createdRegion);
      alert("Регионът е добавен успешно!");

      // This tells Next.js to re-run the Server Component data fetch on the server
      // and update the `availableRegions` prop without a full page reload.
      router.refresh();
    } catch (error) {
      console.error("Failed to add region:", error);
      alert("Грешка при добавяне на регион.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // // --- FUNCTION TO VIEW A SPECIFIC REGION ---
  // const handleViewRegion = async (regionId: string) => {
  //   try {
  //     const regionDetails = await api.get<Region>(`/api/regions/${regionId}`);
  //     console.log("Region Details:", regionDetails);
  //   } catch (error) {
  //     console.error("Failed to fetch region details:", error);
  //     alert("Грешка при извличане на детайли.");
  //   }
  // };

  // // --- NEW FUNCTION TO DELETE A REGION ---
  // const handleDeleteRegion = async (regionId: string) => {
  //   if (!window.confirm("Наистина ли искате да изтриете този регион?")) {
  //     return;
  //   }

  //   try {
  //     await api.delete(`/api/regions/${regionId}`);
  //     alert("Регионът е изтрит успешно.");
  //     router.refresh();
  //   } catch (error) {
  //     console.error("Failed to delete region:", error);
  //     alert("Грешка при изтриване на регион.");
  //   }
  // };

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
            <button
              onClick={handleAddRegion}
              disabled={isSubmitting}
              className="hover:bg-secondary flex cursor-pointer items-center space-x-2 rounded-lg bg-[#74ACDA] px-4 py-2 text-lg font-medium text-white transition-colors duration-150"
            >
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

export default GisPageClient;
