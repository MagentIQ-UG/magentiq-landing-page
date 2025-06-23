// MagentIQ Brand Constants
// Based on official brand guidelines

export const COLORS = {
  // Primary Brand Colors
  BRAND_BLUE: '#0056b3',
  BRAND_BLACK: '#000000',
  PRIMARY_TEXT: '#1e1e1e',
  
  // Extended Primary Palette
  PRIMARY: {
    50: '#eff8ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#0056b3',
    600: '#004a9f',
    700: '#003d8a',
    800: '#003176',
    900: '#002662',
  },
  
  // Neutral Colors
  NEUTRAL: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Semantic Colors
  SUCCESS: '#10b981',
  WARNING: '#f59e0b',
  ERROR: '#ef4444',
  INFO: '#3b82f6',
} as const;

export const TYPOGRAPHY = {
  // Font Families
  FONT_PRIMARY: "'Inter', Arial, sans-serif",
  
  // Font Weights
  WEIGHT: {
    LIGHT: 300,
    REGULAR: 400,
    MEDIUM: 500,
    SEMIBOLD: 600,
    BOLD: 700,
  },
  
  // Font Sizes (in rem)
  SIZE: {
    XS: '0.75rem',    // 12px
    SM: '0.875rem',   // 14px
    BASE: '1rem',     // 16px
    LG: '1.125rem',   // 18px
    XL: '1.25rem',    // 20px
    '2XL': '1.5rem',  // 24px
    '3XL': '1.875rem', // 30px
    '4XL': '2.25rem', // 36px
    '5XL': '3rem',    // 48px
    '6XL': '3.75rem', // 60px
    '7XL': '4.5rem',  // 72px
  },
  
  // Line Heights
  LEADING: {
    TIGHT: '1.25',
    NORMAL: '1.5',
    RELAXED: '1.75',
  },
} as const;

export const SPACING = {
  // Standard spacing scale (in rem)
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
} as const;

export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

export const GRADIENTS = {
  BRAND: 'linear-gradient(135deg, #0056b3 0%, #000000 100%)',
  HERO: 'linear-gradient(135deg, #0056b3 0%, #003d8a 50%, #000000 100%)',
  SUBTLE: 'linear-gradient(135deg, rgba(0, 86, 179, 0.1) 0%, rgba(0, 0, 0, 0.05) 100%)',
} as const;

export const SHADOWS = {
  SM: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  MD: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  LG: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  XL: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2XL': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  BRAND: '0 10px 25px -5px rgba(0, 86, 179, 0.25)',
} as const;

export const ANIMATIONS = {
  DURATION: {
    FAST: '150ms',
    DEFAULT: '200ms',
    SLOW: '300ms',
    SLOWER: '500ms',
  },
  EASING: {
    LINEAR: 'linear',
    IN: 'cubic-bezier(0.4, 0, 1, 1)',
    OUT: 'cubic-bezier(0, 0, 0.2, 1)',
    IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

export const LOGO = {
  // Logo sizing guidelines from brand guidelines
  MIN_WIDTH_DIGITAL: '150px',
  MIN_WIDTH_PRINT: '25mm',
  ASPECT_RATIO: '400/120', // Based on SVG viewBox
  
  // Logo file paths
  SVG: '/src/assets/logos/magentiq_logo.svg',
  PNG: '/src/assets/logos/magentiq_logo.png',
  JPG: '/src/assets/logos/magentiq_logo.jpg',
  FAVICON: '/src/assets/logos/favicon.svg',
  FAVICON_PNG: '/src/assets/logos/favicon-32.png',
} as const;

// Component-specific constants
export const COMPONENTS = {
  HEADER: {
    HEIGHT: '80px',
    HEIGHT_MOBILE: '64px',
  },
  FOOTER: {
    HEIGHT: '200px',
  },
  BUTTON: {
    HEIGHT: {
      SM: '36px',
      MD: '44px',
      LG: '52px',
    },
    PADDING: {
      SM: '8px 16px',
      MD: '12px 24px',
      LG: '16px 32px',
    },
  },
} as const;

export default {
  COLORS,
  TYPOGRAPHY,
  SPACING,
  BREAKPOINTS,
  GRADIENTS,
  SHADOWS,
  ANIMATIONS,
  LOGO,
  COMPONENTS,
}; 