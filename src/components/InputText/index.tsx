import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
  sufixStyle?: string
  containerStyle?: string
  inputStyle?: string
  name: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      sufix,
      sufixStyle,
      containerStyle,
      inputStyle,
      name,
      ...props
    }: TextInputProps,
    ref,
  ) => {
    const isError = Boolean(name)
    const errorClass = isError && 'border-yellow-700'
    return (
      <div className={twMerge(`relative flex-col`, containerStyle)}>
        <input
          ref={ref}
          className={twMerge(
            'focus-visible:plaholder:text-[0px] w-full rounded-[4px] border-[2px] border-gray-400 border-transparent bg-gray-300 p-[1.2rem] text-[1.4rem] text-gray-700 placeholder:text-gray-600 focus-visible:outline-yellow-700',
            inputStyle,
            errorClass,
          )}
          {...props}
        />
        {!!sufix && (
          <span
            className={twMerge(
              `absolute text-[1.2rem] italic text-gray-600`,
              sufixStyle,
            )}
          >
            {sufix}
          </span>
        )}
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'
