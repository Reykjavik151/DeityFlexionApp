import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialDesignIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Entypo from "react-native-vector-icons/Entypo"
import Octicons from "react-native-vector-icons/Octicons"
import AntDesign from "react-native-vector-icons/AntDesign"
import EvilIcons from "react-native-vector-icons/EvilIcons"
import Feather from "react-native-vector-icons/Feather"

export const loadFonts = () => {
  Entypo.loadFont()
  MaterialDesignIcons.loadFont()
  FontAwesome.loadFont()
  Ionicons.loadFont()
  MaterialIcons.loadFont()
  AntDesign.loadFont()
  EvilIcons.loadFont()
  Octicons.loadFont()
  Feather.loadFont()
}
