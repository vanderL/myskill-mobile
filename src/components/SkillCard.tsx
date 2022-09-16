import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps
} from "react-native";

interface SkillCardProps extends TouchableOpacityProps {
  skill: string;
}
export function SkillCard({ skill, ...rest }: SkillCardProps) {

  return (

    <TouchableOpacity
      style={styles.buttonSkill}
      activeOpacity={.7}
      {...rest}
    >
      <Text style={styles.textSkill}>
        {skill}
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
