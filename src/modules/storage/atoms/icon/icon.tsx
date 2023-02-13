import { FC } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"

const CardsAmount: FC<SvgProps> = (props) => {
  const theme = useCurrectTheme()

  return (
    <Svg width={16} height={16} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M13.333 14.667H6a1.333 1.333 0 0 1-1.333-1.334V6.667A1.333 1.333 0 0 1 6 5.333h7.333a1.333 1.333 0 0 1 1.334 1.334v6.666c0 .737-.597 1.334-1.334 1.334v0Z"
        stroke={theme.Color.Neutral200}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="m11.713 5.333-.511-2.898a1.333 1.333 0 0 0-1.545-1.081L2.435 2.627a1.333 1.333 0 0 0-1.081 1.545l1.157 6.565a1.333 1.333 0 0 0 1.545 1.082l.61-.108"
        stroke={theme.Color.Neutral200}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const Icon = {
  CardsAmount,
}
