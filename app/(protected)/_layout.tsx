import { useDrawer } from "../src/admin/viewmodels/use-drawer";
import { Drawer } from "expo-router/drawer";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function ProtectedLayout() {
  const { profile, navigationOptions } = useDrawer();
  console.log(profile);

  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerTintColor: "#006C47",
          headerTitleStyle: { fontWeight: "bold" },
          drawerStyle: { width: 280 },
        }}
        drawerContent={(props) => {
          const activeIndex = props.state.index;
          const activeRouteName = props.state.routeNames[activeIndex];
          return (
            <View style={styles.drawerContainer}>
              <View style={styles.header}>
                <View style={styles.headerInfoUser}>
                  <Image
                    source={{ uri: profile.avatarUrl }}
                    style={styles.avatar}
                  />
                  <View style={styles.headerInfo}>
                    <Text style={styles.adminName}>{profile.name}</Text>
                    <Text style={styles.adminRole}>{profile.role}</Text>
                  </View>
                </View>

                <View style={styles.versionTag}>
                  <Text style={styles.versionText}>{profile.version}</Text>
                </View>
              </View>
              <View>
                {navigationOptions.map((option)=>{
                    const isSelected= activeRouteName=== option.name
                    return(
                        <TouchableOpacity
                            key={option.name}
                        >
                            <Text>{option.label}</Text>

                        </TouchableOpacity>
                    )
                })}
              </View>
            </View>
          );
        }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: "#F9FAFB",
    paddingTop: 50,
  },
  header: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
    alignItems: "flex-start",
  },
  headerInfoUser:{
    flexDirection:"row"
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  headerInfo: {
    marginLeft: 15,
    marginTop: 5,
  },
  adminName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#006C47",
  },
  adminRole: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#6B7280",
    marginTop: 2,
  },
  versionTag:{
    borderWidth:1,
    borderColor: "#D1D5DB",
    paddingHorizontal:8,
    paddingVertical:2,
    borderRadius:12,
    marginTop:8
  },
  versionText:{
    fontSize:12,
    color: "#6B7280",
    fontWeight:"bold"
  }
});
