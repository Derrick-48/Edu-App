import { View, Text } from 'react-native'
import React from 'react'
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Mycourses = () => {
     const navigation = useNavigation();
  return (
    <View>
      <Text>Mycourses</Text>
    </View>
  )
}

export default Mycourses