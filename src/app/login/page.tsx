"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { InputField } from "@/components/InputFIeld";

import { FaLock } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, loading, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  const getStoredUsers = (): { username: string; password: string }[] => {
    try {
      const usersJson = localStorage.getItem("gk_users");
      return usersJson ? JSON.parse(usersJson) : [];
    } catch (error) {
      console.error("Failed to parse users from localStorage", error);
      return [];
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    console.log(username, password);
    if (username.trim() === "" || password.trim() === "") {
      setError("Моля, попълнете всички полета.");
      return;
    }

    const users = getStoredUsers();
    const foundUser = users.find((u) => u.username === username);

    if (foundUser && foundUser.password === password) {
      login({ username: foundUser.username });
      router.push("/");
    } else {
      setError("Invalid username or password");
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
          <h2 className="text-4xl font-bold text-[var(--color-secondary)] mb-1 mt-10 ml-13 w-md">
            Вход в системата
          </h2>
          <p className="text-lg text-[var(--color-primary)] mb-5  ml-13">
            Моля, въведете вашите данни по-долу.
          </p>
          <form onSubmit={handleSubmit} className="w-sm ml-13">
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

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            {/* Action Buttons */}
            <div className="flex items-center gap-9 mt-6">
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="py-2 w-full rounded-lg bg-[var(--color-gray-light)] text-white text-2xl hover:bg-gray-300 cursor-pointer"
              >
                Отмяна
              </button>
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-[var(--color-secondary)] text-white text-2xl hover:bg-[var(--color-primary)] flex items-center justify-center relative cursor-pointer"
              >
                Вход
                <div className="absolute right-2">
                  <Image
                    src="/images/right-arrow.svg"
                    alt="Right Arrow"
                    width={20}
                    height={35}
                  />
                </div>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Graphic */}
        <div className="hidden md:flex justify-center items-center h-screen pr-5">
          <Image
            src="/images/auth/img-login.svg"
            alt="register graphic"
            width={1200}
            height={921}
          />
        </div>
      </div>
    </div>
  );
}
