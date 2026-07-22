import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
export default function LoginScreen(){
    return(
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios"? "padding": "height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
               <View style={styles.header}>
                    <View style={styles.logoContainer}>
                        
                        <Feather name="shopping-bag" size={32} color="#fff"/>
                    </View>
                    <Text style={styles.appName}>ShopEase</Text>
                    <Text style={styles.welcomeText}>Welcome back! Please enter your details</Text>
               </View>
               <View style={styles.card}>
                <Text style={styles.label}>Email Address</Text>
                <View style={styles.inputContainer}>
                    <Feather name="mail" size={20} color="#9CA3AF" style={{marginLeft:5}}/>
                    <TextInput
                        style={styles.input}
                        placeholder="name@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <View style={styles.passwordRow}>
                    <Text style={styles.label}>Password</Text>
                    <TouchableOpacity>
                        <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <Feather name="lock" size={20} color="#9CA3AF" style={{marginLeft:5}}/>
                    <TextInput
                        style={styles.input}
                        placeholder="***********"
                        secureTextEntry={true}
                    
                    />
                </View>

               </View>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    scrollContainer:{
        flexGrow:1,
        justifyContent:"center",
        padding:24,
        paddingTop:16
    },
    header:{
        alignItems:"center"
    },
    logoContainer:{
        width:60,
        height:60,
        borderRadius:16,
        backgroundColor:"#00B074",
        justifyContent:"center",
        alignItems:"center",
        
    },
    appName:{
        fontSize:32,
        fontWeight:"bold",
        color:"#006C47"

    },
    welcomeText:{
        fontSize:15,
        color:"#6B7280",
        textAlign:"center",
        marginBottom:25
    },
    card:{
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#F3F4F6",
        borderRadius:16,
        padding:24,
        shadowColor:"#000",
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.03,
        shadowRadius:8,
        elevation:2
    },
    label:{
        fontSize:14,
        color:"#374151",
        marginBottom:8
    },
    inputContainer:{
        flexDirection:"row",
        alignItems:'center',
        borderWidth:1,
        borderColor:"#D1D5DB",
        borderRadius:8,
        paddingHorizontal:12,
        height:50,
        marginBottom:25
    },
    input:{
        flex:1,
        height:"100%",
        marginLeft:8,
    },
    passwordRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    forgotPasswordText:{
        fontWeight:"600",
        color:"#006C47"
    }
})