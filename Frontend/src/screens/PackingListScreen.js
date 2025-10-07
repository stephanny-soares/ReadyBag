import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const mockItems = [
  { id: '1', name: 'Camisetas x3' },
  { id: '2', name: 'Pantalón x1' },
  { id: '3', name: 'Cargador' },
];

export default function PackingListScreen({ route }) {
  const { destino, dias } = route.params || {};
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Lista de equipaje</Text>
      {destino && dias ? <Text style={styles.meta}>Viaje a {destino} ({dias} días)</Text> : null}

      <FlatList
        data={mockItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>• {item.name}</Text>}
        contentContainerStyle={{ paddingTop: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24 },
  h1: { fontSize: 22, fontWeight: '700' },
  meta: { marginTop: 4, opacity: 0.7 },
  item: { fontSize: 16, paddingVertical: 8 },
});
