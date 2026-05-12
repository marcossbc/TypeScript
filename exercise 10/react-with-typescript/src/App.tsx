import useLocalStorage from "./hooks/useLocalStorage";
import useNumberStorage from "./hooks/useNumberStorage";
import useSettingsStorage from "./hooks/useSettingsStorage";
// import useLocalStorage from "./hooks/useLocalStorage";

function App() {

  // 1
  const [count, setCount] = useNumberStorage("count", 0);

  // 2
  const [settings, setSettings] = useSettingsStorage("settings", {
    language: "English",
    notifications: true,
  });

  // 3
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div>

      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>Settings</h2>
      <p>Language: {settings.language}</p>
      
      <button onClick={() => setSettings({ ...settings, notifications: !settings.notifications })}>
        Toggle Notifications
      </button>

      <h2>Theme: {theme}</h2>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Toggle Theme
      </button>

    </div>
  );
}

export default App;