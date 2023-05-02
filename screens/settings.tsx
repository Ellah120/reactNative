import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function SettingsScreen({navigation}: any){

  function handleGoBack() {
    navigation.navigate("Dashboard");
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
        <Text style={styles.titleText}>Settings</Text>
      </View>
      <View style={styles.subView}>
        <View style={styles.firstView}>
          <View style={styles.themeView}>
            <Text style={styles.firstText}>Theme</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.fontView}>
            <Text style={styles.firstText}>Font Size</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.phoneView}>
            <Text style={styles.firstText}>Phone Contacts</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
          </View>
        </View>
        <View style={styles.firstView}>
          <View style={styles.themeView}>
            <Text style={styles.firstText}>Dark Mode</Text>
            <Image
              source={require("../assets/controlicon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.fontView}>
            <Text style={styles.firstText}>Notifications</Text>
            <Image
              source={require("../assets/controlicon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.phoneView}>
            <Text style={styles.firstText}>Use System Font</Text>
            <Image
              source={require("../assets/controlicon.png")}
              style={styles.themeImage}
            />
          </View>
        </View>
        <View style={styles.firstView}>
          <View style={styles.themeView}>
            <Text style={styles.firstText}>Account Settings</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.fontView}>
            <Text style={styles.firstText}>Help</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
          </View>
          <View style={styles.phoneView}>
            <Text style={styles.firstText}>Legal and Policies</Text>
            <Image
              source={require("../assets/fronticon.png")}
              style={styles.themeImage}
            />
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
    marginLeft: "35%",
  },
  titleImage: {
    marginTop: 5,
  },
  subView: {
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 1,
  },
  firstView: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingTop: 10,
    paddingHorizontal: 15,
    paddingBottom: 12,
    marginBottom: 20,
  },
  firstText: {
    fontWeight: "700",
    fontSize: 18,
  },
  themeView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 26,
    paddingBottom: 14,
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    borderBottomWidth: 1,
  },
  themeImage: {
    marginTop: 5,
  },
  fontView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 26,
    paddingVertical: 14,
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    borderBottomWidth: 1,
  },
  phoneView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 26,
    paddingTop: 14,
  },
});

export default SettingsScreen;