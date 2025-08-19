export const BRAND_COLORS = {
  darkBlue: '#1B1F3B',
  blue: '#0077B6',
  lime: '#B5E800',
  coral: '#FF6B6B',
  lightGray: '#F4F4F4',
} as const;

export type BrandColor = keyof typeof BRAND_COLORS;