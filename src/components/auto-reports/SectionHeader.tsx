interface headerProps {
  title: string;
  date: string;
}

const SectionHeader: React.FC<headerProps> = ({ title, date }) => {
  return (
    <>
      <h2 className="text-primary mb-1 text-center text-3xl font-semibold">
        {title}
      </h2>
      <p className="text-primary mb-3 text-center text-3xl">
        към дата: <span className="font-semibold text-gray-950">{date} г.</span>
      </p>
    </>
  );
};

export default SectionHeader;
