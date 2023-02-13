import { useBottomSheetInternal } from "@gorhom/bottom-sheet"
import { FC, useCallback } from "react"
import { useController } from "react-hook-form"
import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native"
import { Input, InputProps } from "../../atoms/input"

export interface InputFieldProps extends InputProps {
  name: string
}

export const InputField: FC<InputFieldProps> = ({
  name,
  onBlur,
  onFocus,
  ...props
}) => {
  const { field } = useController({ name })
  const { shouldHandleKeyboardEvents } = useBottomSheetInternal()

  const handleOnFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = true
      onFocus?.(e)
    },
    [onFocus, shouldHandleKeyboardEvents],
  )
  const handleOnBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      shouldHandleKeyboardEvents.value = false
      field.onBlur()
      onBlur?.(e)
    },
    [onBlur, field.onBlur, shouldHandleKeyboardEvents],
  )

  return (
    <Input
      value={field.value}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
      onChangeText={field.onChange}
      {...props}
    />
  )
}
