import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';


//icone botão voltar
import Ionicons from "@expo/vector-icons/Ionicons"

export function MovieScreen() {
  const { params: item } = useRoute();
  useEffect(() =>{
    //chamada dos detalhes do filme pela api

  }, [item])
  return (
   <ScrollView
    contentContainerStyle={{paddingBottom:20, flex: 1, backgroundColor: "#0D1D25"}}
   >
    {/* botão para voltar para a tela inicial dos filmes */}
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="arrow-back-circle-outline" size={32} color="white" />
      </TouchableOpacity>
    </View>
     </ScrollView>
  );
}

{/*add tela a navigation */}

const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'space-between',
      padding:20
  },
  button:{
    borderRadius: 10,
    backgroundColor:"red",
    width:35,
    alignItems:'center'
    
  }
})