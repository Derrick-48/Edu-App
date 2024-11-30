import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Start = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-between px-6 pt-10 pb-16">
        {/* Decorative Elements */}
        <View className="absolute top-10 left-4">
          <View className="w-8 h-8 rounded-full bg-blue-600" />
          <View className="w-4 h-4 rounded-full bg-blue-400 mt-2 ml-8" />
        </View>
        <View className="absolute top-20 right-8">
          <View className="w-4 h-4 rounded-full bg-green-400" />
        </View>
        <View className="absolute bottom-40 right-6">
          <View className="w-6 h-6 rounded-full bg-green-300" />
        </View>

        {/* Main Content */}
        <View className="items-center w-full mt-10">
          <View className="w-72 h-72 bg-blue-100 rounded-full items-center justify-center mb-6">
            <Image
              source={require("../assets/images/learning.png")}
              className="w-64 h-64"
              resizeMode="contain"
            />
          </View>
          <View className="items-center mt-4">
            <View className="flex-row items-center">
              <Image
                source={require("../assets/images/logo.png")}
                className="w-20 h-20 mt-[20]"
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View>
          <Text className="text-center font-bold mb-2 text-2xl">
            Welcome to ElearnIT
          </Text>
          <Text className="text-wrap text-center text-xl">
            A platform that offers you free courses with video content and
            downloadable assets
          </Text>
        </View>

        {/* Buttons */}
        <View className="w-full flex-row justify-between space-x-5">
          <TouchableOpacity
            className="flex-1"
            onPress={() => navigation.navigate("Signup")}
          >
            <View className="bg-green-500 h-14 rounded-2xl justify-center items-center ">
              <Text className="text-white font-bold text-lg">Sign up</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1"
            onPress={() => navigation.navigate("Signin")}
          >
            <View className="bg-green-500 h-14 rounded-2xl justify-center items-center ml-5">
              <Text className="text-white font-bold text-lg">Sign in</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Start;
