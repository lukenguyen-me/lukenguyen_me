import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="rounded-full px-2"
      onClick={() => {
        if (localStorage.theme === "dark") {
          localStorage.theme = "light";
          document.documentElement.classList.remove("dark");
        } else {
          localStorage.theme = "dark";
          document.documentElement.classList.add("dark");
        }
      }}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200" />
      <Moon className="hidden h-[1.2rem] w-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200" />
    </Button>
  );
}
