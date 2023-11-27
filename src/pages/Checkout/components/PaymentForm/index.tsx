import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { getPaymentOptions } from '../../../../services/getPaymentOptions'
import { useMemo } from 'react'

export function PaymentForm() {
  const paymentOptions = useMemo(() => getPaymentOptions(), [])
  const paymentIcons = useMemo(
    () => [
      { type: 'credit', Icon: CreditCard },
      { type: 'debit', Icon: Bank },
      { type: 'money', Icon: Money },
    ],
    [],
  )
  return (
    <div>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <h4>Pagamento</h4>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div>
        {paymentOptions.map((payment) => {
          const PaymentIcon = paymentIcons.find(
            (icon) => icon.type === payment.type,
          )?.Icon
          return (
            <button key={payment.id}>
              {PaymentIcon && <PaymentIcon size={16} />}
              {payment.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
