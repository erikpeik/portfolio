import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const lightQuery = '(prefers-color-scheme: light)';

function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

function deviceTheme(): Theme {
  return window.matchMedia(lightQuery).matches ? 'light' : 'dark';
}

export default function ThemeToggle() {
  const { t } = useTranslation();
  const [theme, setTheme] = useState<Theme>(
    () => storedTheme() ?? deviceTheme(),
  );

  // Follow the device setting until the visitor makes an explicit choice.
  useEffect(() => {
    const media = window.matchMedia(lightQuery);
    const onChange = () => {
      if (!storedTheme()) setTheme(deviceTheme());
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable: the choice lasts for this page view only.
    }
    setTheme(next);
  };

  const target = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t(`theme.switch_${target}`)}
      className="relative cursor-pointer text-muted after:absolute after:-inset-x-2 after:-inset-y-3.5 hover:text-accent-hover"
    >
      {t(`theme.${target}`)}
    </button>
  );
}
