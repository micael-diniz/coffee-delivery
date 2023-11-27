import { Trash } from 'phosphor-react'
import { CoffeeType } from '../../../../@types/coffee'
import { Price } from '../../../../components/Price'
import { QuantitySelector } from '../../../../components/QuantitySelector'

type CoffeeCardCardProps = {
  coffee: CoffeeType
}
export function CoffeeCartCard({ coffee }: CoffeeCardCardProps) {
  return (
    <li>
      <img src={coffee.image} alt={coffee.name} />
      <div>
        <div>
          <h3>{coffee.name}</h3>
          <Price value={coffee.price} />
        </div>
        <div>
          <QuantitySelector />
          <button>
            <Trash size={16} /> Remover
          </button>
        </div>
      </div>
    </li>
  )
}
