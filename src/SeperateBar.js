import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const SeperateBar = (props) => {
  const { dataLength, onPress, isOpened } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 5,
      }}
    >
      <Text style={{ fontSize: 12, color: "grey" }}>전체 {dataLength}명</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            transform: [isOpened ? { rotate: "180deg" } : { rotate: "0deg" }],
            
          }}
        >
          <MaterialIcons name="keyboard-arrow-down" size={20} color="grey" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
