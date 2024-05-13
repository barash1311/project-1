// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   Image,
// //   TouchableOpacity,
// //   FlatList,
// //   TextInput,
// // } from "react-native";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import { images } from "../../constants";
// // import { ScrollView } from "react-native";
// // import SearchInput from "../../components/SearchInput";

// // const PresentMachines = () => {
// //   const machinesData = [
// //     {
// //       id: 1,
// //       name: "Machine 1",
// //       fuelConsumed: "500 L",
// //       powerGenerated: "2000 kW",
// //     },
// //     {
// //       id: 2,
// //       name: "Machine 2",
// //       fuelConsumed: "700 L",
// //       powerGenerated: "2500 kW",
// //     },
// //     {
// //       id: 3,
// //       name: "Machine 3",
// //       fuelConsumed: "600 L",
// //       powerGenerated: "2200 kW",
// //     },
// //     {
// //       id: 4,
// //       name: "Machine 4",
// //       fuelConsumed: "600 L",
// //       powerGenerated: "2200 kW",
// //     },
// //     // Add more machine data as needed
// //   ];

// //   const [machines, setMachines] = useState(machinesData);
// //   const [selectedMachine, setSelectedMachine] = useState(null);
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const selectMachine = (machineId) => {
// //     setSelectedMachine(machineId);
// //   };

// //   const filterMachines = (searchTerm) => {
// //     const filteredMachines = machinesData.filter((machine) =>
// //       machine.name.toLowerCase().includes(searchTerm.toLowerCase())
// //     );
// //     setMachines(filteredMachines);
// //   };

// //   return (
// //     <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
// //       <ScrollView>
// //         {/* Header */}
// //         <View className=" py-5 justify-between items-start flex-row mb-6">
// //           <View>
// //             <Text className="font-pmedium text-sm text-gray-100">
// //               Welcome back
// //             </Text>
// //             <Text className="text-2xl font-psemibold text-white">power up</Text>
// //           </View>
// //           <View className="mt-1.5">
// //             <Image
// //               source={images.logoSmall}
// //               className="w-10 h-10 mr-4"
// //               resizeMode="contain"
// //             />
// //           </View>
// //         </View>
// //         <SearchInput placeholder="seach for the machine" />
// //         <View className="py-11"></View>
// //         {/* Machine List */}
// //         <FlatList
// //           data={machines}
// //           keyExtractor={(item) => item.id.toString()}
// //           renderItem={({ item }) => (
// //             <TouchableOpacity
// //               style={[
// //                 styles.machineItem,
// //                 selectedMachine === item.id && styles.selectedMachine,
// //               ]}
// //               onPress={() => selectMachine(item.id)}
// //             >
// //               <Text style={styles.machineName}>{item.name}</Text>
// //               <View style={styles.machineDetails}>
// //                 <Text style={styles.machineText}>
// //                   Fuel Consumed: {item.fuelConsumed}
// //                 </Text>
// //                 <Text style={styles.machineText}>
// //                   Power Generated: {item.powerGenerated}
// //                 </Text>
// //               </View>
// //             </TouchableOpacity>
// //           )}
// //         />
// //       </ScrollView>
// //     </SafeAreaView>
// //   );
// // };

// // const styles = {
// //   machineItem: {
// //     paddingHorizontal: 18,
// //     paddingVertical: 15,
// //     marginBottom: 10,
// //     borderRadius: 8,
// //     backgroundColor: "#161622",
// //     // borderColor: "white",
// //   },
// //   selectedMachine: {
// //     backgroundColor: "#FFA500",
// //     // borderColor: "white",
// //   },
// //   machineName: {
// //     fontSize: 18,
// //     color: "#FFFFFF",
// //     fontWeight: "bold",
// //     marginBottom: 5,
// //     // borderColor: "white",
// //   },
// //   machineDetails: {
// //     flexDirection: "row",
// //     justifyContent: "space-between",
// //   },
// //   machineText: {
// //     fontSize: 16,
// //     color: "#FFFFFF",
// //     // borderColor: "white",
// //   },
// // };

// // export default PresentMachines;

// // PresentMachines.js;

// import React, { useState } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { images } from "../../constants";
// import { ScrollView } from "react-native";
// import SearchInput from "../../components/SearchInput";
// import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

// const PresentMachines = () => {
//   const navigation = useNavigation(); // Get navigation object

//   const machinesData = [
//     {
//       id: 1,
//       name: "Machine 1",
//       fuelConsumed: "500 L",
//       powerGenerated: "2000 kW",
//     },
//     {
//       id: 2,
//       name: "Machine 2",
//       fuelConsumed: "700 L",
//       powerGenerated: "2500 kW",
//     },
//     {
//       id: 3,
//       name: "Machine 3",
//       fuelConsumed: "600 L",
//       powerGenerated: "2200 kW",
//     },
//     {
//       id: 4,
//       name: "Machine 4",
//       fuelConsumed: "600 L",
//       powerGenerated: "2200 kW",
//     },
//   ];

//   const [machines, setMachines] = useState(machinesData);
//   const [selectedMachine, setSelectedMachine] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const selectMachine = (machineId) => {
//     setSelectedMachine(machineId);
//     // Navigate to Performance component with machineId as parameter
//     navigation.navigate("Performance", { machineId });
//   };

//   const filterMachines = (searchTerm) => {
//     const filteredMachines = machinesData.filter((machine) =>
//       machine.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setMachines(filteredMachines);
//   };

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
//       <ScrollView>
//         {/* Header */}
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-between",
//             padding: 16,
//           }}
//         >
//           <View>
//             <Text style={{ fontSize: 14, color: "#9CA3AF" }}>Welcome back</Text>
//             <Text
//               style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}
//             >
//               power up
//             </Text>
//           </View>
//           <Image
//             source={images.logoSmall}
//             style={{ width: 40, height: 40 }}
//             resizeMode="contain"
//           />
//         </View>
//         <SearchInput placeholder="Search for the machine" />
//         <View style={{ paddingVertical: 11 }}></View>
//         {/* Machine List */}
//         <FlatList
//           data={machines}
//           keyExtractor={(item) => item.id.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity
//               style={{
//                 paddingHorizontal: 18,
//                 paddingVertical: 15,
//                 marginBottom: 10,
//                 borderRadius: 8,
//                 backgroundColor:
//                   selectedMachine === item.id ? "#FFA500" : "#161622",
//               }}
//               onPress={() => selectMachine(item.id)}
//             >
//               <Text
//                 style={{
//                   fontSize: 18,
//                   color: "#FFFFFF",
//                   fontWeight: "bold",
//                   marginBottom: 5,
//                 }}
//               >
//                 {item.name}
//               </Text>
//               <View
//                 style={{
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
//                   Fuel Consumed: {item.fuelConsumed}
//                 </Text>
//                 <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
//                   Power Generated: {item.powerGenerated}
//                 </Text>
//               </View>
//             </TouchableOpacity>
//           )}
//         />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default PresentMachines;

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import { ScrollView } from "react-native";
import SearchInput from "../../components/SearchInput";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const PresentMachines = () => {
  const navigation = useNavigation(); // Get navigation object

  const machinesData = [
    {
      id: 1,
      name: "Machine 1",
      fuelConsumed: "500 L",
      powerGenerated: "2000 kW",
    },
    {
      id: 2,
      name: "Machine 2",
      fuelConsumed: "700 L",
      powerGenerated: "2500 kW",
    },
    {
      id: 3,
      name: "Machine 3",
      fuelConsumed: "600 L",
      powerGenerated: "2200 kW",
    },
    {
      id: 4,
      name: "Machine 4",
      fuelConsumed: "600 L",
      powerGenerated: "2200 kW",
    },
  ];

  const [machines, setMachines] = useState(machinesData);
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const selectMachine = (machineId) => {
    setSelectedMachine(machineId);
    // Navigate to Performance component with machineId as parameter
    navigation.navigate("performance", { machineId });
  };

  const filterMachines = (searchTerm) => {
    const filteredMachines = machinesData.filter((machine) =>
      machine.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMachines(filteredMachines);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#161622" }}>
      <ScrollView>
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 16,
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: "#9CA3AF" }}>Welcome back</Text>
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#FFFFFF" }}
            >
              power up
            </Text>
          </View>
          <Image
            source={images.logoSmall}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </View>
        <SearchInput placeholder="Search for the machine" />
        <View style={{ paddingVertical: 11 }}></View>
        {/* Machine List */}
        <FlatList
          data={machines}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                paddingHorizontal: 18,
                paddingVertical: 15,
                marginBottom: 10,
                borderRadius: 8,
                backgroundColor:
                  selectedMachine === item.id ? "#FFA500" : "#161622",
              }}
              onPress={() => selectMachine(item.id)}
            >
              <Text
                style={{
                  fontSize: 18,
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
                  Fuel Consumed: {item.fuelConsumed}
                </Text>
                <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
                  Power Generated: {item.powerGenerated}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default PresentMachines;
