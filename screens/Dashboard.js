import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, Surface  } from 'react-native-paper';


export default function Dashboard({ navigation }) {
  return (
    <View>
    <Appbar.Header>
      <Appbar.Action icon="dots-vertical" onPress={() => navigation.toggleDrawer()}/>
      <Appbar.Content title="Dashboard"  />
    </Appbar.Header>

    <View style={{paddingTop: 20, padding: 10, }}>
      
       <View style={{flex: 1, flexDirection: 'row', padding:10 }}>
        <View style={{width: '100%', height: 150, backgroundColor: 'powderblue'}}>
         
         <Surface style={styles.surface}>
           <Text style={{fontSize:48, color:'#6200ee', fontWeight:700,}}>25</Text>
           <Text style={{fontSize:24, color:'#6200ee', fontWeight:700,}}>Total Posts Offer</Text>
        </Surface>

        </View>
       
      </View>

       <View style={{flex: 1, flexDirection: 'row', padding:10 }}>
        <View style={{width: '100%', height: 150, backgroundColor: 'powderblue'}}>
         
         <Surface style={styles.surface}>
           <Text style={{fontSize:48, color:'#6200ee', fontWeight:700,}}>555</Text>
           <Text style={{fontSize:24, color:'#6200ee', fontWeight:700,}}>Total Bid</Text>
        </Surface>

        </View>
       
      </View>

        



    </View>
    </View>
  );
}


const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 150,
    width: '60',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});