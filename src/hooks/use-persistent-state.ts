import { Dispatch, SetStateAction, useEffect, useState } from "react"

export function usePersistentState<S>(
  key: string,
  initialState: S | (() => S),
): [S, Dispatch<SetStateAction<S>>]

export function usePersistentState<S = undefined>(
  key: string,
): [S | undefined, Dispatch<SetStateAction<S | undefined>>]

export function usePersistentState<S>(
  key: string,
  initialValue?: S | (() => S),
) {
  const [state, setState] = useState()

  useEffect(() => {}, [key])

  return [state, setState]
}
