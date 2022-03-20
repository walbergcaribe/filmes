import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import FilmesComponent from './components/FilmeComponent';

const FilmesList = () => {

    const listaFilmes = [
        {
            key: '0',
            filme: 'SCOOBY! O filme',
            ano: 2020,
            estilo: 'Comédia',
            direcao: 'Tony Cervone',
            image: 'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
            descricao: 'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.'
        },
        {
            key: '1',
            filme: 'Doce Entardecer na Toscana',
            ano: 2021,
            estilo: 'Drama',
            direcao: 'Jacek Borcuch',
            image: 'https://assets.caixabelasartes.com.br/wp-content/uploads/2020/03/cartaz-doce-entardecer.jpg',
            descricao: 'Com a chegada de um novo imigrante na cidade, Maria, uma mãe de família tem sua vida virada de cabeça para baixo. Conforme ela se relaciona com o rapaz, um cenário de terrorismo começa a se desenrolar na, até então, calma região da Toscana.'
        }
    ]

    return (
        <View style={{ backgroundColor: 'black', height: '100%' }}>
            <FlatList data={listaFilmes} renderItem={({ item }) => <FilmesComponent data={item} />} />
        </View>
    )
};

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderRadius: 10,
        width: '90%',
        marginTop: 10
    }
});

export default FilmesList;
