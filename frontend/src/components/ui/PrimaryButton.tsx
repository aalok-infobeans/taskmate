interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "submit" | "button";
}

export default function PrimaryButton({
  label,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-800 transition"
    >
      {label}
    </button>
  );
}
