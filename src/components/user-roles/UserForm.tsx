"use client";

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
    "w-full border-2 rounded-xl px-2 py-1 mb-1 text-lg leading-tight border-secondary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary";

  return (
    <div className="mb-0">
      <label htmlFor={fieldId} className="text-secondary block pl-1 text-lg">
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
          <span className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2">
            <Image
              src="/images/down-arrow.svg"
              alt="arrow"
              width={20}
              height={15}
            />
          </span>
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
    "w-2/3 bg-secondary text-white font-medium p-4 rounded-xl cursor-pointer text-lg transition-colors duration-200 font-semibold ease-in-out leading-none hover:bg-primary";

  return (
    <>
      <div className="flex flex-row items-start">
        {/* Profile Picture Area */}
        <div className="mr-5 flex shrink-0 items-center justify-center rounded-md">
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
            <div className="mt-auto space-y-4 pt-3.5 text-end">
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
