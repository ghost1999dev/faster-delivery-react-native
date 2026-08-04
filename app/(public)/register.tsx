import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useRegister } from "../src/auth/viewmodels/use-register";

export default function RegisterScreen() {
  const router = useRouter();
  const {
    email,
    lastName,
    fullName,
    password,
    confirmPassword,
    phone,
    setEmail,
    setLastName,
    setFullName,
    setPassword,
    setConfirmPassword,
    setPhone,
    handleRegister,
    errorMessage,
    isLoading,
  } = useRegister();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Create Account</Text>
          {errorMessage && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errorMessage}</Text>
            </View>
          )}
          <Text style={styles.label}>Full name</Text>
          <View style={styles.inputContainer}>
            <Feather name="user" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={fullName}
              onChangeText={setFullName}
              placeholder="Fernando"
            />
          </View>
          <Text style={styles.label}>Last name</Text>
          <View style={styles.inputContainer}>
            <Feather name="user" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={lastName}
              onChangeText={setLastName}
              placeholder="Fernando"
            />
          </View>
          <Text style={styles.label}>Phone</Text>
          <View style={styles.inputContainer}>
            <Feather name="phone" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={phone}
              
              onChangeText={setPhone}
              placeholder="Fernando"
            />
          </View>
          <Text style={styles.label}>Email Address</Text>
          <View style={styles.inputContainer}>
            <Feather name="mail" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={email}
              onChangeText={setEmail}
              placeholder="name@user.com"
              keyboardType="email-address"
            />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={password}
              onChangeText={setPassword}
              placeholder="**************"
              secureTextEntry={true}
            />
          </View>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.inputContainer}>
            <Feather name="shield" size={20} color="#9CA3AF" />
            <TextInput
              style={{ flex: 1, height: "100%", marginLeft: 8 }}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="**************"
              secureTextEntry={true}
            />
          </View>

          {isLoading ? (
            <ActivityIndicator size="large" color="#006C47" />
          ) : (
            <TouchableOpacity
              style={styles.buttonRegister}
              onPress={handleRegister}
            >
              <Text style={styles.buttonRegisterText}>Register</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.signRow}>
          <Text style={styles.signInText}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => router.push("/(public)")}>
            <Text style={styles.signTextLink}> Log in here</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
    justifyContent: "center",
    paddingTop: 40,
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 12,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1F2937",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#374151",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 15,
    height: 50,
  },
  buttonRegister: {
    backgroundColor: "#006C47",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 8,
  },
  buttonRegisterText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signInText: {
    fontSize: 14,
    color: "#6B7280",
  },
  signTextLink: {
    fontSize: 14,
    color: "#006C47",
    fontWeight: "bold",
  },
  errorContainer: {
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    padding: 12,
    borderColor: "#FCA5A5",
    borderRadius: 8,
    marginBottom: 20,
  },
  errorText: {
    fontSize: 14,
    color: "#DC2626",
    textAlign: "center",
    fontWeight: "500",
  },
});
