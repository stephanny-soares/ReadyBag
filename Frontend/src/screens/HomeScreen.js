import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PackPal</Text>
      <Text style={styles.subtitle}>Prepara tu equipaje con IA</Text>
      <Button title="Empezar" onPress={() => navigation.navigate('TripSetup')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  title: { fontSize: 28, fontWeight: '700', marginBottom: 8 },
  subtitle: { fontSize: 16, opacity: 0.7, marginBottom: 24 },
});
