export const formatPrice = (price: number) => {
	return new Intl.NumberFormat("en-EN", {
		style: "currency",
		currency: "USD",
	}).format(price);
};

export const truncateTitle = (description: string | undefined) => {
    if (description && description.length > 11) {
        return description.slice(0, 11).trim() + "...";
    }
    return description;
};