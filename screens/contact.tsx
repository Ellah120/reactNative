import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";

interface User {
  name: string;
  pic: any;
};

const Users: User[] = [
  {
    pic: require("../assets/bourbonpic.png"),
    name: "Bourbon",
  },
  {
    pic: require("../assets/davidpic.png"),
    name: "David",
  },
  {
    pic: require("../assets/mingpic.png"),
    name: "Ming Ming",
  },
  {
    pic: require("../assets/therockpic.png"),
    name: "The Rock",
  },
  {
    pic: require("../assets/uteepic.png"),
    name: "Utee",
  },
];

function ContactScreen({ navigation }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  useEffect(() => {
    setUsers(Users);
  }, []);

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [users, searchQuery]);

   function handleShowSearch() {
     setShowSearch(!showSearch);
   }

  function handleGoBack() {
    navigation.navigate("Dashboard");
  }
  return (
    <View style={styles.mainView}>
      {showSearch ? (
        <View style={styles.searchView}>
          <TextInput
            onChangeText={(text) => {
              setSearchQuery(text);
              setIsSearching(text.length > 0);
            }}
            value={searchQuery}
            style={styles.textInput}
          />
          <TouchableOpacity onPress={handleShowSearch}>
            <Image source={require("../assets/searchicon.png")} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.titleView}>
          <TouchableOpacity onPress={handleGoBack}>
            <Image
              source={require("../assets/backicon.png")}
              style={styles.titleImage}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Contacts</Text>
          <TouchableOpacity onPress={handleShowSearch}>
            <Image source={require("../assets/searchicon.png")} />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.subView}>
        {isSearching
          ? filteredUsers.map((user, index) => (
              <View style={styles.davidView} key={index}>
                <Image source={user.pic} resizeMode="contain" />
                <Text style={styles.bourbonText}>{user.name}</Text>
              </View>
            ))
          : users.map((user, index) => (
              <View style={styles.davidView} key={index}>
                <Image source={user.pic} resizeMode="contain" />
                <Text style={styles.bourbonText}>{user.name}</Text>
              </View>
            ))}
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
    justifyContent: "space-between",
    paddingHorizontal: 40,
  },
  titleImage: {
    marginTop: 5,
  },
  titleText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  searchView: {
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
  },
  subView: {
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 70,
    paddingHorizontal: 10,
  },
  textInput: {
    borderWidth: 2,
    width: 250,
    padding: 7,
    marginRight: 5,
    borderRadius: 20,
    borderColor: "transparent",
    backgroundColor: "rgba(217, 217, 217, 0.55)",
  },
  bourbonText: {
    paddingLeft: 18,
    fontSize: 20,
    fontWeight: "500",
    paddingTop: 17,
  },
  davidView: {
    borderBottomColor: "rgba(0, 0, 0, 0.32)",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
});
export default ContactScreen;
