import React, { useState } from 'react';
import { View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerButton({ onPick }) {
  const [uri, setUri] = useState(null);

  const pickImage = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== 'granted') {
      Alert.alert('Permiso requerido', 'Autoriza el acceso a tus fotos para continuar.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.8,
    });

    if (!result.canceled) {
      const selected = result.assets?.[0]?.uri;
      setUri(selected);
      onPick?.(selected);
    }
  };

  return (
    <View style={{ gap: 12, alignItems: 'center' }}>
      <Button title="Elegir imagen" onPress={pickImage} />
      {uri ? <Image source={{ uri }} style={{ width: 160, height: 160, borderRadius: 12 }} /> : null}
    </View>
  );
}
