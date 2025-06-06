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
      <div className="grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left Column: Form */}
        <div className="h-full w-full p-15">
          <Image
            src="/images/auth/logo.svg"
            alt="Account Security Graphic"
            width={700}
            height={273}
          />
          <h2 className="text-secondary b-1 mt-10 ml-13 w-md text-4xl font-bold">
            Вход в системата
          </h2>
          <p className="text-primary mb-5 ml-13 text-lg">
            Моля, въведете вашите данни по-долу.
          </p>
          <form onSubmit={handleSubmit} className="ml-13 w-sm">
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

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

            {/* Action Buttons */}
            <div className="mt-6 flex items-center gap-9">
              <button
                type="button"
                onClick={() => router.push("/register")}
                className="bg-gray-light w-full cursor-pointer rounded-lg py-2 text-2xl text-white hover:bg-gray-300"
              >
                Регистрация
              </button>
              <button
                type="submit"
                className="bg-secondary hover:bg-primary relative flex w-full cursor-pointer items-center justify-center rounded-lg py-2 text-2xl text-white"
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
        <div className="hidden h-screen items-center justify-center pr-5 md:flex">
          <Image
            src="/images/auth/img-login.svg"
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
