import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { FC } from "react"
import { FormProvider, SubmitHandler, useForm } from "react-hook-form"
import styled from "styled-components/native"
import { Text } from "../../../../atoms/text"
import { View } from "react-native"
import { InputField } from "../../../../molecules/input-field/input-field"
import { Label } from "../../../../atoms/label"
import { Button } from "../../../../atoms/button"
import { BottomSheetTextInput } from "@gorhom/bottom-sheet"

export interface FolderSettingsFormData {
  name: string
}

export interface FolderSettingsFormProps {
  initialData?: FolderSettingsFormData
  onSubmit: SubmitHandler<FolderSettingsFormData>
  isSubmitting: boolean
}

export const FolderSettingsForm: FC<FolderSettingsFormProps> = ({
  initialData,
  onSubmit,
  isSubmitting,
}) => {
  const form = useForm<FolderSettingsFormData>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: initialData,
  })

  const {
    formState: { errors },
    handleSubmit,
  } = form

  const isEditing = Boolean(initialData)

  return (
    <FormProvider {...form}>
      <Container>
        <Title>{isEditing ? "Folder editing" : "Folder creating"}</Title>
        <View style={{ height: 24 }} />
        <Label>Folder name</Label>
        <View style={{ height: 8 }} />
        <InputField
          name={"name"}
          placeholder="Enter folder name"
          isError={Boolean(errors.name?.message)}
        />
        {errors.name?.message && (
          <>
            <View style={{ height: 8 }} />
            <ErrorText>{errors.name?.message}</ErrorText>
          </>
        )}

        <View style={{ height: 24 }} />
        <Button onPress={handleSubmit(onSubmit)}>
          <ActionText>{isEditing ? "Save" : "Create"}</ActionText>
        </Button>
      </Container>
    </FormProvider>
  )
}

const Container = styled.View`
  flex: 1;
`

const Title = styled(Text.Title)`
  text-align: center;
`

const ActionText = styled(Text.Button)`
  color: ${({ theme }) => theme.Color.Main0};
`

const ErrorText = styled(Text.Hint)`
  color: ${({ theme }) => theme.Color.Attention500};
`

const schema = yup.object({
  name: yup.string().min(1).required(),
})
