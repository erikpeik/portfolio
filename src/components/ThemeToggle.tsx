import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';

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

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={t('theme.dark')}
      onClick={toggle}
      className="group relative flex h-[22px] w-10 cursor-pointer items-center rounded-full border border-muted after:absolute after:-inset-x-1 after:-inset-y-3 hover:border-accent-hover"
    >
      <span
        className={cn(
          'flex size-4 items-center justify-center rounded-full bg-paper text-ink transition-transform duration-150 group-hover:bg-accent-hover motion-reduce:transition-none',
          isDark ? 'translate-x-[20px]' : 'translate-x-[2px]',
        )}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}

function SunIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="size-2.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2" />
      <path d="M6 .75v1M6 10.25v1M.75 6h1M10.25 6h1M2.3 2.3l.7.7M9 9l.7.7M2.3 9.7l.7-.7M9 3l.7-.7" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 12 12"
      className="size-2.5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M10.5 7.4A4.75 4.75 0 0 1 4.6 1.5a4.75 4.75 0 1 0 5.9 5.9Z" />
    </svg>
  );
}
