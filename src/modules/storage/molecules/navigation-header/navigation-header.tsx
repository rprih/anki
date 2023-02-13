import { FC, PropsWithChildren } from "react"
import styled from "styled-components/native"

export const NavigationHeader: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Wrapper>{children}</Wrapper>
  </Container>
)

const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.Color.Neutral100};
`

const Wrapper = styled.View`
  padding: 8px 25px;
  flex-direction: row;
  align-items: center;
`
