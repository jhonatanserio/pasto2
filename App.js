import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feed from "./screens/FeedScreen"
const imagem=require("./assets/goku pm.jpg")
export default function App() {
  return (
    <View style={styles.container}>
      <Feed image={imagem}/>
      <Text style={styles.texto}>albion online</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.butao}>
      <Text style={styles.texto}>abaixar</Text>
      </TouchableOpacity>
    </View>
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
  butao:{
    backgroundColor:'purple',
    padding:10,
    marginTop:10
  }

  
});
