"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);

  // Use useLayoutEffect to avoid hydration/cascading render issues
  React.useLayoutEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>; // Render children without theme until client is mounted

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
