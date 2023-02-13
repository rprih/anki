import { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { useCurrectTheme } from "../../../../../hooks/use-current-theme"

export const AddFolderIcon: FC<SvgProps> = (props) => {
  const theme = useCurrectTheme()

  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        d="M20 11.272V8.94a2 2 0 0 0-2-2h-5.47a1 1 0 0 1-.828-.437l-1.405-2.066A1 1 0 0 0 9.471 4H5a2 2 0 0 0-2 2v13.5A1.5 1.5 0 0 0 4.5 21v0A1.5 1.5 0 0 0 6 19.5V13a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v1.94M13 21H4.5M20 19h-4M18 21v-4"
        stroke={theme.Color.Neutral300}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
