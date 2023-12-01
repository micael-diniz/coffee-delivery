import { CoffeeList } from './components/CoffeeList'
import { Hero } from './components/Hero'

export function Home() {
  return (
    <main className={`pb-[4rem]`}>
      <Hero />
      <CoffeeList />
    </main>
  )
}
