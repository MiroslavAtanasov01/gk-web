import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = ({ title }: { title: string }) => {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between bg-white px-10 pt-5">
      <div className="flex items-center space-x-2">
        <Image
          src="/back-button.svg"
          alt="back"
          width={65}
          height={65}
          className="arrows-btn mr-10 cursor-pointer"
          onClick={() => window.history.back()}
        />
        <h1 className="text-primary nav-title text-5xl font-semibold">
          {title}
        </h1>
      </div>
      <div className="flex items-center space-x-2">
        <Image
          src="/next-button.svg"
          alt="next"
          width={65}
          height={65}
          className="arrows-btn mr-10"
        />
        <Image
          src="/images/campaigns/logo.svg"
          alt="logo"
          width={200}
          height={55}
          onClick={() => router.push("/")}
          className="nav-logo nav-logo cursor-pointer"
        />
      </div>
    </header>
  );
};

export default Header;
