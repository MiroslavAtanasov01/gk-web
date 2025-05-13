"use client";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-5 items-center w-full px-4">
      {/* Back Button */}
      <div
        className="flex justify-center ml-5 cursor-pointer"
        onClick={() => router.back()}
      >
        <Image
          src="/images/campaign/back-button.svg"
          alt="back"
          width={40}
          height={40}
        />
      </div>

      {/* Tabs Section */}
      <div className="flex justify-center col-span-3 gap-1">
        <div
          className={`${styles.tab} flex items-center cursor-pointer`}
          style={{ borderBottomLeftRadius: 50 }}
          onClick={() => router.push("/topic-campaign")}
        >
          <Image
            src="/images/campaign/campaign-white.svg"
            alt="campaign"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>КАМПАНИЯ</p>
        </div>

        <div
          className={`${styles.tab} flex items-center cursor-pointer`}
          onClick={() => router.push("/topic-campaign")}
        >
          <Image
            src="/images/campaign/topic-white.svg"
            alt="topic"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ТЕМИ</p>
        </div>

        <div
          className={`${styles.tab} flex items-center cursor-pointer`}
          onClick={() => router.push("/questions-campaign")}
        >
          <Image
            src="/images/campaign/questions.svg"
            alt="questions"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ВЪПРОСИ</p>
        </div>

        <div
          className={`${styles.tab} flex items-center cursor-pointer`}
          style={{ borderBottomRightRadius: 50 }}
          onClick={() => router.push("/answers-campaign")}
        >
          <Image
            src="/images/campaign/answer.svg"
            alt="answers"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ОТГОВОРИ</p>
        </div>
      </div>

      {/* Logo */}
      <div className="flex justify-center">
        <div
          className="flex mr-5 justify-center cursor-pointer"
          onClick={() => router.forward()}
        >
          <Image
            src="/images/campaign/right-button.svg"
            alt="next"
            width={40}
            height={40}
          />
        </div>
        <Image
          src="/images/campaign/logo.svg"
          alt="logo"
          width={150}
          height={80}
        />
      </div>
    </div>
  );
}
