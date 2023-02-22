import { useCallback, useState } from "react"

export interface UseModalOptions {
  initiallyOpen?: boolean
  resetDataOnClose?: boolean
}

export function useModal<T = unknown>({
  initiallyOpen = false,
  resetDataOnClose = false,
}: UseModalOptions = {}) {
  const [isOpen, setIsOpen] = useState(initiallyOpen)
  const [data, setData] = useState<T>()

  const open = useCallback((data?: T) => {
    setIsOpen(true)
    setData(data)
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    if (resetDataOnClose) {
      setData(undefined)
    }
  }, [resetDataOnClose])

  const toggle = useCallback(
    (data?: T) => (isOpen ? close() : open(data)),
    [isOpen],
  )

  return {
    open,
    close,
    toggle,
    setData,
    data,
    props: {
      isOpen,
      onClose: close,
    },
  }
}
