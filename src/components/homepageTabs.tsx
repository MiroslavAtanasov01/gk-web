import Image from "next/image";
import CircularProgressBar from "@/components/CircleProgressBar";

interface TabProps {
  image: string;
  text: string;
  percents: number;
  onClick?: () => void;
}

const Tab: React.FC<TabProps> = ({ image, text, percents, onClick }) => {
  return (
    <div
      className="flex items-center p-2 cursor-pointer hover:bg-[radial-gradient(#D4EDFC_0%,_#FFFFFF_70%)]"
      onClick={onClick}
    >
      <Image
        src={image}
        alt="icon"
        width={50}
        height={50}
        className="rounded"
      />
      <p className="text-base flex-1 text-[var(--color-primary)] font-bold pl-2">
        {text}
      </p>
      <div>
        <CircularProgressBar value={percents} />
      </div>
    </div>
  );
};

export default Tab;
