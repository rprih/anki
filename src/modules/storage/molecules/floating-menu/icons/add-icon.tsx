import { FC } from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

export const AddIcon: FC<SvgProps> = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 10.875c.621 0 1.125.504 1.125 1.125v12a1.125 1.125 0 0 1-2.25 0V12c0-.621.504-1.125 1.125-1.125Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.875 18c0-.621.504-1.125 1.125-1.125h12a1.125 1.125 0 0 1 0 2.25H12A1.125 1.125 0 0 1 10.875 18Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 5.625c-6.835 0-12.375 5.54-12.375 12.375S11.165 30.375 18 30.375 30.375 24.835 30.375 18 24.835 5.625 18 5.625Zm0-2.25C9.922 3.375 3.375 9.922 3.375 18S9.922 32.625 18 32.625 32.625 26.078 32.625 18 26.078 3.375 18 3.375Z"
      fill="#fff"
    />
  </Svg>
)
