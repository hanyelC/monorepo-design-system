import { ComponentProps } from '../../types'
import { Input, Prefix, TextInputContainer } from './styles'

export type TextInputProps = {
  prefix?: string
} & ComponentProps<typeof Input>

export function TextInput({ prefix, ...props }: TextInputProps) {
  return (
    <TextInputContainer>
      {prefix ? <Prefix>{prefix}</Prefix> : null}
      <Input {...props} />
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
