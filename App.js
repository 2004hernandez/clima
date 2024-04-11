import {  StyleSheet, Text,  View } from 'react-native';
import Clima from './componentes/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Clima/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33abf3',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  encabezado:{

  },
  cuerpo:{
    flex:1,
    padding:11,
  },

  
});
