import React, { useEffect, useState, useContext } from "react";
import { ChatContext, ChatContextType } from "../contexts/ChatContext";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

interface User {
  name: string;
  pic: any;
  text: string;
  time: string;
}

const Users: User[] = [
  {
    pic: require("../assets/bourbonpic.png"),
    name: "Bourbon",
    text: "Send me the other layout",
    time: "12:30 PM",
  },
  {
    pic: require("../assets/therockpic.png"),
    name: "The Rock",
    text: "yoo.....",
    time: "11:00 AM",
  },
  {
    pic: require("../assets/davidpic.png"),
    name: "David",
    text: "Run me airtime 5k",
    time: "10:50 AM",
  },
  {
    pic: require("../assets/uteepic.png"),
    name: "Utee",
    text: "Howfa you dey comot today?",
    time: "10:46 AM",
  },
  {
    pic: require("../assets/mingpic.png"),
    name: "Ming Ming",
    text: "I just saw you",
    time: "9:58 AM",
  },
];

function MessageScreen({ navigation }: any) {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const { selectUser } = useContext<ChatContextType>(ChatContext);

  const handleClick = (item: User) => {
    selectUser(item);
    navigation.navigate("Chat");
  };

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

  function handleGoBack() {
    navigation.navigate("Profile");
  }

  function handleShowSearch() {
    setShowSearch(!showSearch);
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
              source={require("../assets/profileicon.png")}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Messages</Text>
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
                <View>
                  <Text style={styles.bourbonText}>{user.name}</Text>
                  <View style={styles.miniView}>
                    <Text style={styles.mapText}>{user.text}</Text>
                    <Text style={styles.mapText}>{user.time}</Text>
                  </View>
                </View>
              </View>
            ))
          : users.map((user, index) => (
              <TouchableOpacity onPress={() => handleClick(user)} key={index}>
              <View style={styles.davidView}>
                <Image source={user.pic} resizeMode="contain" />
                <View>
                  <Text style={styles.bourbonText}>{user.name}</Text>
                  <View style={styles.miniView}>
                    <Text style={styles.mapText}>{user.text}</Text>
                    <Text style={styles.mapText}>{user.time}</Text>
                  </View>
                </View>
              </View>
           </TouchableOpacity>
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
  titleText: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
  },
  profileImage: {
    width: 30,
    height: 30,
  },
  searchView: {
    flexDirection: "row",
    marginRight: "auto",
    marginLeft: "auto",
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
  subView: {
    marginTop: 50,
    backgroundColor: "rgba(255, 255, 255, 0.78)",
    flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 70,
    paddingHorizontal: 10,
  },
  davidView: {
    borderBottomColor: "rgba(0, 0, 0, 0.32)",
    borderBottomWidth: 1,
    paddingLeft: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  bourbonText: {
    fontSize: 16,
    fontWeight: "500",
    paddingTop: 5,
  },
  miniView: {
    flexDirection: "row",
  },
  mapText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
export default MessageScreen;
