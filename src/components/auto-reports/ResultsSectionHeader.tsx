interface headerProps {
  themes: string;
  quantity: string;
}

const ResultsSectionHeader: React.FC<headerProps> = ({ themes, quantity }) => {
  return (
    <div className="text-primary space-y-1 rounded-t-xl bg-[#D7D8D9] p-3">
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Теми:</p>
        <p className="text-left text-gray-950">{themes}</p>
      </div>
      <div className="grid grid-cols-2">
        <p className="pr-2 text-left font-medium">Количество Въпроси:</p>
        <p className="text-left text-gray-950">{quantity}</p>
      </div>
    </div>
  );
};

export default ResultsSectionHeader;
