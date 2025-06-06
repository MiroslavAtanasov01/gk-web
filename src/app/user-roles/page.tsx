"use client";

import UserList from "@/components/user-roles/UserList";
import UserForm from "@/components/user-roles/UserForm";
import OptionsList, {
  SelectableItem,
} from "@/components/user-roles/OptionsList";
import { useState } from "react";
import Header from "@/components/auto-reports/Header";

export default function FixCampaign() {
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
      <Header title="Роли и права на достъп" />

      <div className="mt-3 flex w-full grow gap-8 overflow-hidden p-1 px-7 pl-20">
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p
              className={`text-primary title-column w-full p-3 text-center font-semibold tracking-wide`}
            >
              РЕГИСТРИРАНИ ПОТРЕБИТЕЛИ С АДРЕС
            </p>
          </div>
          <div className="border-text-secondary relative m-auto flex h-full w-full flex-col rounded-xl border-2 bg-white p-5 font-sans shadow-md">
            <UserList />
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="flex justify-center">
            <p
              className={`text-primary title-column w-full p-3 text-center font-semibold tracking-wide`}
            >
              СТАТУС 1. РЕГИСТРАЦИЯ НА РОЛИ И ПОТРЕБИТЕЛИ
            </p>
          </div>
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="border-text-secondary relative m-auto mb-3 flex w-full flex-col rounded-xl border-2 p-5">
              <UserForm />
            </div>
            <div className="flex w-full flex-1 flex-row gap-7 overflow-hidden">
              <div className="flex w-1/2 flex-col">
                <p
                  className={`text-primary title-column w-full p-3 text-center font-semibold tracking-wide`}
                >
                  СТАТУС 2. ИЗБОР НА РОЛЯ
                </p>
                <OptionsList
                  items={roleOptions}
                  initialSelectedIds={selectedRoleIds}
                  onChange={handleRoleSelectionChange}
                  className="min-h-0 flex-1"
                />
              </div>
              <div className="flex w-1/2 flex-col">
                <p
                  className={`text-primary title-column w-full p-3 text-center font-semibold tracking-wide`}
                >
                  СТАТУС 3. ДОСТЪП
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
        <p className="py-2 pr-7 text-end text-xs text-gray-400">
          © Copyright 2025 Interactive Business Partners Petersburg
        </p>
      </div>
    </div>
  );
}
