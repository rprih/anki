import {
  BottomSheetModal as NativeBottomSheetModal,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet"
import { BlurView } from "expo-blur"
import { FC, PropsWithChildren, useEffect, useRef } from "react"
import styled from "styled-components/native"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"
import { hexToRGB } from "../../../../utils/color"

export interface BottomSheetModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose?: () => void
}

export const BottomSheetModal: FC<BottomSheetModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  const ref = useRef<NativeBottomSheetModal>(null)
  const theme = useCurrectTheme()

  useEffect(
    () => (isOpen ? ref.current?.present() : ref.current?.dismiss()),
    [isOpen],
  )

  return (
    <NativeBottomSheetModal
      keyboardBlurBehavior="restore"
      handleIndicatorStyle={{ backgroundColor: theme.Color.Neutral150 }}
      backgroundStyle={{ backgroundColor: theme.Color.Neutral100 }}
      backdropComponent={(props) => (
        <Backdrop
          {...props}
          opacity={100}
          onPress={onClose}
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        >
          <Blur intensity={16} />
        </Backdrop>
      )}
      ref={ref}
      snapPoints={[360]}
      onChange={(index) => index === -1 && onClose?.()}
    >
      <Container>{children}</Container>
    </NativeBottomSheetModal>
  )
}

const Backdrop = styled(BottomSheetBackdrop)`
  background-color: transparent;
`

const Container = styled.View`
  flex: 1;
  padding: 32px 25px;
`

const Blur = styled(BlurView)`
  flex: 1;
  background-color: ${({ theme }) => hexToRGB(theme.Color.Neutral150, 0.25)};
`
