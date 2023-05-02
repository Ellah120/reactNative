import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

function ProfileScreen({navigation}: any){

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
        <Text style={styles.titleText}>Profile</Text>
      </View>
      <View style={styles.subView}>
        <View style={styles.picView}>
          <Image
            source={require("../assets/blackpic.png")}
            resizeMode="contain"
          />
          <View style={styles.cameraPic}>
            <Image source={require("../assets/cameraicon.png")} />
          </View>
          <View style={styles.picText}>
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
        </View>
        <Text style={styles.davidText}>David Black</Text>
        <View style={styles.firstView}>
          <View style={styles.themeView}>
            <Image source={require("../assets/mailicon.png")} />
            <Text style={styles.firstText}>Email:davidblack@google.com</Text>
          </View>
          <View style={styles.phoneView}>
            <Image source={require("../assets/phoneicon.png")} />
            <Text style={styles.firstText}>Phone Number:+2348005194202</Text>
          </View>
          <View style={styles.phoneView}>
            <Image source={require("../assets/locationicon.png")} />
            <Text style={styles.firstText}>
              Location:Uyo,Akwa ibom State. Nigeria
            </Text>
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.themeView}>
            <Image
              source={require("../assets/fbicon.png")}
              style={styles.secondImage}
            />
            <Text style={styles.secondText}>daveblac</Text>
          </View>
          <View style={styles.igView}>
            <Image
              source={require("../assets/igicon.png")}
              style={styles.secondImage}
            />
            <Text style={styles.secondText}>daveblac</Text>
          </View>
          <View style={styles.igView}>
            <Image
              source={require("../assets/twittericon.png")}
              style={styles.secondImage}
            />
            <Text style={styles.secondText}>daveblac</Text>
          </View>
          <View style={styles.linkView}>
            <Image
              source={require("../assets/linkedinicon.png")}
              style={styles.linkImage}
            />
            <Text style={styles.firstText}>daveblac</Text>
          </View>
        </View>
        <View style={styles.firstView}>
          <View style={styles.linkView}>
            <Text style={styles.emergencyText}>Emergency Contact</Text>
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
    marginTop: 100,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  picView: {
    marginTop: "-20%",
    flexDirection: "row",
    marginLeft: 100,
  },
  cameraPic: {
    position: "absolute",
    top: 120,
    left: 120,
    backgroundColor: "rgba(217, 217, 217, 1)",
    padding: 5,
    borderRadius: 10,
  },
  picText: {
    marginTop: 120,
    backgroundColor: "rgba(62, 134, 150, 1)",
    paddingTop: 8,
    paddingHorizontal: 15,
    height: 30,
    borderRadius: 10,
  },
  editText: {
    color: "white",
    fontWeight: "700",
    fontSize: 11,
  },
  davidText: {
    marginLeft: "auto",
    marginRight: "auto",
    fontSize: 40,
    fontWeight: "700",
  },
  firstView: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 35,
    paddingBottom: 20,
    marginVertical: 20,
  },
  themeView: {
    flexDirection: "row",
    paddingBottom: 8,
    paddingLeft: 8,
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    borderBottomWidth: 1,
  },
  firstText: {
    fontWeight: "700",
    fontSize: 14,
  },
  phoneView: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 8,
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    borderBottomWidth: 1,
  },
  secondView: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 35,
    marginVertical: 10,
  },
  secondText: {
    fontWeight: "700",
    fontSize: 14,
    paddingTop: 5,
  },
  secondImage: {
    marginLeft: "30%",
  },
  igView: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 8,
    borderBottomColor: "rgba(0, 0, 0, 0.13)",
    borderBottomWidth: 1,
  },
  linkView: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 8,
  },
  linkImage: {
    marginLeft: "20%",
  },
  emergencyText: {
    fontWeight: "700",
    fontSize: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default ProfileScreen