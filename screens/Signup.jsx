import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Octicons } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const { width } = Dimensions.get("window");
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <SafeAreaView className="m-5">
          <View className="flex justify-center items-center mb-[10] mt-[30]">
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
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
            <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8 w-full">
              <Octicons name="person" size={24} color="#0F0C80" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Full name"
                onChangeText={(text) => setFullname(text)}
                value={fullname}
                style={{ height: 50 }} // Fix the height of TextInput
              />
            </View>

            {/* Email component */}
            <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8 w-full">
              <MaterialIcons name="mail-outline" size={24} color="#0F0C80" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
                value={email}
                style={{ height: 50 }} // Fix the height of TextInput
              />
            </View>

            {/* Password Component*/}
            <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8 w-full">
              <Fontisto name="locked" size={24} color="#0F0C80" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Password"
                secureTextEntry={!showPassword}
                onChangeText={setPassword}
                value={password}
                style={{ height: 50 }} // Fix the height of TextInput
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <FontAwesome6
                  name={showPassword ? "eye" : "eye-slash"}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            {/* Confirm Password Component*/}
            <View className="flex-row items-center border-2 border-[#0F0C80] rounded-2xl pl-3 mb-8 w-full">
              <Fontisto name="locked" size={24} color="#0F0C80" />
              <TextInput
                className="flex-1 ml-3 text-base text-gray-800"
                placeholder="Confirm Password"
                secureTextEntry={!showConfirmPassword}
                onChangeText={setConfirmpassword}
                value={confirmpassword}
                style={{ height: 50 }} // Fix the height of TextInput
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FontAwesome6
                  name={showConfirmPassword ? "eye" : "eye-slash"}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>

            {/* Sign Up button */}
            <View className="bg-[#2ECC71] p-3 rounded-2xl mb-16">
              <TouchableOpacity onPress={handleSignup}>
                <Text className="text-center font-bold text-white">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>

            {/* Sign in link */}
            <View className="flex-row justify-center">
              <Text className="text-[#0F0C80]">Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                <Text className="text-[#0F0C80] font-bold">Sign in</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: width * 0.7,
    height: width * 0.2,
    resizeMode: "contain",
  },
});

export default Signup;
