import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Foundation from "@expo/vector-icons/Foundation";
import Ionicons from "@expo/vector-icons/Ionicons";

const myCourseimage = require("../assets/images/myCourseimage.png");
const rounded = require("../assets/images/rounded.png");
const myCourseimage02 = require("../assets/images/myCourseimage02.png");

const Mycourses = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  return (
    <>
      <ImageBackground className="h-[240px]" source={rounded}>
        <View className="flex-row justify-between mt-11 p-5 mb-3">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
              <AntDesign name="left" size={24} color="#E67E22" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Courses")}>
              <Text className="text-[#E67E22] ml-2">Back</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row mt-4">
            <View className="mr-6">
              <FontAwesome5 name="bell" size={24} color="#E67E22" />
            </View>
            <View>
              <Octicons name="person" size={24} color="#E67E22" />
            </View>
          </View>
        </View>

        <View className="flex-row justify-between">
          <View className="ml-5 relative">
            <TextInput
              className="border-2 border-gray-100 w-[290px] bg-white rounded-lg text-lg pl-10 pr-4 py-2"
              placeholder="Search Courses"
              onChangeText={(text) => setSearch(text)}
              value={search}
            />
            <View className="absolute left-3 top-1/2 transform -translate-y-1/2">
              <Octicons name="search" size={24} color="#E67E22" />
            </View>
          </View>

          <View className="bg-white w-14 h-14 mr-4 pl-4 justify-center rounded-xl">
            <SimpleLineIcons name="grid" size={24} color="#E67E22" />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        >
          <View className="flex-row mt-6">
            <TouchableOpacity>
              <Text className="text-white rounded-3xl text-center font-bold w-[50px] pb-1 p-1 bg-[#E67E22] mr-4">
                All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 font-bold rounded-3xl bg-white text-center w-[87px] pb-1 p-1 mr-4">
                Progress
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 font-bold rounded-3xl bg-white text-center w-[87px] pb-1 p-1 mr-4">
                Finished
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 font-bold rounded-3xl bg-white text-center w-[50px] pb-1 p-1 mr-4">
                New
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-gray-500 font-bold rounded-3xl bg-white text-center w-[87px] pb-1 p-1">
                Trending
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Course 1 */}
        <View className="pt-2">
          <Image
            className="h-[221px] w-full rounded-lg"
            source={myCourseimage}
            resizeMode="contain"
          />
        </View>
        <Text className="ml-5 text-xl font-bold">Introduction to Web</Text>
        <View className="flex-row justify-between">
          <Text className="ml-5 text-xl font-bold">Development</Text>
          <Text className="text-gray-600 mr-5">20/40</Text>
        </View>

        <View className="flex-row ml-5 mr-5">
          <View className="flex-row">
            <Text className="text-lg text-gray-500">
              Instructor | Davit Rouben
            </Text>
            <View className="flex-row ml-11">
              <Foundation name="star" size={19} color="#E67E22" />
              <Foundation name="star" size={19} color="#E67E22" />
              <Foundation name="star" size={19} color="#E67E22" />
              <Ionicons name="star-half" size={19} color="#E67E22" />
              <Ionicons name="star-outline" size={19} color="#E67E22" />
              <Text className="ml-1 text-[15px] text-gray-500 pb-1.5">
                Rate
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row ml-4 mr-4 mt-3">
          <View className="bg-orange-500 h-4 rounded-l-xl w-52" />
          <View className="bg-white h-4 rounded-r-xl flex-1" />
        </View>
        <View className="flex-row ml-3">
          <Text>Complete</Text>
          <Text className="ml-72">50%</Text>
        </View>

        <View className="bg-[#2ECC71] p-4 rounded-3xl mt-5 ml-5 mr-5 mb-3">
          <TouchableOpacity onPress={() => navigation.navigate("Signout")}>
            <Text className="text-center font-bold text-white">
              Continue Learning
            </Text>
          </TouchableOpacity>
        </View>

        {/* Course 2 */}
        <View className="pl-5 pr-5">
          <Image
            className="h-[221px] w-full rounded-lg"
            source={myCourseimage02}
            resizeMode="contain"
          />
        </View>
        <Text className="ml-5 text-xl font-bold">
          Introduction to Data Analytics
        </Text>
        <View className="flex-row justify-between">
          <Text className="ml-5 text-xl font-bold">Data Science</Text>
          <Text className="text-gray-600 mr-5">20/40</Text>
        </View>

        <View className="flex-row ml-5 mr-5">
          <View className="flex-row">
            <Text className="text-lg text-gray-500">Instructor | Sakeenah</Text>
            <View className="flex-row ml-11">
              <Foundation name="star" size={19} color="#E67E22" />
              <Foundation name="star" size={19} color="#E67E22" />
              <Foundation name="star" size={19} color="#E67E22" />
              <Ionicons name="star-half" size={19} color="#E67E22" />
              <Ionicons name="star-outline" size={19} color="#E67E22" />
              <Text className="ml-1 text-[15px] text-gray-500 pb-1.5">
                Rate
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row ml-4 mr-4 mt-3">
          <View className="bg-orange-500 h-4 rounded-l-xl w-52" />
          <View className="bg-white h-4 rounded-r-xl flex-1" />
        </View>
        <View className="flex-row ml-3">
          <Text>Complete</Text>
          <Text className="ml-72">50%</Text>
        </View>

        <View className="bg-[#2ECC71] p-4 rounded-3xl mt-5 ml-5 mr-5 mb-3">
          <TouchableOpacity onPress={() => navigation.navigate("Signout")}>
            <Text className="text-center font-bold text-white">
              Continue Learning
            </Text>
          </TouchableOpacity>
        </View>

        {/* Repeat the courses or add new ones as necessary */}
      </ScrollView>
    </>
  );
};

export default Mycourses;
