import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
 import { auth } from "../firebase";

const Signout = () => {
  const navigation = useNavigation(); // Access navigation object
  const imagelg = require("../assets/images/image.png");

  const handleSignOut = () => {

 auth
   .signOut()
   .then(() => {
     navigation.replace("Start");
   })
   .catch((error) => alert(error.message));
     
  };

  return (
    <View className="bg-[#0F0C80] h-full">
      <View className="flex-row items-center mt-9 mb-10 ">
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <AntDesign name="left" size={34} color="#E67E22" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mycourses")}>
          <Text className="text-[#E67E22] text-xl">Back</Text>
        </TouchableOpacity>
      </View>

      <View>
        <View className="bg-white mt-12 m-5 p-3 rounded-xl">
          <Text className="text-[20px] text-center text-pink-400">
            Interested in a fun fact?{" "}
          </Text>
        </View>
        <View className="bg-[#FFFDD0] w-40 ml-32 rounded-full mb-9">
          <TouchableOpacity
            onPress={() =>
              alert(
                "If you search 241543903 in google images,You will find a lot of pictures of people putting their heads in refrigerators"
              )
            }
          >
            <Text className="text-[20px] text-center"> CLICK ME !</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <Image className="h-[300px] w-[390px]" source={imagelg} />
      </View>

      {/* Yes Button */}

      <View className='p-20'> 
        <View className="bg-[#A8BBA5] w-64 h-24 rounded-full justify-center items-center ">
          <TouchableOpacity onPress={handleSignOut}>
            <Text className="text-center text-2xl font-semibold font">
              Click here to Sign out{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* No Button */}
    </View>
  );
};

export default Signout;
