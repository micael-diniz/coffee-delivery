import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sufix?: string
  sufixStyle?: string
  containerStyle?: string
  inputStyle?: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { sufix, sufixStyle, containerStyle, inputStyle, ...props }: TextInputProps,
    ref,
  ) => {
    return (
      <div className={twMerge(`relative`, containerStyle)}>
        <input
          ref={ref}
          className={twMerge(
            'focus-visible:plaholder:text-[0px] w-full rounded-[4px] border-[1px] border-gray-400 bg-gray-300 p-[1.2rem] text-[1.4rem] text-gray-700 placeholder:text-gray-600 focus-visible:outline-yellow-700',
            inputStyle,
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
