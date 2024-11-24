import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
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

const Signin = () => {


 useEffect(() => {
   const unsubscribe = auth.onAuthStateChanged((user) => {
     if (user) {
       navigation.replace("Home");
     }
   });

   return unsubscribe;
 }, []);


   const handleSignin = () => {
     auth
       .signInWithEmailAndPassword(email, password)
       .then((userCredentials) => {
         const user = userCredentials.user;
         console.log("Logged in with:", user.email);
       })
       .catch((error) => alert(error.message));
   };
  const navigation = useNavigation();
  
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <KeyboardAvoidingView>
      <SafeAreaView className=" p-6">
        <View className=" items-center flex-row ml-20 mb-6 mt-24">
          <View className="flex justify-center items-center ">
            {/* <Image
              source={require("../../assets/images/logo.png")}
              className=" w-[190px] h-[36px] "
            /> */}
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-2xl font-semibold text-[#0F0C80]">Sign in</Text>
        </View>

        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <Octicons name="person" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Email or Username"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>

        <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8">
          <Fontisto name="locked" size={24} color="#0F0C80" />
          <TextInput
            className="flex-1 ml-3 text-base text-gray-800"
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <FontAwesome6
            name={showPassword ? "eye" : "eye-slash"}
            size={24}
            color="black"
          />
        </View>

        <View className="ml-60 mb-8">
          <TouchableOpacity>
            <Text className="font-semibold text-[#0F0C80]">
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="bg-[#2ECC71] p-3 rounded-2xl mb-16">
          <TouchableOpacity onPress={handleSignin}>
            <Text className="text-center font-bold text-white ">Sign in</Text>
          </TouchableOpacity>
        </View>

        <View className="mb-4">
          <Text className="text-center text-[#0F0C80] font-meduim">
            Or sign in With
          </Text>
        </View>

        <View className="flex-row justify-around p-2 mb-20">
          <View className=" rounded-2xl bg-white p-2">
            <TouchableOpacity>
              <Image
                height={40}
                width={40}
                source={{
                  uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png",
                }}
              />
            </TouchableOpacity>
          </View>

          <View className="rounded-2xl bg-white p-2 ">
            <TouchableOpacity>
              <Image
                height={40}
                width={40}
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBILdC5ouxGYjeaYJPmVqMsSpsItocXSI5A&s",
                }}
              />
            </TouchableOpacity>
          </View>

          <View className="rounded-2xl bg-white p-2 ">
            <TouchableOpacity>
              <Image
                height={40}
                width={40}
                source={{
                  uri: "https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png",
                }}
              />
            </TouchableOpacity>
          </View>

          <View className="bg-white rounded-2xl p-2 ">
            <TouchableOpacity>
              <Image
                height={40}
                width={40}
                source={{
                  uri: "https://static.vecteezy.com/system/resources/previews/023/986/970/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className=" flex-row  justify-center">
          <Text className=" text-[#0F0C80]">Don't have account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text className="text-[#0F0C80] font-bold ">Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
  }

export default Signin