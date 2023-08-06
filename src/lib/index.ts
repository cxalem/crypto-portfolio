export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const truncateTitle = (
  description: string | undefined,
  lenght: number
) => {
  if (description && description.length > lenght) {
    return description.slice(0, lenght).trim() + "...";
  }
  return description;
};
