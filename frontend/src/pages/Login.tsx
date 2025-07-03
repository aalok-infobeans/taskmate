import { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";
import FormFooterLink from "../components/ui/FormFooterLink";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
      <form className="space-y-4">
        <InputField
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PrimaryButton label="Login" type="submit" />
      </form>
      <FormFooterLink
        label="Don't have an account?"
        linkText="Signup"
        to="/signup"
      />
    </AuthLayout>
  );
}
