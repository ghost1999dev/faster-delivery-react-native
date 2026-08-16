import { useRouter } from "expo-router";
import { useState } from "react";
import { AdminProfile, DrawerItemOption } from "../models/drawer.model";

export function useDrawer(){
    const router = useRouter()

    const [profile]= useState<AdminProfile>({
        name:"Admin Portal",
        role:"System Admin",
        avatarUrl:"https://avatarfiles.alphacoders.com/375/thumb-1920-375819.jpeg",
        version:"v4.2.3"
    })

    const navigationOptions: DrawerItemOption[] = [
    { name: "dashboard", label: "Dashboard", icon: "grid" },
    { name: "orders", label: "Orders", icon: "package" },
    { name: "inventory", label: "Inventory", icon: "archive" },
    { name: "users", label: "Users", icon: "users" },
    { name: "settings", label: "Settings", icon: "settings" },
  ];

  return {
    profile,
    navigationOptions,
  }

}