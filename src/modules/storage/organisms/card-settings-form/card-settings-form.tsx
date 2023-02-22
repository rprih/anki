import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { FC, useState } from "react"
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form"
import { ScrollView } from "react-native"
import styled from "styled-components/native"
import { Button } from "../../../../atoms/button"
import { Label } from "../../../../atoms/label"
import { Text } from "../../../../atoms/text"
import { InputField } from "../../../../molecules/input-field"
import { Select } from "../../atoms/select/select"
import {
  BottomSheetModal,
  BottomSheetModalProps,
} from "../../molecules/bottom-sheet-modal"

export interface CardSettingsFormData {
  folderId: string
  question: string
  answer: string
}

export interface CardSettingsFormProps {
  isSubmitting: boolean
  onSubmit: SubmitHandler<CardSettingsFormData>
  initialData?: CardSettingsFormData
}

const CardSettingsFormInternal: FC<CardSettingsFormProps> = ({
  isSubmitting,
  onSubmit,
  initialData,
}) => {
  const [isFolderSelectionOpen, setIsFolderSelectionOpen] = useState(false)
  const [folderItems, setFolderItems] = useState([
    { label: "First", value: "1" },
    { label: "Second", value: "2" },
    { label: "Third", value: "3" },
    { label: "First", value: "4" },
    { label: "Second", value: "5" },
    { label: "Third", value: "6" },
    { label: "First", value: "7" },
    { label: "Second", value: "8" },
    { label: "Third", value: "9" },
    { label: "First", value: "10" },
    { label: "Second", value: "11" },
    { label: "Third", value: "12" },
  ])

  const form = useForm<CardSettingsFormData>({
    defaultValues: initialData,
    mode: "onSubmit",
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    formState: { errors },
  } = form

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ overflow: "visible" }}
    >
      <FormProvider {...form}>
        <Label>Folder</Label>
        <Spacer space={8} />
        <Controller
          name="folderId"
          control={form.control}
          render={({ field }) => (
            <Select
              placeholder="Select folder for your card"
              open={isFolderSelectionOpen}
              value={field.value}
              setOpen={setIsFolderSelectionOpen}
              setValue={(value) => field.onChange(value)}
              setItems={setFolderItems}
              items={folderItems}
              isError={Boolean(errors.folderId)}
            />
          )}
        />
        {errors.folderId && (
          <>
            <Spacer space={8} />
            <ErrorText>{errors.folderId.message}</ErrorText>
          </>
        )}

        <Spacer space={24} />

        <Label>Front side (question)</Label>
        <Spacer space={8} />
        <Textarea
          placeholder="Enter front side information"
          name="question"
          multiline
          onFocus={() => setIsFolderSelectionOpen(false)}
          isError={Boolean(errors.question)}
        />
        {errors.question && (
          <>
            <Spacer space={8} />
            <ErrorText>{errors.question.message}</ErrorText>
          </>
        )}

        <Spacer space={24} />

        <Label>Back side (answer)</Label>
        <Spacer space={8} />
        <Textarea
          placeholder="Enter back side information"
          name="answer"
          multiline
          onFocus={() => setIsFolderSelectionOpen(false)}
          isError={Boolean(errors.answer)}
        />
        {errors.answer && (
          <>
            <Spacer space={8} />
            <ErrorText>{errors.answer.message}</ErrorText>
          </>
        )}

        <Spacer space={24} />

        <Button variant="primary" onPress={handleSubmit(onSubmit)}>
          <SaveButtonText>Save</SaveButtonText>
        </Button>
      </FormProvider>
    </ScrollView>
  )
}

const Modal: FC<BottomSheetModalProps> = ({ children, ...props }) => (
  <BottomSheetModal snapPoints={["90%"]} {...props}>
    {children}
  </BottomSheetModal>
)

const SaveButtonText = styled(Text.Button)`
  color: ${({ theme }) => theme.Color.Main0};
`

const Textarea = styled(InputField)`
  min-height: 120px;
`

const Spacer = styled.View<{ space: number }>`
  height: ${({ space }) => space}px;
`

const ErrorText = styled(Text.Hint)`
  color: ${({ theme }) => theme.Color.Attention500};
`

const schema = yup.object({
  folderId: yup.string().required("Please, select one of the folders"),
  question: yup.string().required("Please, write some question"),
  answer: yup.string().required("Please, write some answer"),
})

export const CardSettingForm = Object.assign(CardSettingsFormInternal, {
  Modal,
})
