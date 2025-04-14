import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/home-logo.svg"
        width={280}
        height={280}
        alt="Home Logo"
        priority
      />
    </div>
  );
}
