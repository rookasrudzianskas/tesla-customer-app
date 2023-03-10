import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text className="text-2xl font-bold color-[#eeeeee] mb-2">My model S</Text>
          <Text className="font-semibold text-gray-500">Parked</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesome name="user-circle" size={30} color="gray" />
        </TouchableOpacity>
      </View>
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
