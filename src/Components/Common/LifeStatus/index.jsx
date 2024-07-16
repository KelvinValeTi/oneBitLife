import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Lottie from "lottie-react-native";

export default function LifeStatus(){
    /**
     * 100 - maximo
     * 50 - medio
     * 25 - baixo
     * 00 - curto (acabou o game)
     * No robô, nós temos primeiros felicidade e depos a saude xx - xx
     */
    
    return(
        <View style={styles.container}>
            <View>
                <Lottie
                    source={require("../../../assets/education/education-100.json")}
                    autoPlay
                    loop
                    style={styles.educacaoAnimacao}
                />

                <Lottie
                    source={require("../../../assets/money/money-100.json")}
                    autoPlay
                    loop
                    style={styles.financasAnimacao}
                />
                <Lottie
                    source={require("../../../assets/robot/robot-100-100.json")}
                    autoPlay
                    loop
                    style={styles.roboAnimacao}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:300,
        height:300,
        alignItems:"center",
        justifyContent:"center",
    },
    roboAnimacao:{
        width:190,
        height:190,
        marginTop:30,
    },
    educacaoAnimacao:{
        width:100,
        height:100,
        marginTop:60,
        marginLeft:-40,
        position:"absolute"
    },
    financasAnimacao:{
        width:100,
        height:100,
        marginTop:60,
        marginLeft:140,
        position:"absolute"
    },

});