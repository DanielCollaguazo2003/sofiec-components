import Big from 'big.js';

export const SfInputCurrencyController = {
  /**
   * Valida si un monto ingresado excede el límite máximo permitido (ej. para transferencias)
   */
  isValidAmount: (amount: string | number, maxLimit?: number): boolean => {
    if (!amount) return true;
    try {
      const val = new Big(amount);
      if (val.lt(0)) return false; // No negative amounts by default
      if (maxLimit !== undefined && val.gt(maxLimit)) return false;
      return true;
    } catch {
      return false;
    }
  },

  /**
   * Formatea el monto para enviar a la API (centavos o float puro)
   */
  formatToApi: (amount: string, asCents: boolean = false): number => {
    if (!amount) return 0;
    try {
      const val = new Big(amount);
      if (asCents) {
        return Number(val.times(100).toFixed(0)); // to Cents
      }
      return Number(val.toFixed(2));
    } catch {
      return 0;
    }
  }
};
