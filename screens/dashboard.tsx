import { View , Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function DashboardScreen({navigation}: any){

  function handleContact(){
    navigation.navigate('Contact');
  }

  function handleSettings() {
    navigation.navigate("Settings");
  }

  function handleProfile() {
    navigation.navigate("Profile");
  }

  function handleMessages() {
    navigation.navigate("Messages");
  }

  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.contactView} onPress={handleContact}>
        <Image
          source={require("../assets/contacticon.png")}
          resizeMode="contain"
        />
        <Text style={styles.contactText}>Contacts</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileView} onPress={handleProfile}>
        <Image
          source={require("../assets/profileicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.profileText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileView} onPress={handleMessages}>
        <Image
          source={require("../assets/messageicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.profileText}>Messages</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileView}>
        <Image
          source={require("../assets/archiveicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.profileText}>Archive</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.settingsView} onPress={handleSettings}>
        <Image
          source={require("../assets/settingsicon.png")}
          resizeMode="contain"
        />
        <Text style={styles.profileText}>Settings</Text>
      </TouchableOpacity>
      <View style={styles.logoView}>
        <Text style={styles.logoText}>HIVE</Text>
        <Image source={require("../assets/teardrop.png")} />
      </View>
      <Text style={styles.bigText}>CHIPPER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    paddingTop: "30%",
    backgroundColor: "rgba(62, 134, 150, 1)",
    flex: 1,
    paddingHorizontal: 10,
  },
  contactView: {
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 6,
    paddingBottom: 18,
  },
  contactImg: {
    paddingHorizontal: 3,
  },
  contactText: {
    color: "white",
    paddingLeft: 10,
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 17,
  },
  profileView: {
    flexDirection: "row",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingLeft: 17,
    paddingVertical: 18,
  },
  profileText: {
    color: "white",
    paddingLeft: 18,
    fontSize: 22,
    fontWeight: "600",
    paddingTop: 17,
  },
  settingsView: {
    flexDirection: "row",
    paddingLeft: 17,
    paddingVertical: 18,
  },
  logoView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: 30,
    paddingRight: 10,
    marginTop: '30%',
  },
  logoText: {
    color: "white",
    fontWeight: "300",
    fontSize: 15,
  },
  bigText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 33,
    fontWeight: "700",
    textAlign: 'right',
    marginRight: 38,
  },
});

export default DashboardScreen;