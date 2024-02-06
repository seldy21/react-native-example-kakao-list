import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Profile = (props) => {
  const { uri, name, introduction, isMe } = props;

  const introductionTextSize = isMe ? 14 : 12;
  const size = isMe ? 50 : 40;
  const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px 0;
  `;

  const ProfileImage = styled.Image`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size * 0.4}px;
  `;

  return (
    <Container>
      <ProfileImage source={{ uri }} />
      <View>
        <Text style={{ fontWeight: isMe ? "bold" : "normal" }}>{name}</Text>
        {introduction && (
          <Text style={{ color: "grey", fontSize: introductionTextSize }}>
            {introduction}
          </Text>
        )}
      </View>
    </Container>
  );
};
