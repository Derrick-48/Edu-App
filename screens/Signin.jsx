import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Octicons, Fontisto, FontAwesome6 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase";

const { width } = Dimensions.get("window");

const Signin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, [navigation]);

  const handleSignin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />
          </View>

          <Text style={styles.title}>Sign in</Text>

          <View style={styles.inputContainer}>
            <Octicons name="person" size={24} color="#0F0C80" />
            <TextInput
              style={styles.input}
              placeholder="Email or Username"
              onChangeText={setEmail}
              value={email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Fontisto name="locked" size={24} color="#0F0C80" />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={setPassword}
              value={password}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <FontAwesome6
                name={showPassword ? "eye" : "eye-slash"}
                size={20}
                color="black"
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signinButton} onPress={handleSignin}>
            <Text style={styles.signinButtonText}>Sign in</Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or sign in With</Text>

          <View style={styles.socialButtonsContainer}>
            {["Google", "Apple", "Twitter", "LinkedIn"].map((platform) => (
              <TouchableOpacity key={platform} style={styles.socialButton}>
                <Image
                  style={styles.socialIcon}
                  source={{
                    uri: `https://example.com/${platform.toLowerCase()}_icon.png`,
                  }}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signupButtonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  safeArea: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: width * 0.05,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: width * 0.1,
  },
  logo: {
    width: width * 0.8,
    height: width * 0.3,
    resizeMode: "contain",
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: "600",
    color: "#0F0C80",
    marginBottom: width * 0.05,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0F0C80",
    borderRadius: 16,
    paddingHorizontal: 10,
    marginBottom: width * 0.05,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: width * 0.045,
    color: "#333",
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: width * 0.05,
  },
  forgotPasswordText: {
    color: "#0F0C80",
    fontWeight: "600",
  },
  signinButton: {
    backgroundColor: "#2ECC71",
    padding: width * 0.04,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: width * 0.1,
  },
  signinButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: width * 0.045,
  },
  orText: {
    textAlign: "center",
    color: "#0F0C80",
    marginBottom: width * 0.05,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: width * 0.1,
  },
  socialButton: {
    backgroundColor: "white",
    padding: width * 0.02,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  socialIcon: {
    width: width * 0.08,
    height: width * 0.08,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signupText: {
    color: "#0F0C80",
  },
  signupButtonText: {
    color: "#0F0C80",
    fontWeight: "bold",
  },
});

export default Signin;
