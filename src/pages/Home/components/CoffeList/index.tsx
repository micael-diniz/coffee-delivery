import { useMemo } from 'react'
import { getCoffeesList } from '../../../../services/getCoffeesList'
import { Minus, Plus } from 'phosphor-react'

export function CoffeeList() {
  const coffeeList = useMemo(() => getCoffeesList(), [])

  return (
    <section className={`containerArea`}>
      <h3>Nossos cafés</h3>
      <ul>
        {coffeeList.map((coffee) => (
          <li key={coffee.id}>
            <img src={coffee.image as string} alt={coffee.name} />
            <div>
              {coffee.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <p>{coffee.name}</p>
            <p>{coffee.description}</p>
            <div>
              <p>{coffee.price}</p>
              <div>
                <button>
                  <Minus size={14} weight="bold" className="fill-purple-500" />
                </button>
                <input type="text" value={1} onChange={() => {}} />
                <button>
                  <Plus size={16} weight="bold" className="fill-purple-500" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
