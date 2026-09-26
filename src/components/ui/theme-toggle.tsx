import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface ThemeToggleProps {
    isScrolled?: boolean;
}

export function ThemeToggle({ isScrolled = false }: ThemeToggleProps) {
    const { theme, setTheme } = useTheme()

    return (
        <button
            type="button"
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/[0.05] dark:text-white dark:hover:bg-white/[0.1] backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-cyan-400" />
        </button>
    )
}
