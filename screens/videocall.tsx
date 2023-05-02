import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

function VideoCall({ navigation }: any) {
  const { selectedUser } = useContext(ChatContext);

  function handleGoBack() {
    navigation.navigate("Chat");
  }

  return (
    <ImageBackground
      source={require("../assets/fullpic.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.headingView}>
        <TouchableOpacity onPress={handleGoBack}>
          <Image source={require("../assets/blackarrow.png")} />
        </TouchableOpacity>
        <Text style={styles.voiceText}>Video Call</Text>
      </View>
      <Text style={styles.nameText}>{selectedUser?.name}</Text>
      <View style={styles.iconView}>
        <TouchableOpacity style={styles.phoneButton}>
          <Image source={require("../assets/telephoneicon.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton}>
          <Image source={require("../assets/switchCamera.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton}>
          <Image source={require("../assets/mute.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.whiteButton}>
          <Image source={require("../assets/noVideo.png")} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
  },
  headingView: {
    marginTop: 70,
    marginLeft: 30,
    flexDirection: "row",
  },
  voiceText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 100,
  },
  nameText: {
    color: "white",
    fontSize: 28,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  iconView: {
    flexDirection: "row",
    marginHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 550,
  },
  phoneButton: {
    backgroundColor: "rgba(191, 54, 12, 1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.78)",
    padding: 15,
    borderRadius: 50,
  },
  whiteButton: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    padding: 10,
    borderRadius: 50,
  },
});
export default VideoCall;
