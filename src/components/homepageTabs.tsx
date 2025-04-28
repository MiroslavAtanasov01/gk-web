import Image from "next/image";
import CircularProgressBar from "@/components/circleProgressBar";

interface TabProps {
  image: string;
  text: string;
  percents: number;
}

const Tab: React.FC<TabProps> = ({ image, text, percents }) => {
  return (
    <div className="flex items-center p-2">
      <Image
        src={image}
        alt="icon"
        width={50}
        height={50}
        className="rounded"
      />
      <p className="text-base flex-1 text-text-secondary pl-2">{text}</p>
      <div>
        <CircularProgressBar value={percents} />
      </div>
    </div>
  );
};

export default Tab;
