import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const TodoItem = ({item, done}) => {
    
    return (
        <View>
            <TouchableOpacity onPress={() => done(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="white" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
                
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        // flex: 1,
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        color: '#fff'
    }, 
    text: {
        color: "#fff",
        marginLeft: 10
    }
})
export default TodoItem;
