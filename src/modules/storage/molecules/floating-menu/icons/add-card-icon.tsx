import { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { useCurrectTheme } from "../../../../../hooks/use-current-theme"

export const AddCardIcon: FC<SvgProps> = (props) => {
  const theme = useCurrectTheme()

  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M20 22H9a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v0Z"
        stroke={theme.Color.Neutral300}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.5 15h4M14.5 17v-4M17.57 8l-.767-4.347a1.999 1.999 0 0 0-2.317-1.622L3.653 3.94a2 2 0 0 0-1.622 2.317l1.736 9.848a2 2 0 0 0 2.317 1.622L7 17.567"
        stroke={theme.Color.Neutral300}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
