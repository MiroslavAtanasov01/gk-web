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
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left Column: Form */}
        <div className="h-full w-full p-15">
          <Image
            src="/images/auth/logo.svg"
            alt="Account Security Graphic"
            width={700}
            height={273}
          />
          <h2 className="text-secondary mt-10 mb-5 ml-13 w-md text-4xl font-bold">
            Регистрация на първи потребител
          </h2>
          <form onSubmit={handleSubmit} className="ml-13 w-sm">
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

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center gap-9">
              <button
                type="button"
                onClick={() => router.push("/login")}
                className="bg-gray-light w-full cursor-pointer rounded-lg py-2 text-2xl text-white hover:bg-gray-300"
              >
                Отмяна
              </button>
              <button
                type="submit"
                disabled={loadingRegister}
                className="bg-secondary hover:bg-primary relative flex w-full cursor-pointer items-center justify-center rounded-lg py-2 text-2xl text-white"
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
        <div className="hidden h-screen items-center justify-center pr-15 md:flex">
          <Image
            src="/images/auth/img-register.svg"
            alt="register graphic"
            width={1200}
            height={921}
          />
        </div>
      </div>
      <footer className="fixed right-0 bottom-0 z-50 mr-2 mb-1 text-right">
        <p className="rounded bg-white/80 px-2 text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Interactive Business Partners
          Petersburg
        </p>
      </footer>
    </div>
  );
}
