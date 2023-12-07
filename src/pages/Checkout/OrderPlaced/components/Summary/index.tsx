import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Summary() {
  return (
    <div
      className={`successSumaryBorder relative mt-[4rem] max-w-[52.6rem] rounded-bl-[36px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[36px] border-[1px] p-[4rem]`}
    >
      <MapPin size={16} weight="fill" />
      <div>
        <p>
          Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS
        </p>
      </div>
      <div>
        <Timer size={16} weight="fill" />
        <div>
          <p>Previsão de entrega</p>
          <span>20 min - 30 min</span>
        </div>
      </div>
      <div>
        <CurrencyDollar size={16} weight="fill" />
        <div>
          <p>Pagamento na entrega</p>
          <p>Cartão de Crédito</p>
        </div>
      </div>
    </div>
  )
}
