import DropDownPicker, {
  DropDownPickerProps,
  ValueType,
} from "react-native-dropdown-picker"
import { useCurrectTheme } from "../../../../hooks/use-current-theme"
import { Icon } from "../icon"

export type SelectProps<T> = DropDownPickerProps<T> & {
  isError?: boolean
}

export function Select<T extends ValueType>({
  isError,
  ...props
}: SelectProps<T>) {
  const theme = useCurrectTheme()

  let borderColor = theme.Color.Neutral150

  if (props.open) {
    borderColor = theme.Color.Main500
  }

  if (isError) {
    borderColor = theme.Color.Attention500
  }

  return (
    <DropDownPicker
      listMode="SCROLLVIEW"
      disableBorderRadius={false}
      showTickIcon={false}
      style={{
        backgroundColor: theme.Color.Neutral100,
        borderColor: borderColor,
        overflow: "visible",
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
      }}
      placeholderStyle={{
        color: theme.Color.Neutral300,
        fontWeight: "600",
        fontSize: 14,
        lineHeight: 24,
      }}
      modalContentContainerStyle={{ overflow: "visible" }}
      searchContainerStyle={{
        borderBottomColor: borderColor,
      }}
      textStyle={{
        color: theme.Color.Neutral500,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 24,
      }}
      containerStyle={{
        overflow: "visible",
      }}
      dropDownContainerStyle={{
        backgroundColor: theme.Color.Neutral100,
        overflow: "visible",
        marginVertical: 8,
        borderColor: "transparent",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.24,
        shadowRadius: 16,
      }}
      listItemLabelStyle={{
        color: theme.Color.Neutral500,
        fontWeight: "500",
        fontSize: 14,
        lineHeight: 24,
      }}
      ArrowUpIconComponent={() => <Icon.Arrow />}
      ArrowDownIconComponent={() => (
        <Icon.Arrow style={{ transform: [{ rotate: "180deg" }] }} />
      )}
      {...props}
    />
  )
}
