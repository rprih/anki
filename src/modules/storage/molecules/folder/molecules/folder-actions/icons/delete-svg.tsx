import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export const DeleteSvg = (props: SvgProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        clipRule="evenodd"
        d="M15.543 21.004H8.457a2.251 2.251 0 0 1-2.244-2.079L5.247 6.373h13.506l-.966 12.552a2.25 2.25 0 0 1-2.244 2.079v0Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.003 6.373H3.997"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M9.187 2.996h5.627c.621 0 1.125.504 1.125 1.126v2.25H8.061v-2.25a1.125 1.125 0 0 1 1.126-1.126Z"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 17.002h4"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}
