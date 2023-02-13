import { FC } from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

export interface TabNavigationIconProps extends SvgProps {
  focused: boolean
  color: string
  size: number
}

const Feed: FC<TabNavigationIconProps> = ({ color, size, ...props }) => (
  <Svg width={size} height={size} fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.75 5A2.75 2.75 0 0 1 6.5 2.25h7A2.75 2.75 0 0 1 16.25 5v1.25h1.25A2.75 2.75 0 0 1 20.25 9v10a2.75 2.75 0 0 1-2.75 2.75h-7A2.75 2.75 0 0 1 7.75 19v-1.25H6.5A2.75 2.75 0 0 1 3.75 15V5Zm5.5 12.75V19c0 .69.56 1.25 1.25 1.25h7c.69 0 1.25-.56 1.25-1.25V9c0-.69-.56-1.25-1.25-1.25h-1.25V15a2.75 2.75 0 0 1-2.75 2.75H9.25ZM14.75 7v8c0 .69-.56 1.25-1.25 1.25h-7c-.69 0-1.25-.56-1.25-1.25V5c0-.69.56-1.25 1.25-1.25h7c.69 0 1.25.56 1.25 1.25v2Z"
      fill={color}
    />
  </Svg>
)

const Storage: FC<TabNavigationIconProps> = ({ color, size, ...props }) => (
  <Svg width={size} height={size} fill="none" {...props}>
    <Path
      d="M5.998 5.997h12.005m-10.005-3h8.004M9.499 12.75h5.002m3.382 8.254H6.117a2.401 2.401 0 0 1-2.39-2.162l-.72-7.203a2.401 2.401 0 0 1 2.39-2.64h13.205a2.4 2.4 0 0 1 2.389 2.64l-.72 7.203a2.401 2.401 0 0 1-2.39 2.162Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

const Settings: FC<TabNavigationIconProps> = ({ color, size, ...props }) => (
  <Svg width={size} height={size} fill="none" {...props}>
    <Path
      clipRule="evenodd"
      d="M14.796 3H9.204a2.25 2.25 0 0 0-1.59.66L3.659 7.613C3.237 8.036 3 8.607 3 9.204v5.593c0 .596.237 1.169.66 1.59l3.954 3.955c.422.42.993.658 1.59.658h5.593c.596 0 1.169-.237 1.59-.66l3.955-3.954c.42-.421.658-.993.658-1.59V9.204c0-.596-.237-1.168-.66-1.59l-3.954-3.955A2.249 2.249 0 0 0 14.796 3Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      clipRule="evenodd"
      d="M15.182 8.818a4.5 4.5 0 1 1-6.364 6.364 4.5 4.5 0 0 1 6.364-6.364Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export const TabNavigationIcon = {
  Feed,
  Storage,
  Settings,
}
