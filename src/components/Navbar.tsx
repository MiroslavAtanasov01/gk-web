"use client";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="mb-3 grid w-full grid-cols-5 items-center">
      {/* Back Button */}
      <div
        className="mr-15 flex cursor-pointer justify-end"
        onClick={() => router.back()}
      >
        <Image
          src="/images/campaign/back-button.svg"
          alt="back"
          width={65}
          height={65}
          className="arrows-btn"
        />
      </div>

      {/* Tabs Section */}
      <div className="col-span-3 flex w-full justify-center gap-1">
        <div
          className={`${styles.tab} ${styles.roundedLeft} flex cursor-pointer items-center rounded-bl-[80px]`}
          onClick={() => router.push("/topic-campaign")}
        >
          <Image
            src="/images/campaign/campaign-white.svg"
            alt="campaign"
            width={50}
            height={50}
            className="pr-2"
          />
          <p className="text-2xl">КАМПАНИЯ</p>
        </div>

        <div
          className={`${styles.tab} flex cursor-pointer items-center`}
          onClick={() => router.push("/topic-campaign")}
        >
          <Image
            src="/images/campaign/topic-white.svg"
            alt="topic"
            width={50}
            height={50}
            className="pr-2"
          />
          <p className="text-2xl">ТЕМИ</p>
        </div>

        <div
          className={`${styles.tab} flex cursor-pointer items-center`}
          onClick={() => router.push("/questions-campaign")}
        >
          <Image
            src="/images/campaign/questions.svg"
            alt="questions"
            width={50}
            height={50}
            className="pr-2"
          />
          <p className="text-2xl">ВЪПРОСИ</p>
        </div>

        <div
          className={`${styles.tab} ${styles.roundedRight} flex cursor-pointer items-center rounded-br-[80px]`}
          onClick={() => router.push("/answers-campaign")}
        >
          <Image
            src="/images/campaign/answer.svg"
            alt="answers"
            width={50}
            height={50}
            className="pr-2"
          />
          <p className="text-2xl">ОТГОВОРИ</p>
        </div>
      </div>

      {/* Logo */}
      <div className="mr-5 ml-15 flex justify-start">
        <div
          className="mr-5 flex cursor-pointer justify-start"
          onClick={() => router.forward()}
        >
          <Image
            src="/images/campaign/right-button.svg"
            alt="next"
            width={65}
            height={65}
            className="arrows-btn"
          />
        </div>
        <div>
          <Image
            src="/images/campaign/logo.svg"
            alt="logo"
            width={180}
            height={60}
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
