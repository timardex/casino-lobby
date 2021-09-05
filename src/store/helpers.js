export const errorHandler = (data, type) => {
  return Object.keys(data).includes(type);
};
