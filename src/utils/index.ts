export function cn(...classes: Array<string | boolean | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function orderArray<T>(array: T[], key: keyof T, asc = false) {
  return [...array]?.sort((a, b) => {
    const varA = typeof a[key] === 'string' ? String(a[key]).toLowerCase() : a[key];
    const varB = typeof b[key] === 'string' ? String(b[key]).toLowerCase() : b[key];

    let order = 0;

    if (varA > varB) order = 1;
    else if (varA < varB) order = -1;

    return asc ? order * -1 : order;
  });
}