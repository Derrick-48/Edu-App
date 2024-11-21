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
  const [error, setError] = useState(null);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
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
              <TouchableOpacity onPress={handleSignup}>
                <Text className="text-center font-bold text-white ">
                  Sign up989
                </Text>
              </TouchableOpacity>
            </View>
            <View className=" flex-row  justify-center">
              <Text className=" text-[#0F0C80]">Already have account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signin")}>ww231331qwwwwwwwwwwwwwwwwww2ww22133111113qqqq2qqqqqqqqqqqqqqqqqqqqqw222222222222222222222qq 2121qqqqqq          qq      qqq <AQQ>Q  Q Q <AqqaQ><Q>Q   <QQQ>Q  <Q> q q q q qq  <a href="qAQQ">Q  Q   <Q>   <Q> Q       Q   <Q>Q    <Q><Q><Q><Q><Q>q  <q>q  q q AQ  Q Q   Q                               <q>   qq  q <q><Q><Q><Q><Q>   Q Q       <Q><Q><Q> <q> <q> <q><q><q><Qa><q><q><q><q>qqq    qqqqqqqqqqqqqqqqqq  qqqqqqqqqqqqqqqqqqqqqqq q   <q><q>                                                                                                                  q                         <q>   qqq   <Q><Qaq><q><Q><q> <Q> <Q><Q><Q><Q>Q   Q aA  qAQ <WA>qwAaAaaaaaaaaA  <Q>Q    <q>Q                            Q aq  q q       qaq <A><q><Qa><Aa>q     <Q>Q  qA  Q Q QQ    qwAaAaaaaaaaaAQaAQ    <Qa>A <Q><a href="Q">Q                  q         <a href="qA"><Q><Q>Q    <Q>Q  qa      q   aq    q1  <q><Q><q>                       Q   Q a q <q>       <q> <Q><Q><Q>Q  <Q>q  <q><q>q   <q><q>q <q>q      <Qa1> <q>QQ     <Q1>  <Q1><Q>Q    <Q><Q><Q><Q><q><q><q> <Q>                                                                                           <Q>QQQQQQQQQQQQQQQQQQQQQ                                                        <Q>QQQQQQ11`11  1             Q                                                                           11        qa  q q AQ    <Q1>1 Q   <Q><Q>  <Q>1Q Q   Qa  q   <Q><Q1>q  1 qqqqqqqqqqqqqqq q 12qq  1q11  <q>qq 1q  q   q                                           qqqqqqqqqqqqqqq q 1q  q 1q  1 qq              1q              1   q 1   1             1qq 1q  1q1212q1q 11              q111111111111111111111111111111 1q  2   1 qq  AQ                                                      q                               q q q1q 1qq 12  q12qwq  1q  1`11212121qq    q q q   q1q1111111111111111111111111111111111111111111111111111111111111  q1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111  
              81//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8zAS/*/8a sa/*/sa*//a*/*wq*/z/*X*/**/*a*//QWAS</q></Q1></Q></Q></Q></Q></Q1></Q></Q></Q></q></q></q></Q></Q></Q></Q></Q></Q1></Q1></q></Qa1></q></q></q></q></q></Q></Q></Q></Q></q></q></q></Q></q></Q></Q></Q></a></a></Q></Qa></Q></Aa></Qa></q></A></q></Q></WA></Q></Q></Q></Q></Q></q></Q></q></Qaq></Q></q></q></q></q></q></q></q></Qa></q></q></q></q></q></Q></Q></Q></Q></Q></Q></Q></q></q></q></Q></Q></Q></Q></Q></Q></Q></Q></a></Q></QQQ></Q></AqqaQ></AQQ>
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