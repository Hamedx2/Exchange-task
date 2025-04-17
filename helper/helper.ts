export const DOLLAR_TO_RIAL_RATE = 880000;

export function dollarToRial(dollar: number) {
  if (dollar <= 0) return 0;
  return dollar * DOLLAR_TO_RIAL_RATE;
}

export function rialToDollar(rial: number) {
  if (rial <= 0) return 0;
  return +(rial / DOLLAR_TO_RIAL_RATE).toFixed(8);
}
