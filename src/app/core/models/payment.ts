export enum PaymentMethod {
  Bank = 'BANK',
  CreditCard = 'CREDIT_CARD',
  Cash = 'CASH',
}

export interface StripePaymentIntent {
  clientSecret: string;
  publishableKey: string;
}
