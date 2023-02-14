import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/components/Feed';

export default function App() {
  return (
    <View style={styles.container}>
      <Feed />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3E423F',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: "#f4f5f6",
    fontWeight: "bold",
  }
});
