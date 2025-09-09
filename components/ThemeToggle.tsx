'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const startDark = saved ? saved === 'dark' : prefersDark;
    setIsDark(startDark);
    document.documentElement.classList.toggle('dark', startDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/10"
    >
      {isDark ? 'Light' : 'Dark'}
    </button>
  );
}
