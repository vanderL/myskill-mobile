import React from "react";
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity
} from "react-native";

export function SkillCard() {

  return (

    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={.7}
    >
      <Text style={styles.textSkill}>
        {'skill'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  buttonSkill: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: '#1f1e25',
    padding: 15,
    alignItems: 'center'
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  }
})
