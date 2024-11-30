import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const VideoScreen = () => {
  const suggestedVideos = [
    {
      id: 1,
      title: "React Native Crash Course",
      channel: "Ranvee Asheraf",
      views: "1.2M views",
    },
    {
      id: 2,
      title: "Build a Twitter Clone with React Native",
      channel: "Sonny Sangha",
      views: "456K views",
    },
    {
      id: 3,
      title: "Learn Tailwind CSS in 20 minutes",
      channel: "Web Dev Simplified",
      views: "789K views",
    },
    {
      id: 4,
      title: "Flutter Crash Course",
      channel: "Fireship",
      views: "1M views",
    },
    {
      id: 5,
      title: "Full Stack React Native App Tutorial",
      channel: "David Alex",
      views: "567K views",
    },
  ];

  const comments = [
    {
      id: 1,
      user: "John Doe",
      comment: "Great video! Very informative.",
      likes: 45,
      time: "2 days ago",
    },
    {
      id: 2,
      user: "Jane Smith",
      comment: "Thanks for sharing this. It helped me a lot!",
      likes: 23,
      time: "1 day ago",
    },
    {
      id: 3,
      user: "Bob Johnson",
      comment: "Could you make a follow-up video on advanced topics?",
      likes: 12,
      time: "5 hours ago",
    },
  ];

  return (
    <ScrollView className="bg-blue-50">
      {/* Video Player (Placeholder) */}
      <View className="w-full aspect-video bg-blue-800 rounded-lg shadow-lg">
        <Image
          source={require("../assets/images/myCourseimage.png")}
          className="w-full h-full rounded-lg"
          resizeMode="cover"
        />
      </View>

      {/* Video Info */}
      <View className="p-4">
        <Text className="text-xl font-bold text-blue-900">
          Introduction to Web Development
        </Text>
        <Text className="text-gray-600 mt-1">1.5M views • 3 days ago</Text>
        <View className="flex-row justify-between mt-4">
          <TouchableOpacity className="items-center">
            <Ionicons name="thumbs-up-outline" size={24} color="blue" />
            <Text className="text-xs mt-1 text-blue-600">100K</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Ionicons name="thumbs-down-outline" size={24} color="blue" />
            <Text className="text-xs mt-1 text-blue-600">Dislike</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Ionicons name="share-outline" size={24} color="blue" />
            <Text className="text-xs mt-1 text-blue-600">Share</Text>
          </TouchableOpacity>
          <TouchableOpacity className="items-center">
            <Ionicons name="download-outline" size={24} color="blue" />
            <Text className="text-xs mt-1 text-blue-600">Download</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Channel Info */}
      <View className="flex-row items-center justify-between p-4 border-t border-b border-blue-300">
        <View className="flex-row items-center">
          <Image
            source={require("../assets/images/myCourseimage.png")}
            className="w-10 h-10 rounded-full"
          />
          <View className="ml-3">
            <Text className="font-bold text-blue-800">Davit Rouben</Text>
            <Text className="text-gray-600">1.2M subscribers</Text>
          </View>
        </View>
        <TouchableOpacity className="bg-blue-600 px-4 py-2 rounded-full">
          <Text className="text-white font-bold">Share</Text>
        </TouchableOpacity>
      </View>

      {/* Suggested Videos */}
      <View className="mt-4">
        <Text className="text-lg font-bold text-blue-900 px-4 mb-2">
          Suggested Courses
        </Text>
        {suggestedVideos.map((video) => (
          <TouchableOpacity
            key={video.id}
            className="flex-row p-4 border-b border-blue-200"
          >
            <Image
              source={require("../assets/images/myCourseimage02.png")}
              className="w-32 h-20 rounded"
            />
            <View className="ml-3 flex-1">
              <Text className="font-bold text-blue-800" numberOfLines={2}>
                {video.title}
              </Text>
              <Text className="text-gray-600 mt-1">{video.channel}</Text>
              <Text className="text-gray-600">{video.views}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Comments Section */}
      <View className="mt-4 p-4">
        <Text className="text-lg font-bold text-blue-900 mb-2">Comments</Text>
        <View className="flex-row items-center mb-4">
          <Image
            source={{ uri: "https://placekitten.com/50/50" }}
            className="w-8 h-8 rounded-full"
          />
          <TextInput
            placeholder="Add a comment..."
            className="ml-3 flex-1 border-b border-blue-300 pb-1 text-blue-700"
          />
        </View>
        {comments.map((comment) => (
          <View key={comment.id} className="mb-4">
            <View className="flex-row items-center">
              <Image
                source={{
                  uri: `https://placekitten.com/50/50?image=${comment.id}`,
                }}
                className="w-8 h-8 rounded-full"
              />
              <View className="ml-3">
                <Text className="font-bold text-blue-800">{comment.user}</Text>
                <Text className="text-gray-600 text-xs">{comment.time}</Text>
              </View>
            </View>
            <Text className="mt-2 text-blue-700">{comment.comment}</Text>
            <View className="flex-row items-center mt-2">
              <TouchableOpacity className="flex-row items-center mr-4">
                <Ionicons name="thumbs-up-outline" size={16} color="blue" />
                <Text className="text-blue-600 text-xs ml-1">
                  {comment.likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons name="thumbs-down-outline" size={16} color="blue" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default VideoScreen;
