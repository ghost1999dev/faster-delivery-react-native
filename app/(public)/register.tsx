import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function RegisterScreen() {
    const router = useRouter()
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
          <Text style={styles.label}>FULL NAME</Text>
          <View style={styles.inputContainer}>
            <Feather name="user" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="Fernando"
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.label}>EMAIL ADDRESS</Text>
          <View style={styles.inputContainer}>
            <Feather name="mail" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.label}>PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Feather name="lock" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="**************"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <Text style={styles.label}>CONFIRM PASSWORD</Text>
          <View style={styles.inputContainer}>
            <Feather name="shield" size={20} color="#9CA3AF" />
            <TextInput
              style={styles.input}
              placeholder="********"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.buttonRegister}>
            <Text style={styles.buttonRegisterText}>Register</Text>
            <Feather name="arrow-right" size={18} color="#fff" style={{marginLeft:5}}/>
          </TouchableOpacity>
        </View>
        <View style={styles.signInRow}>
            <Text style={styles.signInText}>Already have an account </Text>
            <TouchableOpacity onPress={()=> router.push("/(public)")}>
                <Text style={styles.signInTextLink}>Log in here</Text>
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
    justifyContent: "center",
    padding: 24,
    paddingTop: 40,
  },
  card: {
    borderWidth: 1,
    backgroundColor: "#fff",
    padding: 12,
    borderColor: "#F3F4F6",
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
  input: {
    flex: 1,
    height: "100%",
    marginLeft: 8,
  },
  buttonRegister: {
    backgroundColor: "#006C47",
    height: 50,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
    
  },
  buttonRegisterText:{
    color:"#fff",
    fontSize:16,
    fontWeight:"bold"
  },
  signInRow:{
    flexDirection:"row",
    justifyContent:"center",
    marginTop:20
  },
  signInText:{
    fontSize:14,
    color:"#6B7280"
  },
  signInTextLink:{
    fontSize:14,
    color:"#006C47",
    fontWeight:"bold"
  }
});
