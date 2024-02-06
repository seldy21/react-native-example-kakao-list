import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";import { Feather } from '@expo/vector-icons';

const Icon = (props) => {
  return <AntDesign name={props.name} size={24} color="black" />;
};

export default () => {
  return (
    <View style={{ paddingVertical: 10, paddingHorizontal: 20, flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>전체</Text>
      <View style={{ flexDirection: "row", gap: 6 }}>
        <Icon name={"search1"} />
        <Icon name={"adduser"} /><Feather name="music" size={24} color="black" />
        <Icon name={"setting"} />
      </View>
    </View>
  );
};
