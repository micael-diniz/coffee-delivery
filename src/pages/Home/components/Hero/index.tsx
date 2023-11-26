import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import heroIllustration from '../../../../assets/hero-illustration.png'
import heroBackground from '../../../../assets/hero-background.svg'

export function Hero() {
  return (
    <section className={`relative flex justify-between py-[9.2rem]`}>
      <img src={heroBackground} alt="" className={`absolute w-screen`} />
      <div className={`containerArea flex w-full justify-between`}>
        <article className="max-w-[58.8rem]">
          <h3 className="mb-[1.6rem] font-baloo2 text-[4.8rem] font-extrabold text-gray-900">
            Encontre o café perfeito para qualquer hora do dia
          </h3>
          <p className="mb-[6.6rem] text-[2rem] text-gray-800">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <div className="flex justify-between">
            <ul className="flex flex-col flex-wrap gap-y-[2rem]">
              <li className="flex items-center gap-x-[1.2rem]">
                <span className="inline-block rounded-full bg-yellow-700 p-[0.8rem]">
                  <ShoppingCart size={16} weight="fill" color="white" />
                </span>
                <p className="text-[1.6rem] text-gray-700">
                  Compra simples e segura
                </p>
              </li>
              <li className="flex items-center gap-x-[1.2rem]">
                <span className="inline-block rounded-full bg-yellow-500 p-[0.8rem]">
                  <Timer size={16} weight="fill" color="white" />
                </span>
                <p className="text-[1.6rem] text-gray-700">
                  Entrega rápida e rastreada
                </p>
              </li>
            </ul>
            <ul className="flex flex-col flex-wrap gap-y-[2rem]">
              <li className="flex items-center gap-x-[1.2rem]">
                <span className="inline-block rounded-full bg-gray-700 p-[0.8rem]">
                  <Package size={16} weight="fill" color="white" />
                </span>
                <p className="text-[1.6rem] text-gray-700">
                  Embalagem mantém o café intacto
                </p>
              </li>
              <li className="flex items-center gap-x-[1.2rem]">
                <span className="inline-block rounded-full bg-purple-500 p-[0.8rem]">
                  <Coffee size={16} weight="fill" color="white" />
                </span>
                <p className="text-[1.6rem] text-gray-700">
                  O café chega fresquinho até você
                </p>
              </li>
            </ul>
          </div>
        </article>
        <img src={heroIllustration} alt="" />
      </div>
    </section>
  )
}
