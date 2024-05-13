import { View, Text, Image, Alert } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Powerful from "../../components/Powerful";
import EmptyState from "../../components/EmptyState";
import { RefreshControl } from "react-native";
import { useState } from "react";
import { getAllPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppWrite";
import VideoCard from "../../components/VideoCard";

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh = async () => {
    setrefreshing(true);
    await refetch();
    setrefreshing(false);
  };
  // console.log(data);
  return (
    <SafeAreaView className="bg-primary  h-full">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        // data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="mt-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  power up
                </Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* search */}
            <SearchInput placeholder="seach for the machine" />

            <View className="w-full flex-1 pt-5 mb-8">
              <Text className="text-gray-100 text-lg font-pregular mb-3">
                {" "}
                Latest Machines
              </Text>
              <Powerful posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState title="no machines found" subtitle="no machine exits" />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
