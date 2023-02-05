import { FC } from "react"
import { useController } from "react-hook-form"
import { Input, InputProps } from "../../atoms/input"

export interface InputFieldProps extends InputProps {
  name: string
}

export const InputField: FC<InputFieldProps> = ({ name, ...props }) => {
  const { field } = useController({ name })

  return (
    <Input
      value={field.value}
      onBlur={field.onBlur}
      onChangeText={field.onChange}
      {...props}
    />
  )
}
