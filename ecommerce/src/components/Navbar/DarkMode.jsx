// DarkMode.jsx
import React from "react";
import lightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

// inicialização segura (SSR-safe)
const getInitialTheme = () => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const DarkMode = () => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    // aplica a classe no <html> e persiste no localStorage
    React.useEffect(() => {
        if (typeof document === "undefined") return;
        const root = document.documentElement;
        if (theme === "dark") root.classList.add("dark");
        else root.classList.remove("dark");
        window.localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

    return (
        <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Ativar modo ${theme === "dark" ? "claro" : "escuro"}`}
            className="relative inline-flex w-12 aspect-square items-center justify-center rounded-full 
             outline-none focus:outline-none focus:ring-0 
             focus-visible:ring-2 focus-visible:ring-primary/40 
             [-webkit-tap-highlight-color:transparent]"
        >
            <img
                src={theme === "dark" ? lightButton : DarkButton}
                alt=""
                className="w-10 h-auto object-contain pointer-events-none select-none"
            />
        </button>
    );
};

export default DarkMode;
