import Image from "next/image";

const Header = ({ title }: { title: string }) => (
  <header className="flex items-center justify-between bg-white px-10 pt-5">
    <div className="flex items-center space-x-2">
      <Image
        src="/back-button.svg"
        alt="next"
        width={65}
        height={65}
        className="mr-10 cursor-pointer"
        onClick={() => window.history.back()}
      />
      <h1 className="text-primary text-5xl font-semibold">{title}</h1>
    </div>
    <div className="flex items-center space-x-2">
      <Image
        src="/next-button.svg"
        alt="next"
        width={65}
        height={65}
        className="mr-10"
      />
      <Image
        src="/images/campaigns/logo.svg"
        alt="logo"
        width={200}
        height={55}
      />
    </div>
  </header>
);

export default Header;
