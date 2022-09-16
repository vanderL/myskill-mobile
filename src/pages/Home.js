import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity
} from "react-native";

export function Home() {
  return (
    <View
      style={styles.container}
    >
      <Text
        style={styles.title}
      >
        Welcome Vander
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'Nova Habilidade'}
        placeholderTextColor={'#555'}
      />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={.7}
      >
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <Text
        style={[styles.title, { marginTop: 50 }]}
      >
        Minhas Habilidades
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 50
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    marginBottom: 20,
    borderRadius: 8
  },
  button: {
    backgroundColor: '#a370f7',
    padding: 20,
    borderRadius: 7,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
  }
})
