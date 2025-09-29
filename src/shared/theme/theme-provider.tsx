'use client';

import React, { ReactNode, useEffect, useRef } from 'react';

type ThemeDefinition = Record<string, string>;
type Themes = Record<string, ThemeDefinition>;

interface ThemeProviderProps {
  name?: string;
  theme?: ThemeDefinition | Themes;
  children: ReactNode;
}

export function ThemeProvider({ name = 'light', theme = {}, children }: ThemeProviderProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    // se o theme for um mapa de temas
    if (name && theme && name in theme) {
      for (const [key, value] of Object.entries(theme[name])) {
        ref.current.style.setProperty(key, value);
      }
      ref.current.dataset.theme = name;
    }

    // se o theme for um objeto direto
    if (theme && !('dark' in theme)) {
      for (const [key, value] of Object.entries(theme as ThemeDefinition)) {
        ref.current.style.setProperty(key, value);
      }
      if (name) {
        ref.current.dataset.theme = name;
        document.documentElement.dataset.colorScheme = name;
      }
    }
  }, [theme, name]);

  return (
    <div ref={ref} style={{ display: 'contents' }}>
      {children}
    </div>
  );
}
