import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import DashboardScreen from "./screens/dashboard";
import ContactScreen from "./screens/contact";
import SettingsScreen from "./screens/settings";
import ProfileScreen from "./screens/profile";
import MessageScreen from "./screens/messages";
import ChatScreen from "./screens/chat";
import VoiceCall from './screens/voicecall';
import VideoCall from "./screens/videocall";
import UserSetting from "./screens/userSetting";
import ChatProvider from "./contexts/ChatContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ChatProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerShown: false, // Hide the header for this screen
              }}
            />
            <Stack.Screen
              name="Dashboard"
              component={DashboardScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Contact"
              component={ContactScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Messages"
              component={MessageScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Voicecall"
              component={VoiceCall}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Videocall"
              component={VideoCall}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="UserSetting"
              component={UserSetting}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
    </ChatProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
