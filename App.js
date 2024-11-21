// In App.js in a new project

import * as React from "react";

import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Courses from "./screens/Courses";
import "./global.css";
import Signout from "./screens/Signout";
import Mycourses from "./screens/Mycourses";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Start from "./screens/Start";




const RootStack = createNativeStackNavigator({
  initialRouteName: "Start",
  screenOptions: {
    headerStyle: { backgroundColor: "b" },
    headerShown: false
  },
  screens: {

    Start: {
      screen: Start,
      options: {
        title: "Getting Started"
      },
},

    Home: {
      screen: Home,
      options: {
        title: "Home",
      },
    },
    Courses: {
      screen: Courses,
      options: {
        title: "Courses",
      },
    },

    Signup: {
      screen: Signup,
      options: {
        title: "Signup",
      },
    },
    Signin: {
      screen: Signin,
      options: {
        title: "Signin",
      },
    },
    Mycourses: {
      screen: Mycourses,
      options: {
        title: "Mycourses",
      },
    },
    Signout: {
      screen: Signout,
      options: {
        title: "Signout",
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
