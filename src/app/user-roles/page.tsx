// FixCampaign.tsx (or your page file)
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import UserList from "@/components/user-roles/UserList";
import UserForm from "@/components/user-roles/UserForm";
import OptionsList, {
  SelectableItem,
} from "@/components/user-roles/OptionsList"; // Ensure SelectableItem is exported
import { useState } from "react";

// If SelectableItem is not exported from OptionsList.tsx, define it here or import it if it's in a separate types file
// export interface SelectableItem {
//   id: string | number;
//   label: string;
// }

export default function FixCampaign() {
  const router = useRouter();

  const roleOptions: SelectableItem[] = [
    { id: "role_admin0", label: "Администратор 0" },
    { id: "role_admin1", label: "Администратор 1" },
    { id: "role_admin2", label: "Администратор 2" },
    { id: "role_admin3", label: "Администратор 3" },
    { id: "role_admin4", label: "Администратор 4" },
    { id: "role_admin5", label: "Администратор 5" },
    { id: "role_admin6", label: "Администратор 6" },
  ];
  const [selectedRoleIds, setSelectedRoleIds] = useState<(string | number)[]>(
    [],
  );

  const handleRoleSelectionChange = (newSelectedIds: (string | number)[]) => {
    setSelectedRoleIds(newSelectedIds);
  };

  const accessOptions: SelectableItem[] = [
    { id: "access_everywhere", label: "Навсякъде" },
    { id: "access_settings", label: "Модул Настройки" },
    { id: "access_analytics", label: "Модул Анализи" },
    { id: "access_reports", label: "Модул Доклади" },
    { id: "access_support", label: "Модул Поддръжка" },
    { id: "access_billing", label: "Модул Фактуриране" },
    { id: "access_users", label: "Модул Потребители" },
  ];
  const [selectedAccessIds, setSelectedAccessIds] = useState<
    (string | number)[]
  >(["access_everywhere", "access_settings"]);

  const handleAccessSelectionChange = (newSelectedIds: (string | number)[]) => {
    setSelectedAccessIds(newSelectedIds);
  };

  return (
    <div className="flex h-screen flex-col">
      <div className="flex shrink-0 p-4">
        <div className="flex cursor-pointer place-content-center">
          <Image
            src="/images/campaign/back-button.svg"
            alt="back"
            width={40}
            height={40}
          />
        </div>
        <div className="text-primary col-span-4 mr-auto ml-5 text-start text-4xl font-bold">
          Роли и права на достъп
        </div>
        <div className="flex cursor-pointer place-content-center">
          <Image
            src="/images/campaign/right-button.svg"
            alt="next"
            width={40}
            height={40}
            className="mr-5"
          />
          <Image
            src="/images/campaign/logo.svg"
            alt="logo"
            width={150}
            height={80}
            onClick={() => router.push("/")}
          />
        </div>
      </div>

      <div className="flex w-full grow gap-3 overflow-hidden p-1 px-7">
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="pt-5 pb-2 pl-1 font-bold text-[#25509A] uppercase">
              Регистрирани потребители с адрес
            </p>
          </div>
          <div className="border-primary relative m-auto flex h-full w-full flex-col rounded-lg border-2 bg-white p-3 font-sans shadow-md">
            <UserList />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p className="pt-5 pb-2 pl-1 font-bold text-[#25509A] uppercase">
              Статус 1. Реистрация на роли и потребители
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="border-primary relative m-auto mb-3 flex w-full flex-col rounded-lg border-2 bg-white p-3 font-sans shadow-md">
              <UserForm />
            </div>
            <div className="flex w-full flex-1 flex-row gap-7 overflow-hidden font-sans">
              <div className="flex w-1/2 flex-col">
                <p className="text-primary w-full shrink-0 pt-2 pb-2 pl-1 text-center font-bold uppercase">
                  Статус 2. Избор на роля
                </p>
                <OptionsList
                  items={roleOptions}
                  initialSelectedIds={selectedRoleIds}
                  onChange={handleRoleSelectionChange}
                  className="min-h-0 flex-1"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <p className="text-primary w-full shrink-0 pt-2 pb-2 pl-1 text-center font-bold uppercase">
                  Статус 3. Достъп
                </p>
                <OptionsList
                  items={accessOptions}
                  initialSelectedIds={selectedAccessIds}
                  onChange={handleAccessSelectionChange}
                  className="min-h-0 flex-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
}
