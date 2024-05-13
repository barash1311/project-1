import React from "react";
import { View, Text, Image } from "react-native";
import { images } from "../../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { PieChart } from "react-native-gifted-charts";
import Svg, { Circle, Rect, Text as SvgText, Path } from "react-native-svg";
import { LineChart } from "react-native-chart-kit";

const Performance = () => {
  // Sample data for machines' performance
  const bookmarksData = [
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

  // Sample data for line chart (time series)
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 62],
      },
    ],
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#161622", flex: 1 }}>
      <ScrollView>
        <View style={{ backgroundColor: "#161622", padding: 16 }}>
          {/* Top Heading */}
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
            </View>
            <Image
              source={images.logoSmall}
              style={{ width: 50, height: 50, marginTop: 5 }}
              resizeMode="contain"
            />
          </View>

          {/* Performance Page Content */}
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#FFFFFF",
              marginBottom: 20,
            }}
          >
            Performance Page
          </Text>

          {/* Pie Chart */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <PieChart
              data={pieData}
              donut
              showGradient
              sectionAutoFocus
              radius={90}
              innerRadius={60}
              innerCircleColor={"#232B5D"}
              centerLabelComponent={() => (
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <Text
                    style={{ fontSize: 14, color: "white", fontWeight: "bold" }}
                  >
                    {totalPowerGenerated} kW
                  </Text>
                  <Text style={{ fontSize: 14, color: "white" }}>
                    {totalFuelConsumed} L
                  </Text>
                </View>
              )}
            />
          </View>

          {/* Legend Component */}
          {renderLegendComponent()}

          {/* Line Chart */}
          <View style={{ alignItems: "center", marginBottom: 20 }}>
            <LineChart
              data={lineChartData}
              width={350}
              height={200}
              yAxisSuffix="kW"
              yAxisInterval={1}
              chartConfig={{
                backgroundColor: "#161622",
                backgroundGradientFrom: "#161622",
                backgroundGradientTo: "#161622",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#ffa726",
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Performance;
