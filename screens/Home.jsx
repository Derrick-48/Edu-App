import { View, Text , TouchableOpacity} from 'react-native'
import React from 'react'
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = () => {
  
    const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>
      <Text className="text-2xl text-blue-500">Move</Text>
      <View className="justify-center items-center">
        <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
          <Text className="text-2xl text-blue-500">Move</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home