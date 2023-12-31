import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useOrder } from '../../../../../contexts/OrderContext'

export function Summary() {
  const { shipping, payment } = useOrder()
  const { address } = shipping
  return (
    <ul
      className={`successSumaryBorder relative mt-[4rem] flex max-w-[52.6rem] flex-col gap-y-[3.2rem] rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] border-[1px] p-[4rem]`}
    >
      <li className={`flex items-center gap-x-[1.2rem]`}>
        <p className={`w-fit rounded-full bg-purple-500 p-[0.8rem]`}>
          <MapPin size={16} weight="fill" className={`text-white`} />
        </p>
        <div className={`flex flex-col`}>
          <div className={`flex max-w-[31rem] gap-x-[4px]`}>
            <p
              className={`w-fit text-[1.6rem] font-bold leading-[130%] text-gray-700`}
            >
              <span
                className={`flex w-fit text-[1.6rem] font-normal leading-[130%] text-gray-700`}
              >
                Entrega em
              </span>{' '}
              {address.street}, {address.number}
              {address.complement && ', ' + address.complement}
            </p>
          </div>

          <span
            className={`text-[1.6rem] font-normal leading-[130%] text-gray-700`}
          >
            {address.city}, {address.state}
          </span>
        </div>
      </li>
      <li className={`flex items-center gap-x-[1.2rem]`}>
        <p className={`w-fit rounded-full bg-yellow-500 p-[0.8rem]`}>
          <Timer size={16} weight="fill" className={`text-white`} />
        </p>

        <div>
          <p
            className={`text-[1.6rem] font-normal leading-[130%] text-gray-700`}
          >
            Previsão de entrega
          </p>
          <span
            className={`text-[1.6rem] font-bold leading-[130%] text-gray-700`}
          >
            20 min - 30 min
          </span>
        </div>
      </li>
      <li className={`flex items-center gap-x-[1.2rem]`}>
        <p className={`w-fit rounded-full bg-yellow-700 p-[0.8rem]`}>
          <CurrencyDollar size={16} weight="fill" className={`text-white`} />
        </p>
        <div>
          <p
            className={`text-[1.6rem] font-normal leading-[130%] text-gray-700`}
          >
            Pagamento na entrega
          </p>
          <p className={`text-[1.6rem] font-bold leading-[130%] text-gray-700`}>
            {payment.title}
          </p>
        </div>
      </li>
    </ul>
  )
}
