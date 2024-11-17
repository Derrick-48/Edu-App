import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Courses = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text>Courses</Text>
      <Text className="text-2xl text-blue-500">Move</Text>
      <Text className="text-2xl text-blue-500">Move</Text>
      <View className="justify-center items-center">
        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text className="text-2xl">Move</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Courses