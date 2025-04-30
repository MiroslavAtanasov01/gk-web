import styles from "@/styles/navbar.module.css";

export default function Navbar() {
  return (
    <div className="flex place-content-around w-full">
      <button>left</button>
      <div className="flex place-content-around  ">
        <div className={` ${styles.tab} mr-0.5`}>
          <p>КАМПАНИЯ</p>
        </div>
        <div className={` ${styles.tab} mr-0.5`}>
          <p>ТЕМИ</p>
        </div>
        <div className={` ${styles.tab} mr-0.5`}>
          <p>ВЪПРОСИ</p>
        </div>
        <div className={` ${styles.tab}`}>
          <p>ОТГОВОРИ</p>
        </div>
      </div>
      <button>right</button>
    </div>
  );
}
