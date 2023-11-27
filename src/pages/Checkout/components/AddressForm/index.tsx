import { MapPin } from 'phosphor-react'

export function AddressForm() {
  return (
    <div>
      <div>
        <div>
          <MapPin size={22} />
          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
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
