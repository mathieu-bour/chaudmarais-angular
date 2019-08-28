export function only(raw: object, keys: string[]) {
  return Object.keys(raw)
    .filter(key => keys.includes(key))
    .reduce((obj, key) => {
      return {
        ...obj,
        [key]: raw[key]
      };
    }, {});
}
