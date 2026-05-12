import { useEffect, useState } from "react";

type Settings = {
  language: string;
  notifications: boolean;
};

function useSettingsStorage(
  key: string,
  initialValue: Settings
): [Settings, (val: Settings) => void] {

  const [settings, setSettings] = useState<Settings>(() => {
    const stored = localStorage.getItem(key);

    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(settings));
  }, [key, settings]);

  return [settings, setSettings];
}

export default useSettingsStorage;