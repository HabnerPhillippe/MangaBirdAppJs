import React from "react";
import { Text, StyleSheet } from "react-native";


const Titulo = (props) => {

    return (
        <Text style={style.titulo}> {props.valor} </Text>
    )
}

const style = StyleSheet.create({
    titulo:{
        color:"#707070",
        fontSize: 17,
        fontWeight:"700",
        textAlign:"center",
        marginBottom:15

    }
});

export default Titulo;