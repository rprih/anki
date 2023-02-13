import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC, useCallback, useState } from "react"
import { FlatList, ListRenderItem, View } from "react-native"
import styled from "styled-components/native"
import { Folder } from "../../molecules/folder"
import { StorageNavigationStack } from "../../types/storage-navigation-stack"
import { FloatingMenu } from "../../molecules/floating-menu"
import { BottomSheetModal } from "../../molecules/bottom-sheet-modal"
import { FolderSettingsForm } from "../folder-settings-form"
import { DeleteConfirmation } from "../../molecules/delete-confirmation"

export type FoldersListScreenProps = NativeStackScreenProps<
  StorageNavigationStack,
  "Main"
>

export const FoldersListScreen: FC<FoldersListScreenProps> = ({
  navigation,
}) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false)
  const [deleteSheetIsOpen, setDeleteSheetIsOpen] = useState(false)

  const foldersListRenderer = useCallback<ListRenderItem<(typeof folders)[0]>>(
    ({ item }) => (
      <Folder
        {...item}
        onDelete={() => {
          setDeleteSheetIsOpen(true)
        }}
        onEdit={() => setSheetIsOpen(true)}
        onPress={() => {
          navigation.navigate("Folder", {
            id: item.id,
            name: item.name,
            amount: item.cardsAmount,
          })
        }}
      />
    ),
    [navigation.navigate],
  )

  return (
    <Container>
      <FlatList
        style={{
          flexGrow: 1,
          paddingTop: 24,
          paddingHorizontal: 25,
        }}
        data={folders}
        renderItem={foldersListRenderer}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
      <FloatingMenu
        onAddCard={() => {
          console.log("Add card")
        }}
        onAddFolder={() => {
          console.log("Open sheet")
          setSheetIsOpen(true)
        }}
      />

      <BottomSheetModal
        isOpen={sheetIsOpen}
        onClose={() => setSheetIsOpen(false)}
      >
        <FolderSettingsForm
          onSubmit={() => {
            //
          }}
          isSubmitting={false}
        />
      </BottomSheetModal>

      <BottomSheetModal
        isOpen={deleteSheetIsOpen}
        onClose={() => setDeleteSheetIsOpen(false)}
      >
        <DeleteConfirmation
          title="Folder deletion"
          subtitle="Are you sure want to delete this folder??"
        />
      </BottomSheetModal>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex-grow: 1;
  position: relative;
`

const folders = [
  {
    id: "1",
    name: "Hello world",
    cardsAmount: 100,
    status: {
      easy: 100 * 0.1,
      normal: 100 * 0.7,
      hard: 100 * 0.2,
    },
  },
  {
    id: "2",
    name: "BiochemistryBiochemistryBiochemistryBiochemistryiBiochemistryochemistryBiochemistryBiochemistryBiochemistryiBiochemistry",
    cardsAmount: 1000,
    status: {
      easy: 1000 * 0.1,
      normal: 1000 * 0.7,
      hard: 1000 * 0.2,
    },
  },
  ...Array.from({ length: 50 }).map((v, i) => ({
    id: String(i + 3),
    name: "BiochemistryBiochemistryBiochemistryBiochemistryiBiochemistryochemistryBiochemistryBiochemistryBiochemistryiBiochemistry",
    cardsAmount: 1000,
    status: {
      easy: 1000 * 0.1,
      normal: 1000 * 0.7,
      hard: 1000 * 0.2,
    },
  })),
]
