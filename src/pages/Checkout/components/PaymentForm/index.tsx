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
    <div
      className={`mt-[0.3rem] flex flex-col gap-y-[3.2rem] rounded-[6px] bg-gray-200 p-[4rem]`}
    >
      <div className={`flex gap-x-[0.8rem]`}>
        <CurrencyDollar size={22} className={`text-purple-500`} />
        <div>
          <h4 className={`text-[1.6rem] leading-[130%] text-gray-800`}>
            Pagamento
          </h4>
          <p className={`text-[1.4rem] leading-[130%] text-gray-700`}>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className={`flex gap-x-[1.2rem]`}>
        {paymentOptions.map((payment) => {
          const PaymentIcon = paymentIcons.find(
            (icon) => icon.type === payment.type,
          )?.Icon
          return (
            <button
              key={payment.id}
              className={`flex flex-1 gap-x-[1.2rem] rounded-[6px] bg-gray-400 p-[1.6rem] text-[1.2rem] uppercase`}
            >
              {PaymentIcon && (
                <PaymentIcon size={16} className={`text-purple-500`} />
              )}
              {payment.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
