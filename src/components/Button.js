import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export function Button({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={.7}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>Adicionar</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
