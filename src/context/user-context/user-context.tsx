import { FC, PropsWithChildren } from "react"
import { User } from "../../types/user"
import { createContext } from "../../utils/context"

export interface UserContextOptions {
  user?: User
  token?: string
}

const [InternalProvider, useUserContext] = createContext<UserContextOptions>()

const UserContextProvider: FC<PropsWithChildren> = ({ children }) => {
  return <InternalProvider value={{}}>{children}</InternalProvider>
}

export { UserContextProvider, useUserContext }
