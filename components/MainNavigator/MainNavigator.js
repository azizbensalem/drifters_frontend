import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { LieuCoach } from "../../screens/LieuCoach/lieuCoach";
import { View } from "native-base";
import { Button } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import { PlayersCoach } from "../../screens/MyAccountCoach/PlayersCoach";
import CoachProfile from "../../screens/CoachProfile/CoachProfile";

const Drawer = createDrawerNavigator();

const Deconnexion = () => {
  const { logout } = React.useContext(AuthContext);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        onPress={() => {
          logout();
        }}
        title="Deconnexion"
      />
    </View>
  );
};

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Mes lieux"
      screenOptions={{
        headerStyle: { backgroundColor: "#00BFFF" },
        headerTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Mon compte" component={CoachProfile} />
      <Drawer.Screen name="Mes joueurs" component={PlayersCoach} />
      <Drawer.Screen name="Mes lieux" component={LieuCoach} />
      <Drawer.Screen name="Deconnexion" component={Deconnexion} />
    </Drawer.Navigator>
  );
}
