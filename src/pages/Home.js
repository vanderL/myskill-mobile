import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState();
  const [mySkills, setMySkills] = useState([]);
  const [gretting, setGretting] = useState('');

  function handleAddNewSkill() {
    setMySkills(prevState => [...prevState, newSkill]);
    setNewSkill('');
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGretting('Good Morning')
    } else if (currentHour >= 12 && currentHour < 18) {
      setGretting('Good Aftnernoon')
    } else {
      setGretting('Good night')
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome, Vander
      </Text>
      <Text
        style={styles.greetings}
      >
        {gretting}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={'Nova Habilidade'}
        placeholderTextColor={'#555'}
        onChangeText={setNewSkill}
        value={newSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard
            key={item}
            skill={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.input}
          >
            No additional skills.
          </Text>
        )}
      />

    </View >
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
  },
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
  },
  greetings: {
    color: '#fff',
  }
})
