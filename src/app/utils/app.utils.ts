export const serializer = (obj): string =>
  Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');
