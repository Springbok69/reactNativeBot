import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>botSwarm</Text>
      <Text>bot connected</Text>
      <StatusBar style="auto" />
      <View>
      <TouchableOpacity
           style={styles.loginScreenButton}
           onPress={() => console.log("I was pressed")}
           underlayColor='#fff'>
           <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

        
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginScreenButton: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 2,
    borderColor: '#fff'
  },
  loginText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
}
});
