export const normalizePhoneNumber = (value: string | undefined) => {
  if (!value) return "";

  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")
    .slice(0, 12);
};
