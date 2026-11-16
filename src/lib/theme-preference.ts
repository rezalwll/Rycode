export const themeStorageKey = "rycode-theme";

export const initializeTheme = `(() => {
  try {
    const mode = localStorage.getItem(${JSON.stringify(themeStorageKey)});
    const prefersDark = mode === "system" && matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", mode === "dark" || prefersDark);
  } catch {}
})();`;
