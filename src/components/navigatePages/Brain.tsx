import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Text,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import TaskCard from './TaskCard';

const Brain = () => {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = () => {
    if (text.trim() === '') return;

    setTasks(prevTasks => [...prevTasks, text.trim()]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="What's on your mind?"
          placeholderTextColor="#888"
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
      <ScrollView
        style={styles.taskContent}
        contentContainerStyle={{ paddingBottom: 20, gap: 15 }}
        showsVerticalScrollIndicator={false}
      >
        {tasks.length === 0 ? (
          <Text style={styles.emptyText}>No tasks yet</Text>
        ) : (
          tasks.map((task, index) => (
            <TaskCard key={`${index}-${task}`} task={task} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default Brain;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 28,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    gap: 8,
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    width: '80%',
    padding: 8,
    borderRadius: 8,
  },
  taskContent: {
    flex: 1,
    marginTop: 16,
    overflow: 'hidden',
    marginBottom: 17,
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 40,
  },
});