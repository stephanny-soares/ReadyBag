import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TripSetupScreen({ navigation }) {
  const [destino, setDestino] = useState('');
  const [dias, setDias] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Configurar viaje</Text>

      <Text>Destino</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. Berlín"
        value={destino}
        onChangeText={setDestino}
      />

      <Text>Días</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej. 5"
        keyboardType="numeric"
        value={dias}
        onChangeText={setDias}
      />

      <Button
        title="Generar lista"
        onPress={() => navigation.navigate('PackingList', { destino, dias })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, gap: 12, padding: 24 },
  h1: { fontSize: 22, fontWeight: '700', marginBottom: 12 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12 },
});
