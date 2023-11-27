import { Price } from '../../../../components/Price'

export function Total() {
  return (
    <p>
      <span>Total</span>
      <span>
        <Price value={3320} />
      </span>
    </p>
  )
}
