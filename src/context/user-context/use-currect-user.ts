import { useState } from "react"
import { usePersistentState } from "../../hooks/use-persistent-state"
import { User } from "../../types/user"

export interface CurrentUserData {
  user: User
  token: string
}

export const useCurrectUser = () => {
  const [userState, setUserState] = usePersistentState<CurrentUserData>("user")

  return {}
}
