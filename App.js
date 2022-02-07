import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import FormInput from './components/formInput';

import Sandbox from './components/sandbox';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  const [message, setMessage] = useState(false)

  const handleDone = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const handleSubmit = (text) => {
    if (text === "") {
      Alert.alert("Ooops!", "input field cannot be empty")
      setMessage(true)
      setTimeout(() => {
        setMessage(false)
      }, 2000)
      return
    }
    setTodos((prevTodos) => {
      return (
        [...prevTodos, { text: text, key: Math.random().toString() }]
      )
    });
    setMessage(false);
  }

  return (
    // <Sandbox />

    <TouchableWithoutFeedback onPress={ () => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {message && <Text style={styles.error}>You cannot add an empty todo</Text>}
          <FormInput handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} done={handleDone} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20
  },
  error: {
    color: 'red'
  }
});
