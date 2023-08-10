/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Feed({image}) {
    return (
     <Image source={image}style={styles.img}/>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      color:'white',
    },
    img:{
      height:400,
      width:300,
      padding:10,
      marginTop:10
    }
  
    
  });*/
  import React, { useState } from 'react';
import { ScrollView, StatusBar } from 'react-native';

import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

//icone do menu
import Ionicons from "@expo/vector-icons/Ionicons"

//COMPONENTE COM OS FILMES
import ListaMovies from '../components/listaMovies';
import { Movies } from '../components/movies';

export default function FeedScreen() {
  //CONSTANTE PARA MODIFICAR OS ESTADOS DO COMPONENTE MOVIES
  const [movies, setMovies] = useState([1,2,3,4,5]);
  const [upcoming, setUpcoming] = useState([1,2,3,4,5]);
  const [topRated, setTopRated] = useState([1,2,3,4,5]);

    return (
        <View style={styles.container}>
         
         <StatusBar style="light"/>
         <View style={styles.containerTwo}>

            <Ionicons name="menu" size={32} color="white"/>
            
            <Text style={styles.text}>
            <Text style={styles.textM}>M</Text>ovies
            </Text>

            {/*Botão de pesquisa */}
            <TouchableOpacity>
              <Ionicons name='search' size={32} color="white"/>
            </TouchableOpacity>
         </View>
          {/*Criar lista de filmes em carousel */}
          <ScrollView showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom:10}}>
           {/*Componente lista de filmes */}
            <ListaMovies data={movies}/>

            {/*Adicionando componente Movies */}
            <Movies title="Lançamentos" data={upcoming}/>

            {/*melhores ranqueados Movies */}
            <Movies title="Mais votados" data={topRated}/>

          </ScrollView>
        </View>
   
    );
  }
  
 const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#0D1D25"
  },
  containerTwo:{
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingTop:50,
    marginLeft:10,
    marginRight: 10,
   
  },
  text:{
    color:"#fff",
    fontSize:22,
    fontWeight: "bold",
    alignSelf:"flex-end"
  },
  textM:{
    color:"red"
  }
 })