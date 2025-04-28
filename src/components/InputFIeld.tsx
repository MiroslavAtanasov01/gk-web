export const InputField = ({
  icon,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-center border-2 border-[var(--color-secondary)] rounded-2xl mb-4 p-2 bg-white focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:border-[var(--color-primary)] transition duration-200">
    <span className="text-gray-400 mr-3">{icon}</span>
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="flex-grow outline-none bg-transparent placeholder-gray-400 text-gray-800"
      aria-label={placeholder}
      required
    />
  </div>
);
