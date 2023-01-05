import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { NativeBaseProvider } from "native-base";
import { AuthCoachForm } from "../../components/AuthCoachForm/AuthCoachForm";

export const LoginCoach = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/drifterslogo.png")}
        />
        <AuthCoachForm navigation={navigation} />
      </View>
    </NativeBaseProvider>
  );
};
