const NumberUtils = {
  format: (number, decimalPlaces = 2) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(number);
  },
};

export default NumberUtils;
