export const InputField = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
  name,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}) => (
  <div className="flex items-center border-2 border-secondary)] rounded-2xl mb-4 p-2 bg-white focus-within:ring-2 focus-within:ring-primary focus-within:border-primary transition duration-200">
    <span className="text-gray-400 mr-3">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className="flex-grow outline-none bg-transparent placeholder-gray-400 text-gray-800"
      aria-label={placeholder}
    />
  </div>
);
