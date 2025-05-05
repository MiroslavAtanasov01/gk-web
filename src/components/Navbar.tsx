import styles from "@/styles/navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex place-content-around w-full">
      <div className="flex place-content-center cursor-pointer">
        <Image
          src="/images/campain/back-button.svg"
          alt="back"
          width={40}
          height={40}
        />
      </div>
      <div className="flex place-content-around  ">
        <div
          className={` ${styles.tab} flex mr-0.5 cursor-pointer`}
          style={{ borderBottomLeftRadius: 50 }}
        >
          <Image
            src="/images/campain/campain.svg"
            alt="campain"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>КАМПАНИЯ</p>
        </div>
        <div className={` ${styles.tab} mr-0.5 cursor-pointer`}>
          <Image
            src="/images/campain/topic.svg"
            alt="campain"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ТЕМИ</p>
        </div>
        <div className={` ${styles.tab} mr-0.5 cursor-pointer`}>
          <Image
            src="/images/campain/questions.svg"
            alt="campain"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ВЪПРОСИ</p>
        </div>
        <div
          className={` ${styles.tab} cursor-pointer`}
          style={{ borderBottomRightRadius: 50 }}
        >
          <Image
            src="/images/campain/answer.svg"
            alt="campain"
            width={40}
            height={40}
            className="pr-2"
          />
          <p>ОТГОВОРИ</p>
        </div>
      </div>
      <div className="flex place-content-center cursor-pointer">
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
