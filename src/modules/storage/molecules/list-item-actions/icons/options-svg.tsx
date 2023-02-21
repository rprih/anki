import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const OptionsSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M6.5 3H17a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 17 10H6.5A3.5 3.5 0 0 1 3 6.5v0A3.5 3.5 0 0 1 6.5 3ZM17 21H6.5A3.5 3.5 0 0 1 3 17.5v0A3.5 3.5 0 0 1 6.5 14H17a3.5 3.5 0 0 1 3.5 3.5v0A3.5 3.5 0 0 1 17 21Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.998 17a.5.5 0 1 0 .004 1 .5.5 0 0 0-.004-1M6.498 6a.5.5 0 1 0 .004 1 .5.5 0 0 0-.004-1"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
