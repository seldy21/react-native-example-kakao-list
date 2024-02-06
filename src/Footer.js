import { TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const FooterIcon = (props) => (
  <View
    style={{
      flexGrow: 1,
      flexDirection: "row",
      justifyContent: "center",
      paddingVertical: 15,
    }}
  >
    <TouchableOpacity
      onPress={props.onPress}
      hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
    >
      {props.isIonicons ? (
        <Ionicons name={props.name} size={25} color={"black"} />
      ) : (
        <FontAwesome name={props.name} size={25} color="black" />
      )}
    </TouchableOpacity>
  </View>
);

export const Footer = (props) => {
  const { selectedIndex, setSelectedIndex } = props;
  const onPress = (index) => {
    setSelectedIndex(index);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <FooterIcon
        name={selectedIndex === 0 ? "user" : "user-o"}
        isIonicons={false}
        onPress={() => {
          onPress(0);
        }}
      />
      <FooterIcon
        name={selectedIndex === 1 ? "chatbubble" : "chatbubble-outline"}
        isIonicons={true}
        onPress={() => {
          onPress(1);
        }}
      />
      <FooterIcon
        name={selectedIndex === 2 ? "gift" : "gift-outline"}
        isIonicons={true}
        onPress={() => {
          onPress(2);
        }}
        isSelected={selectedIndex === 2}
      />
      <FooterIcon
        name={
          selectedIndex === 3
            ? "ellipsis-horizontal"
            : "ellipsis-horizontal-outline"
        }
        isIonicons={true}
        onPress={() => {
          onPress(3);
        }}
      />
    </View>
  );
};
