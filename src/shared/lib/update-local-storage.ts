export const updateLocalStorage = (key: string, payload?: unknown) => {
  payload
    ? localStorage.setItem(key, String(payload))
    : localStorage.removeItem(key);
};