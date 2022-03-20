import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FilmesComponent = ({ data }) => {

    const navigation = useNavigation();

    const navegarTelaFilmesCad = () => {
        navigation.navigate('Filmes Info.', { data: data });
    }

    return (
        <TouchableOpacity style={styles.containerGeral} onPress={navegarTelaFilmesCad}>
            <Image source={{ uri: data.image }} resizeMode='contain' style={{ width: 90, height: 100 }} />

            <View style={styles.containerDados}>
                <Text style={styles.titulo}>{data.filme}</Text>
                <Text style={styles.dados}>{data.ano}</Text>
                <Text style={styles.dados}>{data.estilo}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({

    containerGeral: {
        backgroundColor: '#252527',
        marginBottom: 5,
        flexDirection: 'row',
        padding: 5
    },

    containerDados: {
        marginLeft: 10
    },

    titulo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    dados: {
        color: 'white'
    }
})

export default FilmesComponent;
