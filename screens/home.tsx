import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";


function HomeScreen({navigation}: any) {
  function handleContinue() {
    navigation.navigate('Dashboard')
  }
  return (
    <TouchableOpacity style={styles.main} onPress={handleContinue}>
      <Image source={require("../assets/Vector.png")} resizeMode="contain" />
      <View style={styles.smallView}>
        <Text style={styles.smallText}>HIVE</Text>
        <Image source={require("../assets/teardrop.png")} />
      </View>
      <Text style={styles.bigText}>CHIPPER</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingTop: "80%",
    alignItems: "center",
    backgroundColor: "rgba(62, 134, 150, 1)",
    flex: 1,
  },
  smallText: {
    color: "white",
    fontWeight: "300",
    fontSize: 15,
    paddingLeft: 150,
    paddingRight: 4,
  },
  smallView: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
  },
  bigText: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 33,
    fontWeight: "700",
  },
});

export default HomeScreen;
