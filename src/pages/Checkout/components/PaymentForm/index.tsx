import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { getPaymentOptions } from '../../../../services/getPaymentOptions'
import { useCallback, useMemo } from 'react'
import { useOrder } from '../../../../contexts/OrderContext'
import { PaymentType } from '../../../../@types/payment'
import { twMerge } from 'tailwind-merge'
import toast, { Toaster } from 'react-hot-toast'

export function PaymentForm() {
  const { updatePaymentMethod, payment } = useOrder()
  const paymentOptions = useMemo(() => getPaymentOptions(), [])
  const paymentIcons = useMemo(
    () => [
      { type: 'credit', Icon: CreditCard },
      { type: 'debit', Icon: Bank },
      { type: 'money', Icon: Money },
    ],
    [],
  )

  const handleUpdatePaymentMethod = useCallback(
    (payment: PaymentType) => {
      console.log('here')
      updatePaymentMethod(payment)
      toast.dismiss()
      toast.success('Pagamento atualizado!', {
        duration: 50000,
        position: 'top-center',
      })
    },
    [updatePaymentMethod],
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
        {paymentOptions.map((pay) => {
          const PaymentIcon = paymentIcons.find(
            (icon) => icon.type === pay.type,
          )?.Icon
          const currentPaymentSelected = pay.id === payment.id
          return (
            <button
              key={pay.id}
              onClick={() => handleUpdatePaymentMethod(pay)}
              className={twMerge(
                `flex flex-1 gap-x-[1.2rem] rounded-[6px] border-[1px] border-transparent bg-gray-400 p-[1.6rem] text-[1.2rem] uppercase transition hover:bg-gray-500`,
                currentPaymentSelected && `border-purple-500 bg-purple-100`,
              )}
            >
              {PaymentIcon && (
                <PaymentIcon size={16} className={` text-purple-500`} />
              )}
              {pay.title}
            </button>
          )
        })}
        <Toaster
          toastOptions={{
            className: `toastOptions text-[1.6rem]`,
          }}
        />
      </div>
    </div>
  )
}
