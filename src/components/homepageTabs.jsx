import Image from "next/image";
import CircularProgressBar from "@/components/circleProgressBar";
export default function Tab({ image, text, precents }) {
  return (
    <div className="flex items-center p-2">
      <Image
        src={image}
        alt={"icon"}
        width={50}
        height={50}
        className="rounded"
      />
      <p className="text-base flex-1 text-[var(--color-text-secondary)] pl-2">
        {text}
      </p>
      <div>
        <CircularProgressBar value={precents} />
      </div>
    </div>
  );
}
