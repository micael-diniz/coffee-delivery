import { useMemo } from 'react'
import { getCoffeesList } from '../../../../services/getCoffeesList'
import { CoffeeCard } from '../CoffeeCard'
export function CoffeeList() {
  const coffeeList = useMemo(() => getCoffeesList(), [])

  return (
    <section
      className={`containerArea flex flex-col gap-y-[5.4rem] pt-[3.2rem]`}
    >
      <h3 className={`font-baloo2 text-[3.2rem] font-extrabold text-gray-800`}>
        Nossos cafés
      </h3>
      <ul className={`flex flex-wrap gap-x-[3.2rem] gap-y-[4rem]`}>
        {coffeeList.map(
          (coffee) =>
            coffee.available && <CoffeeCard key={coffee.id} coffee={coffee} />,
        )}
      </ul>
    </section>
  )
}
