import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { FC, useCallback } from "react"
import { FlatList, ListRenderItem, View } from "react-native"
import styled from "styled-components/native"
import { Card } from "../../molecules/card"
import { FloatingMenu } from "../../molecules/floating-menu"
import { StorageNavigationStack } from "../../types/storage-navigation-stack"

type CardsListScreenProps = NativeStackScreenProps<
  StorageNavigationStack,
  "CardsList"
>

export const CardsListScreen: FC<CardsListScreenProps> = ({ navigation }) => {
  const renderCardItem = useCallback<ListRenderItem<(typeof cardsFixture)[0]>>(
    ({ item }) => (
      <Card
        {...item}
        onDelete={() => {
          console.log("Hello world")
        }}
        onPress={() => {
          navigation.navigate("Card", {
            id: item.id,
            name: item.name,
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
        data={cardsFixture}
        renderItem={renderCardItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
      <FloatingMenu
        onAddCard={() => {
          console.log("Add card")
        }}
        onAddFolder={() => {
          console.log("Open sheet")
        }}
      />
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
]
