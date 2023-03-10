import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';
import car from '../assets/images/car.png';
import React from "react";
import {
  Entypo,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from '@expo/vector-icons';
import menuOptions from '../assets/menuOptions';
import MenuItem from "../components/MenuItem";
import {Image} from "expo-image";

const Header = () => {
  return (
    <>
      <View style={styles.header}>
        <View>
          <Text className="text-2xl font-bold color-[#eeeeee] mb-2">My model S</Text>
          <View className="flex flex-row space-x-2 items-center mb-2">
            <View className="border border-gray-600 p-[1px] bg-gray-700/50 rounded-sm w-10">
              <View className="w-8 h-3 bg-gray-600 rounded-sm"/>
            </View>
            <Text className="font-semibold text-gray-500">317 mi</Text>
          </View>
          <Text className="font-semibold text-gray-500">Parked</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome name="user-circle" size={30} color="gray" />
        </TouchableOpacity>
      </View>
      <Image className="w-full h-60 mt-12 object-contain" source={car} style={styles.image} />
      <View className="flex flex-row justify-between mx-10 mt-2">
        <TouchableOpacity activeOpacity={0.7}>
          <Entypo name="lock" size={26} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <MaterialCommunityIcons name="fan" size={26} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome5 name="bolt" size={26} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="car-sport-sharp" size={26} color="gray" />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default function Page() {
  return (
    <View style={styles.container}>

      <FlatList
        data={menuOptions}
        ListHeaderComponent={() => (
          <Header />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        renderItem={({item}) => (
          <MenuItem item={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#161818',
  },
  header: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#eee',
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: '500',
    color: 'gray',
  },
});
