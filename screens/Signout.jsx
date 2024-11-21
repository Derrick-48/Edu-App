import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from 'react'
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const learning = require("../assets/images/learning.png");
 import { auth } from "../firebase";


const Signout = () => {
  const navigation = useNavigation();

  const handlesignout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Start");
      })
      .catch((error) => alert(error.message));
  };

  
  return (
    <View className="pt-36">
      <ImageBackground className="h-96" source={learning}></ImageBackground>
      <View className="pt-24">
        <View className="flex-row justify-evenly ">
          <TouchableOpacity onPress={handlesignout}>
            <View className="border-2 border-green-500 bg-green-500 h-14 w-36 rounded-2xl justify-center items-center">
              <Text className="text-center font-bold text-white ">SIGN OUT</Text>
            </View>
          </TouchableOpacity>

          
        </View>
      </View>
    </View>
  );
};


export default Signout