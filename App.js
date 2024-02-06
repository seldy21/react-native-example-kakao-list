import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/Header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { friendProfiles, myProfile } from "./src/data";
import { Profile } from "./src/Profile";
import { Footer } from "./src/Footer";
import { useState } from "react";
import { SeperateBar } from "./src/SeperateBar";

export default function App() {
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpened, setIsOpened] = useState(true);

  const showListData = () => {
    setIsOpened(!isOpened);
    console.log(isOpened)
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          ListHeaderComponent={
            <>
              <Profile
                uri={myProfile.uri}
                name={myProfile.name}
                introduction={myProfile.introduction}
                isMe={true}
              />
              <SeperateBar
                dataLength={friendProfiles.length}
                onPress={showListData}
                isOpened={isOpened}
              />
            </>
          }
          contentContainerStyle={{ paddingHorizontal: 20 }}
          keyExtractor={(_, index) => index}
          data={friendProfiles}
          renderItem={renderItem}
        />
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
