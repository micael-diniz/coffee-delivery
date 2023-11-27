import { MapPin } from 'phosphor-react'

export function AddressForm() {
  return (
    <div className={`mt-[0.3rem] rounded-[6px] bg-gray-200 p-[4rem]`}>
      <div>
        <div className={`flex gap-x-[0.8rem]`}>
          <MapPin size={22} className={`text-yellow-700`} />
          <div>
            <h4 className={`text-[1.6rem] leading-[130%] text-gray-800`}>
              Endereço de Entrega
            </h4>
            <p className={`text-[1.4rem] leading-[130%] text-gray-700`}>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form>
          <input type="text" placeholder="CEP" />
          <div>
            <input type="text" placeholder="Número" />
            <div>
              <input type="text" placeholder="Complemento" />
              <span>Opcional</span>
            </div>
          </div>
          <div>
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </div>
        </form>
      </div>
    </div>
  )
}
