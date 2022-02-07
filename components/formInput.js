import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button } from 'react-native';

const FormInput = ({handleSubmit}) => {
    const[value, setValue] = useState('');

    const changeHandler = (val) => {
        setValue(val)
    }

  return (
      <View>
          <TextInput 
              placeholder='new todo...'
              onChangeText={changeHandler}
              style={styles.input}
          />
            <Button title='Add todo' onPress={() => handleSubmit(value)}/>
      </View>
  );
};
 const styles = StyleSheet.create({
     input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#fff',
        color: '#fff',
        borderBottomWidth: 1,
        backgroundColor: '#343434'
     }
 })
export default FormInput;
