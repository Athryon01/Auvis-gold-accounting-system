import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { mockUser } from "@/features/data/mockUser";
import { useIndexStore } from "@/features/store/useIndexStore";
import { cn, getCleanDisplayName } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function LoginForm({ className, ...props }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { login } = useIndexStore();
  const onSubmit = ({ email, password }) => {
    const foundUser = mockUser.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      navigate("/dashboard");
      const name = getCleanDisplayName(foundUser.email);
      login({ email: foundUser.email, name });
      toast.success("Login Successful!");
    } else if (email === "" || password === "") {
      toast.error("Please enter both email and password.");
    } else {
      toast.error("Invalid email or password.");
    }
  };
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            {...register("email")}
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            {...register("password")}
            id="password"
            type="password"
            required
          />
        </Field>
        <Field>
          <Button onClick={handleSubmit(onSubmit)} type="submit">
            Login
          </Button>
        </Field>
        <FieldSeparator>Or</FieldSeparator>
        <Field>
          <FieldDescription className="text-center">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline underline-offset-4">
              Sign up
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  );
}
