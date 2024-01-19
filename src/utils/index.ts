export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export function convertMinutesToHours(value: number) {
  const hours = Math.floor(value / 60);
  const minutes = value % 60;

  return `${hours}h ${minutes.toString().padStart(2, '0')}min`;
}