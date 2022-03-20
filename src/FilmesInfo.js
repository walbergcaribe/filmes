import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import * as Animatable from "react-native-animatable";

const FilmesInfo = () => {

    const route = useRoute();

    const data = route.params.data;

    return (
        <View style={styles.containerGeral}>
            <Animatable.View style={{ width: 200, height: 250, alignSelf: 'center' }}
                animation="slideInDown" iterationCount={5} direction="alternate">
                <Image source={{ uri: data.image }} resizeMode='contain'
                    style={{ width: 200, height: 250, alignSelf: 'center' }} />
            </Animatable.View>
            <View style={styles.containerDadosPrincipais}>
                <Text style={styles.tituloItem}>Ano:</Text>
                <Text style={styles.dadoItem}>{data.ano},</Text>
                <Text style={styles.tituloItem}> Estilo:</Text>
                <Text style={styles.dadoItem}>{data.estilo},</Text>
                <Text style={styles.tituloItem}> Direção:</Text>
                <Text style={styles.dadoItem}>{data.direcao}</Text>
            </View>

            <View style={styles.containerDadosSecundarios}>
                <Text style={styles.containerDadosSecundariosItemDirecao}>{data.filme}</Text>
                <Text style={styles.containerDadosSecundariosItemDescricao}>{data.descricao}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({

    containerGeral: {
        backgroundColor: 'black',
        padding: 5,
        height: '100%'
    },

    containerDadosPrincipais: {
        marginBottom: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },

    tituloItem: {
        color: '#6D6D74',
        fontWeight: 'bold',
        fontSize: 12
    },

    dadoItem: {
        color: 'white',
        fontSize: 12
    },

    containerDadosSecundarios: {
        flexDirection: 'column',
    },

    containerDadosSecundariosItemDirecao: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },

    containerDadosSecundariosItemDescricao: {
        textAlign: 'center',
        color: 'white',
        marginTop: 10,
        fontSize: 12,
        fontStyle: 'italic'
    },

    containerDados: {
        marginLeft: 10,
        justifyContent: 'space-around'
    },

    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    dados: {
        color: 'white'
    }
});

export default FilmesInfo;
