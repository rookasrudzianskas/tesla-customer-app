//@ts-nocheck
import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import climateImage from '../assets/images/climate.png';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from "react";
import {Image} from "expo-image";

const ClimateScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image source={climateImage} className="h-[65%] w-full" />
      <TouchableOpacity onPress={() => router.back()} className="absolute top-16 left-10 bg-[#2f3030] p-2 rounded-md" activeOpacity={0.7}>
        <Entypo name="chevron-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={{marginTop: 'auto'}} className="flex items-center mb-12 -mt-10 p-4">
        <Text className="text-gray-600/80 font-[600] text-lg pt-4">Interior 74°F - Exterior 66°F</Text>
        <View className="flex flex-row justify-between items-center w-full px-4">
          <View className="flex flex-col items-center">
            <MaterialCommunityIcons name="power" size={42} color="white" />
            <Text className="text-white font-[600] text-[18px] mt-2">On</Text>
          </View>

          <View className="flex flex-row items-center">
            <Entypo name="chevron-left" size={30} color="gray" />
            <Text style={styles.temperatureText}>68°</Text>
            <Entypo name="chevron-right" size={30} color="gray" />
          </View>

          <View className="flex flex-col items-center">
            <MaterialCommunityIcons name="car-door" size={42} color="gray" />
            <Text className="text-gray-400/70 font-[600] text-[18px] mt-2">Vent</Text>
          </View>
        </View>
        </View>
    </View>
  );
};

export default ClimateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161818',
  },
  back: {
    position: 'absolute',
    top: 50,
    left: 25,
    backgroundColor: '#2f3030',
    padding: 10,
    borderRadius: 5,
  },
  footer: {
    alignItems: 'center',
    padding: 12,
    marginBottom: 20,
    marginTop: 'auto',
  },
  label: {
    color: 'gray',
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 20,
  },
  controlsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    fontSize: 48,
    fontWeight: '300',
    color: 'white',
    marginHorizontal: 20,
  },
  iconButtonContainer: {
    alignItems: 'center',
  },
  iconButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
});
