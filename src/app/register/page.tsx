"use client";

import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { InputField } from "@/components/InputFIeld";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    if (
      !firstName ||
      !lastName ||
      !email ||
      !username ||
      !password ||
      !confirmPassword
    ) {
      setError("Моля, попълнете всички полета.");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Паролите не съвпадат.");
      setLoading(false);
      return;
    }
    // --- Add more validation as needed (email format, password strength) ---

    // --- !!! Placeholder for actual registration logic !!! ---
    // Replace this with your actual API call or context function
    console.log("Submitting registration:", {
      firstName,
      lastName,
      email,
      username,
      password,
    });
    // Simulate API call delay
    setTimeout(() => {
      console.log("Registration Submitted (mock)");
      alert("Регистрацията е успешна! (Демо)"); // Placeholder success feedback
      // Redirect or clear form after successful registration
      setLoading(false);
      // Reset form (optional)
      // setFirstName(''); setLastName(''); setEmail(''); setUsername(''); setPassword(''); setConfirmPassword('');
      // router.push('/login'); // If using router
    }, 1500);
    // --- End Placeholder ---
  };

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left Column: Form */}
        <div className="w-full h-full p-15">
          <Image
            src="/images/auth/logo.svg"
            alt="Account Security Graphic"
            width={700}
            height={273}
          />
          <h2 className="text-4xl font-bold text-[var(--color-secondary)] mb-5 mt-10 ml-13 w-md">
            Регистрация на първи потребител
          </h2>
          <form onSubmit={handleSubmit} className="w-sm ml-13">
            <InputField
              icon={<FaUser size={16} />}
              placeholder="Име"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              icon={<FaUser size={16} />}
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputField
              icon={<MdOutlineEmail size={18} />}
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              icon={<FiLogIn size={18} />}
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              icon={<FaLock size={16} />}
              placeholder="Парола"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              icon={<FaLock size={16} />}
              placeholder="Потвърждение на парола"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Action Buttons */}
            <div className="flex items-center gap-9 mt-6">
              <button
                type="button"
                onClick={() => console.log("Cancel clicked")}
                className="py-2 w-full rounded-lg bg-[var(--color-gray-light)] text-white text-2xl hover:bg-gray-300 cursor-pointer"
              >
                Отмяна
              </button>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 rounded-lg bg-[var(--color-secondary)] text-white text-2xl hover:bg-[var(--color-primary)] flex items-center justify-center relative cursor-pointer"
              >
                {loading ? "Регистриране..." : "Вход"}
                {!loading && (
                  <div className="absolute right-2">
                    <Image
                      src="/images/right-arrow.svg"
                      alt="Right Arrow"
                      width={20}
                      height={35}
                    />
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Graphic */}
        <div className="hidden md:flex justify-center items-center h-screen pr-15">
          <Image
            src="/images/auth/img-register.svg"
            alt="register graphic"
            width={1200}
            height={921}
          />
        </div>
      </div>
    </div>
  );
}
