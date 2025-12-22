/**
 * Format date to readable string
 * @param {string | Date} dateValue - ISO string or Date object
 * @param {string} format - 'short' | 'long' | 'time'
 * @returns {string}
 */

export const formatDate = (dateValue, format = "long") => {
  if (!dateValue) return "";

  const date = new Date(dateValue);

  if (isNaN(date)) return "";

  const optionsMap = {
    short: {
      day: "2-digit",
      month: "short",
      year: "numeric",
    },
    long: {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
    time: {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  };

  return date.toLocaleDateString("en-IN", optionsMap[format]);
};
