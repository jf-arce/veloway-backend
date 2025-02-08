export const generateApiKey = () => {
  return Array.from({ length: 40 }, () => Math.random().toString(36).charAt(2)).join('');
};
