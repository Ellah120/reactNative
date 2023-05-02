import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React, { useContext , useState} from "react";
import { ChatContext } from "../contexts/ChatContext";

function ChatScreen({navigation}: any){
  const { selectedUser } = useContext(ChatContext);
  const [calls, setCalls] = useState<boolean>(false);

  function handleGoBack() {
    navigation.navigate("Messages");
  }

  function handleVoiceCall() {
    navigation.navigate("Voicecall");
  }

  function handleVideoCall() {
    navigation.navigate("Videocall");
  }

  function handleSettings (){
   navigation.navigate("UserSetting"); 
  }

  function handleCalls(){
    setCalls(!calls);
  }

  return (
    <View style={styles.mainView}>
      <View style={styles.subview}>
        {calls ? (
          <View style={styles.headingView}>
            <TouchableOpacity onPress={handleGoBack}>
              <Image
                source={require("../assets/blackarrow.png")}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <Image source={selectedUser?.pic} resizeMode="contain" />
            <Text style={styles.HeadingText}>{selectedUser?.name}</Text>
            <TouchableOpacity onPress={handleCalls}>
              <Image
                source={require("../assets/telephoneicon.png")}
                style={styles.phoneImage}
              />
            </TouchableOpacity>
            <Image
              source={require("../assets/settingsblack.png")}
              style={styles.settingImage}
            />
            <View style={styles.hiddenView}>
              <TouchableOpacity
                style={styles.voiceView}
                onPress={handleVoiceCall}
              >
                <Text style={styles.voiceText}>Voice Call</Text>
                <Image source={require("../assets/voicecall.png")} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.videoView}
                onPress={handleVideoCall}
              >
                <Text style={styles.voiceText}>Video Call</Text>
                <Image source={require("../assets/videocall.png")} />
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.headingView}>
            <TouchableOpacity onPress={handleGoBack}>
              <Image
                source={require("../assets/blackarrow.png")}
                style={styles.backImage}
              />
            </TouchableOpacity>
            <Image source={selectedUser?.pic} resizeMode="contain" />
            <Text style={styles.HeadingText}>{selectedUser?.name}</Text>
            <TouchableOpacity onPress={handleCalls}>
              <Image
                source={require("../assets/telephoneicon.png")}
                style={styles.phoneImage}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSettings}>
              <Image
                source={require("../assets/settingsblack.png")}
                style={styles.settingImage}
              />
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.todayView}>
          <Text style={styles.todayText}>Today</Text>
        </View>
        <View style={styles.heyView}>
          <Text style={styles.heyText}>Hey Boo</Text>
        </View>
        <View style={styles.goodView}>
          <Text style={styles.heyText}>Good morning.</Text>
        </View>
        <Text style={styles.whiteTime}>11:43 AM</Text>
        <View style={styles.blueHey}>
          <Text style={styles.heyText}>Hey {selectedUser?.name}</Text>
        </View>
        <View style={styles.blueGood}>
          <Text style={styles.heyText}>Good Afternoon</Text>
        </View>
        <Text style={styles.blueTime}>12:18 PM</Text>
        <View style={styles.uiView}>
          <Text style={styles.heyText}>Still working on the Ui?</Text>
        </View>
        <Text style={styles.whiteTime}>12:20 PM</Text>
        <View style={styles.yeaView}>
          <Text style={styles.heyText}>Yea its Fire </Text>
        </View>
        <Text style={styles.blueTime}>12:23 PM</Text>
        <View style={styles.niceView}>
          <Text style={styles.heyText}>Ouuuu thats nice</Text>
        </View>
        <Text style={styles.whiteTime}>12:25 PM</Text>
        <View style={styles.yeaView}>
          <Text style={styles.heyText}>Yea boo</Text>
        </View>
        <View style={styles.userView}>
          <Text style={styles.heyText}>{selectedUser?.text}</Text>
        </View>
        <Text style={styles.blueTime}>{selectedUser?.time}</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput placeholder="Type a message" style={styles.input} />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require("../assets/sendicon.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "rgba(62, 134, 150, 1)",
    flex: 1,
  },
  subview: {
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    height: "85%",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  headingView: {
    marginTop: 80,
    paddingHorizontal: 30,
    flexDirection: "row",
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.13)",
  },
  backImage: {
    marginTop: 15,
    marginRight: 30,
  },
  HeadingText: {
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 16,
    paddingLeft: 10,
  },
  phoneImage: {
    marginLeft: 70,
    marginTop: 16,
  },
  settingImage: {
    marginLeft: 23,
    marginTop: 16,
  },
  hiddenView: {
    backgroundColor: "rgba(62, 134, 150, 1)",
    position: "absolute",
    right: 12,
    top: 40,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  voiceView: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: "white",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  voiceText: {
    color: "white",
    paddingRight: 10,
    fontSize: 12,
    fontWeight: "500",
  },
  videoView: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  todayView: {
    color: "white",
    backgroundColor: "rgba(62, 134, 150, 1)",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "-3%",
    marginBottom: 30,
    paddingHorizontal: 10,
    paddingVertical: 1,
    borderRadius: 10,
  },
  todayText: {
    color: "white",
    fontWeight: "600",
    fontSize: 14,
  },
  heyView: {
    backgroundColor: "white",
    width: "25%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  heyText: {
    fontWeight: "600",
    fontSize: 13,
  },
  goodView: {
    backgroundColor: "white",
    width: "35%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    marginTop: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  whiteTime: {
    marginLeft: 10,
    color: "rgba(0, 0, 0, 0.36)",
    fontSize: 11,
    marginTop: 6,
  },
  blueHey: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    backgroundColor: "rgba(62, 134, 150, 1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 250,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  blueGood: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    backgroundColor: "rgba(62, 134, 150, 1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 230,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 3,
  },
  blueTime: {
    marginRight: 10,
    color: "rgba(0, 0, 0, 0.36)",
    fontSize: 11,
    marginTop: 6,
    textAlign: "right",
  },
  uiView: {
    backgroundColor: "white",
    width: "50%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  yeaView: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    backgroundColor: "rgba(62, 134, 150, 1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 260,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  niceView: {
    backgroundColor: "white",
    width: "37%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  userView: {
    justifyContent: "flex-start",
    alignItems: "flex-end",
    flexDirection: "row-reverse",
    backgroundColor: "rgba(62, 134, 150, 1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 170,
    marginLeft: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginTop: 3,
  },
  inputView: {
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    width: 300,
    padding: 7,
    borderRadius: 20,
    borderColor: "transparent",
    backgroundColor: "rgba(217, 217, 217, 0.55)",
  },
  sendButton: {
    backgroundColor: "rgba(217, 217, 217, 0.55)",
    padding: 10,
    borderRadius: 50
  },
});

export default ChatScreen