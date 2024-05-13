import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const ProfileSection = () => {
  const userDetails = {
    name: "username",
    email: "email@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
    jobTitle: "Engineer",
    department: "Engineering",
    company: "ABC Corporation",
    machinesAdded: 5,
    totalFuelConsumed: "1000 L",
    totalPowerGenerated: "5000 kW",
  };

  const scrollViewRef = useRef(null);

  const handleLogout = () => {
    console.log("Logout");
  };

  const handleChangePassword = () => {
    console.log("Change Password");
  };

  const handleManageNotifications = () => {
    console.log("Manage Notifications");
  };

  const handleTotalMachinesClick = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 500, animated: true });
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", flex: 1 }}>
      <ScrollView ref={scrollViewRef}>
        <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 20,
            }}
          >
            <View>
              <Text style={{ fontSize: 14, color: "#9CA3AF" }}>
                Welcome back
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginTop: 5,
                }}
              >
                power up
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "#FFFFFF",
                  marginTop: 10,
                  paddingBottom: -11,
                }}
              >
                Profile
              </Text>
            </View>
            <Image
              source={images.logoSmall}
              style={{ width: 50, height: 50, marginTop: 5 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <Image
              source={images.profileAvatar}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                borderColor: "white",
                images: "icon.logosmall",
                marginBottom: 10,
              }}
            />
            <Text style={{ fontSize: 24, color: "#FFFFFF" }}>
              {userDetails.name}
            </Text>
            <Text style={{ fontSize: 16, color: "#9CA3AF", marginBottom: 5 }}>
              {userDetails.jobTitle}, {userDetails.department}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#9CA3AF",
                justifyContent: "center",
              }}
            >
              {userDetails.company}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.detail}>Email: {userDetails.email}</Text>
            <Text style={styles.detail}>Phone: {userDetails.phone}</Text>
            <Text style={styles.detail}>Address: {userDetails.address}</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.detail}>
              Machines Added: {userDetails.machinesAdded}
            </Text>
            <Text style={styles.detail}>
              Total Fuel Consumed: {userDetails.totalFuelConsumed}
            </Text>
            <Text style={styles.detail}>
              Total Power Generated: {userDetails.totalPowerGenerated}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleChangePassword}
          >
            <Image
              source={images.changePasswordIcon}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleManageNotifications}
          >
            <Image
              source={images.notificationIcon}
              style={styles.actionIcon}
              resizeMode="contain"
            />
            <Text style={styles.actionText}>Manage Notifications</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  detail: { fontSize: 16, color: "#FFFFFF", marginBottom: 5 },
  actionButton: {
    backgroundColor: "#FFA500",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  actionIcon: { width: 20, height: 20, marginRight: 10 },
  actionText: { fontSize: 18, color: "#FFFFFF", fontWeight: "bold" },
  logoutButton: {
    backgroundColor: "#FF6347",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    width: "90%",
    height: "5%",

    borderRadius: 10,
  },
  logoutText: {
    fontSize: 18,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
};

export default ProfileSection;
