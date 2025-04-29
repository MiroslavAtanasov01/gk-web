"use client";

import React, { useEffect, useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import Image from "next/image";
import { InputField } from "@/components/InputFIeld";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loadingRegister, setLoading] = useState(false);
  const router = useRouter();
  const { user, loading, register } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

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

    const userData = {
      username,
      firstName,
      lastName,
      email,
    };

    const success = register(userData, password);

    if (success) {
      alert("Регистрацията е успешна!");
      setLoading(false);
      router.push("/");
      setFirstName("");
      setLastName("");
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } else {
      setError("Потребителското име вече съществува.");
      setLoading(false);
    }
  };

  if (loading) return <div>Зареждане...</div>;

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
              name="firstName"
              icon={<FaUser size={16} />}
              placeholder="Име"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputField
              name="lastName"
              icon={<FaUser size={16} />}
              placeholder="Фамилия"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputField
              name="email"
              icon={<MdOutlineEmail size={18} />}
              placeholder="E-mail"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              name="username"
              icon={<FiLogIn size={18} />}
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              name="password"
              icon={<FaLock size={16} />}
              placeholder="Парола"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputField
              name="confirmPassword"
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
                onClick={() => router.push("/login")}
                className="py-2 w-full rounded-lg bg-[var(--color-gray-light)] text-white text-2xl hover:bg-gray-300 cursor-pointer"
              >
                Отмяна
              </button>
              <button
                type="submit"
                disabled={loadingRegister}
                className="w-full py-2 rounded-lg bg-[var(--color-secondary)] text-white text-2xl hover:bg-[var(--color-primary)] flex items-center justify-center relative cursor-pointer"
              >
                {loadingRegister ? "Регистриране..." : "Вход"}
                {!loadingRegister && (
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
