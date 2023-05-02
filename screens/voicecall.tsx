import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, } from "react";
import { ChatContext } from "../contexts/ChatContext";

function VoiceCall ({navigation}: any){
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
        <Text style={styles.voiceText}>Voice Call</Text>
      </View>
      <Text style={styles.nameText}>{selectedUser?.name}</Text>
      <Text style={styles.timeText}>21:33</Text>
      <TouchableOpacity style={styles.phoneButton}>
        <Image source={require("../assets/telephoneicon.png")} />
      </TouchableOpacity>
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
  timeText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 20,
  },
  phoneButton: {
    backgroundColor: "rgba(191, 54, 12, 1)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.78)",
    padding: 25,
    borderRadius: 50,
    marginTop: 530,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
export default VoiceCall