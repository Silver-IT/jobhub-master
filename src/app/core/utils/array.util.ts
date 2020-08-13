export function exists(key, ary): boolean {
  const found = ary.find(p => p === key);
  return Boolean(found);
}

export function sortByProperty<T>(data: T[], field: string): T[] {
  return data.sort((a, b) => {
    const aDate = new Date(a[field]);
    const bDate = new Date(b[field]);
    return aDate > bDate ? 1 : -1;
  });
}

export function groupByArray(xs: Array<any>, key: string) {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}
