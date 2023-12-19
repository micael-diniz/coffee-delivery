import { MapPinLine } from 'phosphor-react'
import { TextInput } from '../../../../components/InputText'
import { useCheckout } from '../../../../contexts/CheckoutContext'

export function AddressForm() {
  const { register, addressFormErrors } = useCheckout()
  return (
    <div className={`mt-[0.3rem] rounded-[6px] bg-gray-200 p-[4rem]`}>
      <div className={`flex flex-col gap-y-[3.2rem]`}>
        <div className={`flex gap-x-[0.8rem]`}>
          <MapPinLine size={22} className={`text-yellow-700`} />
          <div>
            <h4 className={`text-[1.6rem] leading-[130%] text-gray-800`}>
              Endereço de Entrega
            </h4>
            <p className={`text-[1.4rem] leading-[130%] text-gray-700`}>
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <form className={`flex flex-col gap-y-[1.6rem]`}>
          <TextInput
            type="text"
            placeholder="CEP"
            containerStyle={`max-w-[20rem]`}
            errors={addressFormErrors}
            {...register('postalCode')}
          />
          <TextInput
            type="text"
            placeholder="Rua"
            inputStyle="w-full"
            {...register('street')}
            errors={addressFormErrors}
          />
          <div className={`flex gap-x-[1.2rem]`}>
            <TextInput
              type="text"
              placeholder="Número"
              containerStyle={`flex flex-[1]`}
              {...register('number')}
              errors={addressFormErrors}
            />
            <TextInput
              type="text"
              placeholder="Complemento"
              sufix="Opcional"
              sufixStyle={`right-[1.2rem] left-auto top-[50%] translate-y-[-50%]`}
              containerStyle={`flex flex-[2] max-w-[34.8rem]`}
              {...register('complement')}
              errors={addressFormErrors}
            />
          </div>
          <div className={`flex gap-x-[1.2rem]`}>
            <TextInput
              type="text"
              placeholder="Bairro"
              containerStyle={`flex flex-[2]`}
              {...register('neighbourhood')}
              errors={addressFormErrors}
            />
            <TextInput
              type="text"
              placeholder="Cidade"
              containerStyle={`flex flex-[3] max-w-[27.6rem]`}
              {...register('city')}
              errors={addressFormErrors}
            />
            <TextInput
              type="text"
              placeholder="UF"
              containerStyle={`flex flex-[1] max-w-[6rem]`}
              {...register('state')}
              errors={addressFormErrors}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
