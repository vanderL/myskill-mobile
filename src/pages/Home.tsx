import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

interface skill {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState<string>('');
  const [mySkills, setMySkills] = useState<skill[]>([]);
  const [gretting, setGretting] = useState<string>('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(prevState => [...prevState, data]);
    setNewSkill('');
  }

  function handleRemoveSkill(skillId: string) {
    setMySkills(prevState => prevState.filter(
      skill => skill.id !== skillId
    ));
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

      <Button
        title={"Add"}
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>


      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
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
