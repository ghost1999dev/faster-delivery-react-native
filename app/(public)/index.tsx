import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function UserPost(){
    const printInformation=(text:string)=>{
        console.log(text);
    }
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.avatarImage} source={{uri:"https://cdn-icons-png.flaticon.com/512/3849/3849119.png"}}/>
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>FernandoDev</Text>
                    <Text style={styles.username}>@fernandoDev</Text>
                    <TouchableOpacity
                        onPress={(value)=>{
                            printInformation("Press from link")
                        }}
                    >
                        <Text style={styles.edit}>Edit Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.followsInformation}>
                <View style={styles.followContainer}>
                    <Text style={styles.label}>Post</Text>
                    <Text style={styles.value}>120</Text>
                </View>
                <View style={styles.followContainer}>
                    <Text style={styles.label}>Following</Text>
                    <Text style={styles.value}>200</Text>
                </View>
                <View style={styles.followContainer}>
                    <Text style={styles.label}>Followers</Text>
                    <Text style={styles.value}>300</Text>
                </View>
            </View>
            <Text style={styles.bio}>
                Esta película dirigida por Steven Spilberg retrata la vida del estadounidense Frank Abagnale Jr., un estafador que, a partir de los 19 años se hace pasar por piloto de avión, médico y abogado, y amasa así una importante fortuna. Además, este personaje (encarnado por Leonardo DiCaprio) apela a la falsificación de cheques, con una destreza tal que termina siendo reclutado por el FBI como asesor. El filme fue estrenado en 2002 y recibió dos nominaciones al Oscar, en las categorías de Mejor Actor de Reparto para Christopher Walken y Mejor Banda Sonora para John Williams.
            </Text>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1
    },
    header:{
        flexDirection:"row",
        marginTop:80,
        alignItems:"center",
        padding:20
    },
    avatarImage:{
        width:60,
        height:60,
        borderRadius:25
    },
    infoContainer:{
        marginLeft:20
    },
    name:{
        fontSize:25,
        fontWeight:'bold'
    },
    username:{
        color:"#b1abab",
        marginBottom:10
    },
    edit:{
        color:"#0C19F5"
    },
    followsInformation:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,

    },
    followContainer:{
        flex:1,
        alignItems:"center"
    },
    label:{
        color:"#b1abab"
    },
    value:{
        fontSize:20
    },
    bio:{
        padding:20
    }
})