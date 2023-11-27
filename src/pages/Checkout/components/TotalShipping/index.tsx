import { Price } from '../../../../components/Price'

export function TotalShipping() {
  return (
    <p>
      <span>Entrega</span>
      <span>
        <Price value={350} />
      </span>
    </p>
  )
}
