import { Link } from "react-router-dom";

interface Props {
  label: string;
  linkText: string;
  to: string;
}

export default function FormFooterLink({ label, linkText, to }: Props) {
  return (
    <p className="text-sm text-center mt-4">
      {label}{" "}
      <Link to={to} className="text-blue-700 font-medium hover:underline">
        {linkText}
      </Link>
    </p>
  );
}
