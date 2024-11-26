import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import Button from './button.js';

const data = {
  buttonName: '...',
};
const data1 = {
  buttonName: '🔊',
};
const data2 = {
  buttonName: '🔇',
};
const data3 = {
  buttonName: '📞',
  color: 'red',
};
const App = () => (
  <View style={style.container}>
    <View style={style.profileContainer}>
      <Image
        style={style.img}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ltA5gCIxq4PXCWZiaisvZuIfLBZxw9xbeA&s',
        }}
      />
      <Text style={style.text}>SARMAD AHMAD</Text>
      <Text style={style.ring}>Ringing...</Text>
    </View>
    <View style={style.control}>
      <Button data={data} />
      <Button data={data1} />
      <Button data={data2} />
      <Button data={data3} />
    </View>
  </View>
);
export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'space-between',
    // alignItems: "center",
    paddingVertical: 70,
  },
  profileContainer: {
    alignItems: 'center',
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  ring: {
    fontSize: 18,
    color: 'white',
    marginTop: 10,
  },
  control:{
    flexDirection:'row',
    justifyContent:'space-around'
  }
});
