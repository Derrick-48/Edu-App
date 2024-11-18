import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from 'react'

import { Octicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { EvilIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Signup = () => {

  const navigation = useNavigation();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState(null);

  return (
    <SafeAreaView className="m-5">
      {/* back button */}

      <View className="flex-row gap-2 items-center mt-4">
        <AntDesign name="left" size={24} color="#E67E22" />
        <Text className="text-[#E67E22]">Back</Text>
      </View>
      {/* logo */}
      <View className="flex justify-center items-center ">
        {/* <Image
          source={require("../../assets/images/logo.png")}
          className="top-[50px] w-[190px] h-[36px] "
        /> */}
      </View>
      {/* Sign Up Text */}
      <View>
        <Text className="text-[#0F0C80] top-[60px] text-[30px] font-[700]">
          Sign Up
        </Text>
      </View>
      {/* input side component */}
      <View className="top-[100px]">
        {/* Name component */}
        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <Octicons name="person" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Full name"
            onChangeText={(text) => setFullname(text)}
            value={fullname}
          />
        </View>
        {/* Email component */}
        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <MaterialIcons name="mail-outline" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        {/* Password component */}

        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <Fontisto name="locked" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <EvilIcons name="eye" size={34} color="black" />
        </View>

        {/* confirm password component */}

        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <Fontisto name="locked" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder=" Confirm Password"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmpassword(text)}
            value={confirmpassword}
          />
          <EvilIcons name="eye" size={34} color="black" />
        </View>

        {/* Sign Up button */}
        <View className="bg-[#2ECC71] p-3 rounded-2xl mb-16">
          <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
            <Text className="text-center font-bold text-white ">Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* Footer text */}
        <View className="top-[220px]">
          <Text className="text-[#0f0c80] text-center">
            Already have an account? <Text className="font-bold">Sign In</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Signup