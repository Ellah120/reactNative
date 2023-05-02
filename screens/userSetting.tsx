import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

function UserSetting({navigation}: any){
  const { selectedUser } = useContext(ChatContext);

  function handleGoBack() {
    navigation.navigate("Chat");
  }
return (
  <View style={styles.mainView}>
    <View style={styles.titleView}>
      <TouchableOpacity onPress={handleGoBack}>
        <Image
          source={require("../assets/backicon.png")}
          style={styles.titleImage}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>Chat Settings</Text>
    </View>
    <View style={styles.subView}>
      <Image
        source={selectedUser?.pic}
        resizeMode="contain"
        style={styles.userImage}
      />
      <Text style={styles.userName}>{selectedUser?.name}</Text>
      <View style={styles.listView}>
        <View style={styles.flexView}>
          <Image source={require("../assets/media.png")} />
          <Text style={styles.flexText}>Media, Links, and Docs</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/starred.png")} />
          <Text style={styles.flexText}>Starred Messages</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/speaker.png")} />
          <Text style={styles.flexText}>Mute</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/wallpaper.png")} />
          <Text style={styles.flexText}>Wallpaper</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/sound.png")} />
          <Text style={styles.flexText}>Sound</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/save.png")} />
          <Text style={styles.flexText}>Save to Camera Roll</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/share.png")} />
          <Text style={styles.flexText}>Share Contact</Text>
        </View>
        <View style={styles.secondView}>
          <Image source={require("../assets/block.png")} />
          <Text style={styles.flexText}>Block Contact</Text>
        </View>
        <View style={styles.lastView}>
          <Image source={require("../assets/clear.png")} />
          <Text style={styles.flexText}>Clear Chat</Text>
        </View>
      </View>
    </View>
  </View>
);
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: "20%",
    backgroundColor: "rgba(62, 134, 150, 1)",
    flex: 1,
  },
  titleView: {
    flexDirection: "row",
    paddingHorizontal: 40,
  },
  titleText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    marginLeft: "25%",
  },
  titleImage: {
    marginTop: 5,
  },
  subView: {
    marginTop: 100,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
  },
  userImage: {
    height: 150,
    width: 150,
    marginTop: "-15%",
    marginLeft: 100,
  },
  userName: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
  },
  listView: {
    marginTop: 20,
  },
  flexView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    paddingBottom: 10,
  },
  flexText: {
    marginLeft: 15,
    fontSize: 16,
  },
  secondView: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.35)",
    paddingVertical: 10,
  },
  lastView: {
    flexDirection: "row",
    paddingVertical: 10,
  },
});
export default UserSetting