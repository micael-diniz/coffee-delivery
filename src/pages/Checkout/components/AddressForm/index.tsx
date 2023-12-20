import { MapPinLine } from 'phosphor-react'
import { TextInput } from '../../../../components/InputText'
import { useOrder } from '../../../../contexts/OrderContext'
import { ChangeEvent, useCallback } from 'react'

export function AddressForm() {
  const { updateAddressField, shipping } = useOrder()

  const handlePostalCodeChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const curValue = event.target.value
      const cleanedInput = curValue.replace(/[^\d]/g, '')

      const formattedPostalCode = cleanedInput.replace(
        /(\d{5})(\d{3})/,
        '$1-$2',
      )
      if (formattedPostalCode.length > 9) return
      updateAddressField('postalCode', formattedPostalCode)
    },
    [updateAddressField],
  )

  const handleStateChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const cleanedInput = event.target.value.replace(/[^a-zA-Z]/g, '')

      if (cleanedInput.length <= 2) {
        updateAddressField('state', cleanedInput.toUpperCase())
      }
    },
    [updateAddressField],
  )

  const { address } = shipping

  const postalCodeValue = address.postalCode
  const stateValue = address.state

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
            name={'postalCode'}
            onChange={(e) => handlePostalCodeChange(e)}
            value={postalCodeValue}
            maxLength={9}
          />
          <TextInput
            type="text"
            placeholder="Rua"
            inputStyle="w-full"
            name={'street'}
            onChange={(e) => updateAddressField('street', e.target.value)}
          />
          <div className={`flex gap-x-[1.2rem]`}>
            <TextInput
              type="text"
              placeholder="Número"
              containerStyle={`flex flex-[1]`}
              name={'number'}
              onChange={(e) => updateAddressField('number', e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="Complemento"
              sufix="Opcional"
              sufixStyle={`right-[1.2rem] left-auto top-[50%] translate-y-[-50%]`}
              containerStyle={`flex flex-[2] max-w-[34.8rem]`}
              name={'complement'}
              onChange={(e) => updateAddressField('complement', e.target.value)}
            />
          </div>
          <div className={`flex gap-x-[1.2rem]`}>
            <TextInput
              type="text"
              placeholder="Bairro"
              containerStyle={`flex flex-[2]`}
              name={'neighbourhood'}
              onChange={(e) =>
                updateAddressField('neighbourhood', e.target.value)
              }
            />
            <TextInput
              type="text"
              placeholder="Cidade"
              containerStyle={`flex flex-[3] max-w-[27.6rem]`}
              name={'city'}
              onChange={(e) => updateAddressField('city', e.target.value)}
            />
            <TextInput
              type="text"
              placeholder="UF"
              containerStyle={`flex flex-[1] max-w-[6rem]`}
              name={'state'}
              onChange={handleStateChange}
              value={stateValue}
            />
          </div>
        </form>
      </div>
    </div>
  )
}
