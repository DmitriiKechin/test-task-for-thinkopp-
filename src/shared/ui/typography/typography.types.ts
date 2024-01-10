export interface TypographyProps {
  variant?: 'h1' | 'h4' | 'body' | 'label';
  component?: 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  className?: string;
  children: React.ReactNode;
}
