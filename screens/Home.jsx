import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
const logoImg = require("../assets/images/Logoimage.png");
const secondImage = require("../assets/images/secondImage.png");
const thirdImage = require("../assets/images/thirdImage.png");
const fourthImage = require("../assets/images/fourthImage.png");
const fifthImage = require("../assets/images/fifthImage.png");
const sixthImage = require("../assets/images/sixthImage.png");
const rounded = require("../assets/images/rounded.png");

const Home = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView className="">
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground className="h-64" source={rounded}>
          <View className="flex-row justify-between mt-11 p-5 mb-3">
            <View className="mr-1">
              <Image className="h-[50px] w-[267.86px]" source={logoImg} />
            </View>

            <View className="flex-row mt-4">
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

          <View className="flex-row  justify-around">
            <View>
              <TextInput
                className="border-2   border-gray-100 w-72  bg-white rounded-lg text-lg"
                placeholder="Search Courses"
                onChangeText={(text) => setSearch(text)}
                value={search}
              />
              <View className="absolute left-64 pt-4">
                <Octicons name="search" size={24} color="#E67E22" />
              </View>
            </View>

            <View className=" bg-white w-14 h-14  pl-4 justify-center rounded-xl ">
              <SimpleLineIcons name="grid" size={24} color="#E67E22" />
            </View>
          </View>
        </ImageBackground>

        <View className="mb-7">
          <Text className="text-xl font-bold text-center">Course</Text>
        </View>

        <View className="flex-row ml-5">
          <View className="mr-3 mb-3">
            <ImageBackground
              className="w-[170px] h-[120.27] "
              borderRadius={10}
              source={require("../assets/images/image1.png")}
            >
              <View className="absolute bottom-0 left-0 pl-1 pb-2 w-52 rounded-b-lg bg-gray-200/15 ">
                <Text className="text-lg text-white font-bold">
                  Learn to Code
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Courses")}
                >
                  <Text className="text-white bg-[#2ECC71] rounded-full w-[78.84px] pl-2 font-bold text-sm">
                    Enroll now
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>

          <View>
            <ImageBackground
              className="w-[170px] h-[120.27] "
              borderRadius={10}
              source={secondImage}
            >
              <View className="absolute bottom-0 left-0 pl-1  pb-2 w-52 rounded-b-lg bg-gray-200/15 ">
                <Text className="text-lg text-white font-bold">
                  Learn to Code
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Courses")}
                >
                  <Text className="text-white  bg-[#2ECC71] rounded-full w-[78.84px] pl-2 font-bold text-sm">
                    Enroll now
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View className="flex-row ml-5">
          <View className="mr-3">
            <ImageBackground
              className="w-[170px] h-[120.27] "
              borderRadius={10}
              source={thirdImage}
            ></ImageBackground>
          </View>

          <View>
            <ImageBackground
              className="w-[170px] h-[120.27] "
              borderRadius={10}
              source={fourthImage}
            >
              <View className="absolute bottom-0 left-0 ml-1  w-52 rounded-b-lg bg-gray-200/15 ">
                <Text className="text-lg text-white font-bold">
                  Learn to Code
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Courses")}
                >
                  <Text className="text-white bg-[#2ECC71] rounded-full w-[78.84px] pl-2 font-bold text-sm mb-2">
                    Enroll now
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View className="flex-1">
          <View className="mt-8">
            <Text className="text-xl font-bold text-center  ">My Courses</Text>
          </View>
        </View>

        <View>
          <View className="flex-row ml-5">
            <View className="mt-6 mr-4">
              <Image
                className="w-[150px] h-[150.27]"
                borderRadius={10}
                source={fifthImage}
              />
            </View>

            <View className="mt-5">
              <Text className="font-bold">Network Administration</Text>
              <Text>Configuring and securing </Text>
              <Text>Networks</Text>
              <View className="flex-row mt-2">
                <View className="bg-orange-500 h-2 rounded-l-xl w-28" />
                <View className="bg-gray-300 h-2 rounded-r-xl flex-1" />
              </View>

              <View className="flex-row">
                <Text>Complete</Text>
                <Text className="ml-28">50%</Text>
              </View>

              <View className="bg-[#2ECC71] rounded-2xl w-24 mt-5">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Mycourses")}
                >
                  <Text className="font-bold text-white p-1">Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View className="flex-row ml-5">
            <View className="mr-4 mt-4">
              <Image
                className="w-[150px] h-[150.27]"
                borderRadius={10}
                source={sixthImage}
              />
            </View>

            <View className="mt-4 ">
              <Text className="font-bold">Mobile App Development</Text>
              <Text>Building iOS Apps and </Text>
              <Text>Android Apps</Text>
              <View className="flex-row mt-2">
                <View className="bg-orange-500 h-2 rounded-l-xl w-28" />
                <View className="bg-gray-300 h-2 rounded-r-xl flex-1" />
              </View>
              <View className="flex-row">
                <Text>Complete</Text>
                <Text className="ml-28">50%</Text>
              </View>

              <View className="bg-[#2ECC71] rounded-2xl w-24 mt-5">
                <TouchableOpacity
                  onPress={() => navigation.navigate("Mycourses")}
                >
                  <Text className="font-bold text-white p-1">Continue</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View className="flex-row ml-5">
          <View className="mt-6 mr-4">
            <Image
              className="w-[150px] h-[150.27]"
              borderRadius={10}
              source={fifthImage}
            />
          </View>

          <View className="mt-5">
            <Text className="font-bold">Network Administration</Text>
            <Text>Configuring and securing </Text>
            <Text>Networks</Text>
            <View className="flex-row mt-2">
              <View className="bg-orange-500 h-2 rounded-l-xl w-28" />
              <View className="bg-gray-300 h-2 rounded-r-xl flex-1" />
            </View>

            <View className="flex-row">
              <Text>Complete</Text>
              <Text className="ml-28">50%</Text>
            </View>

            <View className="bg-[#2ECC71] rounded-2xl w-24 mt-5">
              <TouchableOpacity onPress={() => navigation.navigate("Mycourses")}>
                <Text className="font-bold text-white p-1">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="flex-row ml-5">
          <View className="mr-4 mt-4">
            <Image
              className="w-[150px] h-[150.27]"
              borderRadius={10}
              source={sixthImage}
            />
          </View>

          <View className="mt-4 ">
            <Text className="font-bold">Mobile App Development</Text>
            <Text>Building iOS Apps and </Text>
            <Text>Android Apps</Text>
            <View className="flex-row mt-2">
              <View className="bg-orange-500 h-2 rounded-l-xl w-28" />
              <View className="bg-gray-300 h-2 rounded-r-xl flex-1" />
            </View>
            <View className="flex-row">
              <Text>Complete</Text>
              <Text className="ml-28">50%</Text>
            </View>

            <View className="bg-[#2ECC71] rounded-2xl w-24 mt-5">
              <TouchableOpacity onPress={() => navigation.navigate("Mycourses")}>
                <Text className="font-bold text-white p-1">Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
