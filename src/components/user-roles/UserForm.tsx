"use client"; // If using Next.js App Router

import React from "react";
import Image from "next/image";

interface FormFieldProps {
  label: string;
  id?: string;
  type?: string;
  defaultValue?: string | number;
  isSelect?: boolean;
  children?: React.ReactNode;
  placeholder?: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = "text",
  defaultValue,
  isSelect = false,
  children,
  placeholder,
}) => {
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  const baseInputClasses =
    "w-full border rounded-md px-2 py-1 mb-1 text-sm text-gray-700 bg-white leading-tight border-secondary focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

  return (
    <div className="mb-0">
      <label
        htmlFor={fieldId}
        className="text-secondary block pl-1 text-[14px]"
      >
        {label}
      </label>
      {isSelect ? (
        <div className="relative">
          <select
            id={fieldId}
            defaultValue={defaultValue}
            className={`${baseInputClasses} appearance-none pr-10`} // Added appearance-none and pr-10 for select arrow space
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-blue-600">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
              <path d="M7 10l5 5 5-5H7z" />
            </svg>
          </div>
        </div>
      ) : (
        <input
          id={fieldId}
          type={type}
          defaultValue={defaultValue}
          className={baseInputClasses}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

function UserForm() {
  const buttonClasses =
    "w-2/3 bg-secondary text-white font-medium py-[0.6rem] px-4 rounded-md text-[0.8rem] transition-colors duration-200 ease-in-out leading-none hover:bg-[#7FA0CC]";

  return (
    <>
      <div className="flex flex-row items-start">
        {/* Profile Picture Area */}
        <div className="mx-2 flex shrink-0 items-center justify-center rounded-md">
          <Image
            src="/images/user-roles/profile.svg"
            alt="Profile"
            width={100}
            height={100}
          />
        </div>

        {/* Form Fields and Buttons Container */}
        <div className="grid flex-grow grid-cols-1 gap-x-5 sm:grid-cols-2 md:gap-x-6">
          {/* Left Column of Fields */}
          <div className="space-y-3.5">
            <FormField label="Фамилия" id="lastName" defaultValue="Иван" />
            <FormField label="Име" id="firstName" defaultValue="Иванов" />
            <FormField label="Презиме" id="middleName" />
            <FormField
              label="Длъжност"
              id="position"
              isSelect
              defaultValue=""
              placeholder=" "
            >
              <option value="manager">Мениджър</option>
              <option value="developer">Разработчик</option>
              <option value="designer">Дизайнер</option>
            </FormField>
          </div>

          {/* Right Column: Fields and Buttons */}
          <div className="flex h-full flex-col">
            <div className="space-y-3.5">
              <FormField label="E-mail" id="email" type="email" />
              <FormField label="Логин" id="login" />
            </div>
            <div className="mt-auto space-y-2.5 pt-3.5 text-end">
              <button type="button" className={buttonClasses}>
                Промени паролата
              </button>
              <button type="button" className={buttonClasses}>
                Изпрати паролата
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <style jsx global>{` ... `}</style> block has been removed */}
    </>
  );
}

export default UserForm;
