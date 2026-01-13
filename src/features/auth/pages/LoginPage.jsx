import { LoginForm } from "@/components/login-form";
import { Button } from "@/components/ui/button";
import { GalleryVerticalEnd, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function LoginPage() {
  const { theme, setTheme } = useTheme();
  const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Athryon Dev.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
        <div>
          <Button onClick={switchTheme}>{theme === "light" ? <Moon /> : <Sun />}</Button>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/login.jpg"
          alt="Login Picture"
          className="absolute h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

export default LoginPage;
