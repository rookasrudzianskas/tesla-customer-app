//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";

const MenuItem = ({item}) => {
  console.log('This is item>>>>', item)
  return (
    <TouchableOpacity activeOpacity={0.7} className="flex flex-row items-center mt-10">
      <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />
      <Text className="text-[20px] mt-1 font-semibold ml-2 text-white">{item.name}</Text>
      <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: 'auto' }}
      />
    </TouchableOpacity>
  );
};

export default MenuItem;
