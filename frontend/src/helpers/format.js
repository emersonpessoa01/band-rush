/**
 * Referência ao objeto que formata números
 */
const formatter = Intl.NumberFormat("pt-BR");

const formatNumber = (number) => {
  return formatter.format(number);
};

const formatPercentage = (number) => {
  if (number) {
    return number.toFixed(2).replace(".", ",") + "%"; 
  }
};

export { formatNumber, formatPercentage };
