import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React from 'react'

import { Octicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { EvilIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useState, useEffect } from "react";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../firebase";





const Signup = () => {


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);


  const handleSignup = () => {
     if (password !== confirmpassword) {
       alert("Passwords do not match. Please try again.");
       return; // Exit the function if passwords don't match
     }
     auth
       .createUserWithEmailAndPassword(email, password)
       .then((userCredentials) => {
         const user = userCredentials.user;
         console.log("Registered with:", user.email);
       })
       .catch((error) => alert(error.message));
   };

  


  const navigation = useNavigation();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [showPassword, setShowPassword] = useState(falseclear
    
  );
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <SafeAreaView className="m-5">
          {/* back button */}

          {/* <View className="flex-row gap-2 items-center mt-4">
            <AntDesign name="left" size={24} color="#E67E22" />
            <Text className="text-[#E67E22]">Back</Text>
          </View> */}
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
                secureTextEntry={showPassword}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />
              <FontAwesome6
                
                name={showPassword ? "eye" : "eye-slash"}
                size={24}
                color="black"
              />
            </View>

            {/* confirm password component */}

            <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
              <Fontisto name="locked" size={24} color="#0F0C80" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder=" Confirm Password"
                secureTextEntry={!showConfirmPassword}
                onChangeText={(text) => setConfirmpassword(text)}
                value={confirmpassword}
              />
              <FontAwesome6
                name={showPassword ? "eye" : "eye-slash"}
                size={24}
                color="black"
              />
            </View>

            {/* Sign Up button */}
            <View className="bg-[#2ECC71] p-3 rounded-2xl mb-16">
              <TouchableOpacity onPress={handleSignup}>
                <Text className="text-center font-bold text-white ">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex-row  justify-center">
              <Text className=" text-[#0F0C80]">Already have account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text className="text-[#0F0C80] font-bold ">Sign in</Text>
              </TouchableOpacity>
            </View>
            {/* Footer text */}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default Signup