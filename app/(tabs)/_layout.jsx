import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";
import EStyleSheet from "react-native-extended-stylesheet";
import { StatusBar } from "expo-status-bar";

const TabIcon = (icon, color, name, focused) => {
  return (
    <View className="items-center justify-center gap-1">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-4 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-lg `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FFA000",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "232533",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          // className="py-4"
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                // size={size}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          // className="py-4"
          name="performance"
          options={{
            title: "performance",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                // icon={icons.bookmark}
                color={color}
                name="performance"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          // className="py-4"
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                name="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          // className=" py-4"
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                name="Create"
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          // className="py-4"
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default TabsLayout;
