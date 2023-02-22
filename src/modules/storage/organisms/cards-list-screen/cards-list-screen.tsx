import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC, useCallback } from "react"
import { FlatList, ListRenderItem, View } from "react-native"
import styled from "styled-components/native"
import { useModal } from "../../../../hooks/use-modal"
import { Card } from "../../molecules/card"
import { FloatingMenu } from "../../molecules/floating-menu"
import { StorageNavigationStack } from "../../types/storage-navigation-stack"
import { CardSettingForm } from "../card-settings-form"

type CardsListScreenProps = NativeStackScreenProps<
  StorageNavigationStack,
  "CardsList"
>

export const CardsListScreen: FC<CardsListScreenProps> = ({ navigation }) => {
  const cardModal = useModal()

  const renderCardItem = useCallback<ListRenderItem<(typeof cardsFixture)[0]>>(
    ({ item }) => (
      <Card
        {...item}
        onDelete={() => {
          console.log("Hello world")
        }}
        onPress={() => cardModal.open()}
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
        data={cardsFixture}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
      <FloatingMenu onAddCard={() => cardModal.open()} />
      <CardSettingForm.Modal {...cardModal.props}>
        <CardSettingForm
          isSubmitting={false}
          onSubmit={() => {
            console.log("submit")
          }}
        />
      </CardSettingForm.Modal>
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex-grow: 1;
  position: relative;
`

const cardsFixture: {
  id: string
  name: string
  status: "easy" | "normal" | "hard"
}[] = [
  {
    id: "1",
    name: "First card",
    status: "easy",
  },
  {
    id: "2",
    name: "Second card",
    status: "normal",
  },
  {
    id: "3",
    name: "Third card with really long answer text. And some loreum ipsum text goes here. Bla bla bla.",
    status: "hard",
  },
  {
    id: "4",
    name: "Fourth card with really long answer text. And some loreum ipsum text goes here. Bla bla bla.",
    status: "normal",
  },
  {
    id: "5",
    name: "First card",
    status: "easy",
  },
  {
    id: "6",
    name: "Second card",
    status: "normal",
  },
  {
    id: "7",
    name: "Third card with really long answer text. And some loreum ipsum text goes here. Bla bla bla.",
    status: "hard",
  },
  {
    id: "8",
    name: "Fourth card with really long answer text. And some loreum ipsum text goes here. Bla bla bla.",
    status: "normal",
  },
]
