import * as React from "react"
import { observer } from "mobx-react-lite"

// import { useStores } from "../models/root-store"
import { ReminderAddScreenProps } from "./props"
import ReminderAdd from "./reminder-add"
import { EMPTY_REMINDER } from "../../../utils/constants"

export const ReminderAddScreen: React.FunctionComponent<ReminderAddScreenProps> = observer(
  ({ navigation }) => {
    // const { someStore } = useStores()
    const [isEdit] = React.useState(!!navigation.getParam("item"))
    const [item, setItem] = React.useState(navigation.getParam("item", EMPTY_REMINDER))

    const onBackPress = () => navigation.goBack()

    const onReminderChangeField = (key: string, value: string) => setItem({ ...item, [key]: value })

    const onAddCheckItem = (title: string) => {
      const newList = [...item.list]
      newList.push({ title, isDone: false })
      setItem({ ...item, list: newList })
    }

    return (
      <ReminderAdd
        onBackPress={onBackPress}
        item={item}
        onReminderChangeField={onReminderChangeField}
        onAddCheckItem={onAddCheckItem}
      />
    )
  },
)
