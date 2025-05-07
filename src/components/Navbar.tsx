"use client";

import styles from "@/styles/navbar.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="flex place-content-around w-full">
      <div
        className="flex place-content-center cursor-pointer"
        onClick={() => router.back()} // Go to previous page
      >
        <Image
          src="/images/campain/back-button.svg"
          alt="back"
          width={40}
          height={40}
        />
      </div>

      <div className="flex place-content-around">
        <div
          className={`${styles.tab} flex mr-0.5 cursor-pointer`}
          style={{ borderBottomLeftRadius: 50 }}
          onClick={() => router.push("/newCampain")}
        >
          <Image
            src="/images/campain/campain-white.svg"
            alt="campain"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>КАМПАНИЯ</p>
        </div>

        <div
          className={`${styles.tab} mr-0.5 cursor-pointer`}
          // onClick={() => router.push("/topics")}
        >
          <Image
            src="/images/campain/topic-white.svg"
            alt="topic"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ТЕМИ</p>
        </div>

        <div
          className={`${styles.tab} mr-0.5 cursor-pointer`}
          // onClick={() => router.push("/questions")}
        >
          <Image
            src="/images/campain/questions.svg"
            alt="questions"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ВЪПРОСИ</p>
        </div>

        <div
          className={`${styles.tab} cursor-pointer`}
          style={{ borderBottomRightRadius: 50 }}
          // onClick={() => router.push("/answers")}
        >
          <Image
            src="/images/campain/answer.svg"
            alt="answers"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ОТГОВОРИ</p>
        </div>
      </div>

      <div
        className="flex place-content-center cursor-pointer"
        onClick={() => router.forward()} // Go to next page in history
      >
        <Image
          src="/images/campain/right-button.svg"
          alt="next"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}
