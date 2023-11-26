import { twMerge } from 'tailwind-merge'

type PriceProps = {
  value: number
  className?: string
  currencyStyle?: string
  valueStyle?: string
}

export function Price({
  value,
  className,
  currencyStyle = '',
  valueStyle = '',
}: PriceProps) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value / 100)
  return (
    <p className={twMerge('text-[1.6rem] text-gray-700', className)}>
      <span className={currencyStyle}>{formattedValue.substring(0, 2)}</span>
      <span className={valueStyle}>{formattedValue.substring(2)}</span>
    </p>
  )
}
