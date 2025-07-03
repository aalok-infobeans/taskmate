import { useState } from "react";
import AuthLayout from "../components/layout/AuthLayout";
import InputField from "../components/ui/InputField";
import PrimaryButton from "../components/ui/PrimaryButton";
import FormFooterLink from "../components/ui/FormFooterLink";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold text-center mb-4">Signup</h2>
      <form className="space-y-4">
        <InputField
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <PrimaryButton label="Sign Up" type="submit" />
      </form>
      <FormFooterLink
        label="Already have an account?"
        linkText="Login"
        to="/login"
      />
    </AuthLayout>
  );
}
