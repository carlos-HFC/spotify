export function cn(...classes: Array<string | boolean>) {
  return classes.filter(Boolean).join(' ');
}