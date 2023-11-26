import { Logo } from '../Logo'
import { Minicart } from '../Minicart'
import { UserAddress } from '../UserAddress'

export function Header() {
  return (
    <header className="containerArea flex justify-between py-[3.2rem]">
      <Logo />
      <nav className="flex gap-[1.2rem]">
        <UserAddress />
        <Minicart />
      </nav>
    </header>
  )
}
