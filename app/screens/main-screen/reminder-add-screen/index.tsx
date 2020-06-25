import * as React from "react"
import { observer } from "mobx-react-lite"
import randomString from "random-string"
import _ from "lodash"

// import { useStores } from "../models/root-store"
import { ReminderAddScreenProps } from "./props"
import ReminderAdd from "./reminder-add"
import { EMPTY_REMINDER } from "../../../utils/constants"

export const ReminderAddScreen: React.FunctionComponent<ReminderAddScreenProps> = observer(
  ({ navigation }) => {
    // const { someStore } = useStores()
    const [isEdited, setIsEdited] = React.useState(!!navigation.getParam("item"))
    const [item, setItem] = React.useState({
      ...navigation.getParam("item", EMPTY_REMINDER),
      list: [...navigation.getParam("item", EMPTY_REMINDER).list.map(i => ({ ...i }))],
    })

    const onBackPress = () => navigation.goBack()

    const onReminderChangeField = (key: string, value: string) => {
      setItem({ ...item, [key]: value })
      setIsEdited(true)
    }

    const onReminderChangeListItem = (
      listItemId: string,
      field: string,
      value: string | boolean,
    ) => {
      const newItem = { ...item }

      const listItemIndex = _.findIndex(newItem.list, li => li.id === listItemId)
      if (listItemIndex !== -1) {
        newItem.list[listItemIndex][field] = value
        setItem(newItem)
        setIsEdited(true)
      }
    }

    const onAddCheckItem = () => {
      const newList = [...item.list]
      newList.push({ id: randomString(), title: "", isDone: false })
      setItem({ ...item, list: newList })
      setIsEdited(true)
    }

    return (
      <ReminderAdd
        isEdited={isEdited}
        onBackPress={onBackPress}
        item={item}
        onReminderChangeField={onReminderChangeField}
        onReminderChangeListItem={onReminderChangeListItem}
        onAddCheckItem={onAddCheckItem}
      />
    )
  },
)
