import type { ThemeTokens } from "@/core/tenant/tenant.types";

// CSS variables and HSL values continue to live in src/index.css.
// This module exposes the brand token names so components/features can
// reference them via the tenant contract instead of hardcoding strings.
export const theme: ThemeTokens = {
  brand: {
    primary: "sage",
    accent: "toffee",
  },
};
