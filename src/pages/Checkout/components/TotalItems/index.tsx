import { Price } from '../../../../components/Price'

export function TotalItems() {
  return (
    <p>
      <span>Total de itens</span>
      <span>
        <Price value={2970} />
      </span>
    </p>
  )
}
