import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Foundation from "@expo/vector-icons/Foundation";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const imageOne = require("../assets/images/imageOne.png");
const imagetwo = require("../assets/images/imagetwo.png");
const imagethree = require("../assets/images/imagethree.png");

const Courses = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row justify-between mt-12 mb-9 m-5">
          <View className="flex-row  items-center ">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <View className="flex-row">
                <AntDesign name="left" size={26} color="#E67E22" />
                <Text className="text-[#E67E22] font-medium text-2xl">
                  Back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex-row">
            <View className="mr-6">
              <FontAwesome5 name="bell" size={24} color="#E67E22" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Signout")}>
              <View>
                <Octicons name="person" size={24} color="#E67E22" />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View className="ml-5 mr-5 mb-1">
            <Image
              className="w-[351.5px] h-[200.27] "
              borderRadius={9}
              source={require("../assets/images/image1.png")}
            />
          </View>

          <View className="flex-row ml-5 mr-5">
            <View className="flex-row">
              <Text className="text-lg text-gray-500 ">
                Instructor | Davit Rouben
              </Text>
              <View className="flex-row ml-11">
                <Foundation name="star" size={20} color="#E67E22" />
                <Foundation name="star" size={20} color="#E67E22" />
                <Foundation name="star" size={20} color="#E67E22" />
                <Ionicons name="star-half" size={20} color="#E67E22" />
                <Ionicons name="star-outline" size={20} color="#E67E22" />
                <Text className="ml-1 text-lg text-gray-500 ">Rate</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row ml-4 mr-4 mt-3">
          <Text className="font-bold text-2xl ">Learn to Code</Text>

          <Text className="ml-9 text-lg">2.5 hours | 38 modules</Text>
        </View>
        <View className="mt-2 mr-4 ml-4">
          <Text className="text-gray-500">
            Are you intrigued by the world of coding but don't know where to
            start? Our "Learn to Code" course is the perfect introduction to the
            fascinating and empowering world of programming. Designed for
            absolute beginners,this coursewill demystify coding and provide you
            with a solid foundation to kickstart your coding journey.
          </Text>
        </View>

        <View
          className="border-l border-r border-t rounded-t-xl mt-5 border-t-[#0F0C80] 
        border-r-[#0F0C80] border-l-[#0F0C80]"
        >
          <View className="ml-4 mr-4">
            <View className="flex-row mt-5 rounded-2xl p-1 bg-white mb-4">
              <View className="mr-3">
                <Image className="w-24 h-24" source={imageOne} />
              </View>
              <View className="flex-row">
                <View>
                  <Text className="font-bold">Discover the fundamentals </Text>
                  <Text className="font-bold">of programming</Text>
                  <View className=" mt-5 flex-row">
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={19}
                      color="#E67E22"
                    />
                    <Text className="pl-1/2 text-[#E67E22]"> I6 mins</Text>
                  </View>
                </View>
                <View className="mt-8 ml-5">
                  <AntDesign name="playcircleo" size={24} color="#E67E22" />
                </View>
              </View>
            </View>

            <View className="flex-row mt-1 rounded-2xl p-1 bg-white mb-4">
              <View className="mr-3">
                <Image className="w-24 h-24" source={imagetwo} />
              </View>
              <View className="flex-row">
                <View>
                  <Text className="font-bold">Discover the fundamentals </Text>
                  <Text className="font-bold">of programming</Text>
                  <View className=" mt-5 flex-row">
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={19}
                      color="#E67E22"
                    />
                    <Text className="pl-1/2 text-[#E67E22]"> I6 mins</Text>
                  </View>
                </View>
                <View className="mt-8 ml-5">
                  <AntDesign name="playcircleo" size={24} color="#E67E22" />
                </View>
              </View>
            </View>

            <View className="flex-row mt-1 rounded-2xl p-1 bg-white mb-4">
              <View className="mr-3">
                <Image className="w-24 h-24" source={imagethree} />
              </View>
              <View className="flex-row">
                <View>
                  <Text className="font-bold">Discover the fundamentals </Text>
                  <Text className="font-bold">of programming</Text>
                  <View className=" mt-5 flex-row">
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={19}
                      color="#E67E22"
                    />
                    <Text className="pl-1/2 text-[#E67E22]"> I6 mins</Text>
                  </View>
                </View>
                <View className="mt-8 ml-5">
                  <AntDesign name="playcircleo" size={24} color="#E67E22" />
                </View>
              </View>
            </View>

            <View className="flex-row mt-1 rounded-2xl p-1 bg-white mb-4">
              <View className="mr-3 rounded-xl">
                <Image
                  className="w-24 h-24"
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOxWFgNajrutAETvp5kYqlv6pVYUB14d0I-9rdOwUjjNk-fNLeNYzfj1bXlCox83X0Vk&usqp=CAU",
                  }}
                />
              </View>
              <View className="flex-row">
                <View>
                  <Text className="font-bold">Discover the fundamentals </Text>
                  <Text className="font-bold">of programming</Text>
                  <View className=" mt-5 flex-row">
                    <MaterialCommunityIcons
                      name="clock-outline"
                      size={19}
                      color="#E67E22"
                    />
                    <Text className="pl-1/2 text-[#E67E22]"> I6 mins</Text>
                  </View>
                </View>
                <View className="mt-8 ml-5">
                  <AntDesign name="playcircleo" size={24} color="#E67E22" />
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Mycourses")}>
          <View className=" bg-[#2ECC71] p-4 rounded-3xl mb-16 mt-4 m-5">
            <Text className="text-center font-bold text-white ">
              Enroll Now
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Courses;
