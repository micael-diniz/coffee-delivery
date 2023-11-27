type PaymentOptionType = {
  id: string
  type: string
  title: string
}

export const paymentOptions: PaymentOptionType[] = [
  { id: '1', type: 'credit', title: 'Cartão de Crédito' },
  { id: '2', type: 'debit', title: 'Cartão de Débito' },
  { id: '3', type: 'money', title: 'Dinheiro' },
]

export function getPaymentOptions() {
  return paymentOptions
}
