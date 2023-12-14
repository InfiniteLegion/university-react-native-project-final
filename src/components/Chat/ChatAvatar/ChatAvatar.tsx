import { Image, View } from "react-native";

import defaultStyles from './styles';

function ChatAvatar() {
  const styles = defaultStyles();

  return (
    <>
      <View>
        <Image
          style={styles.image}
          source={require('../../../assets/img/ahsoka.jpg')}
        />
      </View>
    </>
  );
}

export default ChatAvatar;
