interface headerProps {
  number: string;
  date: string;
}

const CampaignDateAndNumber: React.FC<headerProps> = ({ number, date }) => {
  return (
    <>
      <div className="text-secondary mb-1 px-3 py-1">
        <div className="grid grid-cols-2">
          <p className="pr-2 text-left font-medium">Кампания №:</p>
          <p className="text-left text-gray-950">{number}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="pr-2 text-left font-medium">Дата:</p>
          <p className="text-left text-gray-950">{date}</p>
        </div>
      </div>
    </>
  );
};

export default CampaignDateAndNumber;
