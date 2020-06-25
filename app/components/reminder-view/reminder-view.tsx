import * as React from "react"
import { View } from "react-native"

import { ReminderViewProps } from "./reminder-view.props"
import { DefaultTextInput } from "../"
import STYLES from "./reminder-view.styles"
import { CheckList } from "../check-list/check-list"

export const ReminderView: React.FunctionComponent<ReminderViewProps> = ({
  reminder,
  onAddCheckItem,
  onChangeReminderField,
  onChangeReminderListItem,
}) => {
  return (
    <View style={STYLES.CONTAINER}>
      <DefaultTextInput
        value={reminder.title}
        onChangeText={(value: string) => onChangeReminderField("title", value)}
        placeholder="Name"
        style={STYLES.TITLE_INPUT}
      />
      <DefaultTextInput
        value={reminder.description}
        onChangeText={(value: string) => onChangeReminderField("description", value)}
        placeholder="Description (optional)"
      />
      <View style={STYLES.DIVIDER} />
      <CheckList
        data={reminder.list}
        onItemChangeText={(listItemId: string, value: string) =>
          onChangeReminderListItem(listItemId, "title", value)
        }
        onItemPress={(listItemId: string, value: boolean) =>
          onChangeReminderListItem(listItemId, "isDone", value)
        }
      />
      {/* <TouchableOpacity onPress={onAddCheckItem}></TouchableOpacity> */}
    </View>
  )
}
