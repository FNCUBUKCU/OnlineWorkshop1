import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const MButton = props => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text> { props.title } </Text>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    button:{
        marginTop:20,
        alignItems:"center",
        padding:5,
        paddingLeft:30,
        paddingRight:30,
        flexDirection:'column',
        backgroundColor:'#c7dee0',
        borderRadius:10
    }
});
export default MButton;