const cache = Object.create(null);

export const getCachedData  = (key) => cache[key];
export const setCachedData  = (key, data) => { cache[key] = data; };
