import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ data }) => (
  <View style={style.button}>
    <TouchableOpacity
      style={[
        style.buttonContainer,
        data.color ? { backgroundColor: data.color } : {}, 
      ]}>
      <Text
        style={
          style.newButtonText
         }>
        {data.buttonName}
      </Text>
    </TouchableOpacity>
  </View>
);

export default Button;

const style = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    // flexDirection:'row',
    margininTop: 15,
    marginLeft: 5,   
    paddingTop:5,
    marginEnd:10
  },
  buttonContainer: {
    backgroundColor: '#333',
    borderRadius: 75,
    paddingVertical: 15,
    paddingHorizontal: 17,
    borderWidth: 1,
  },
  newButtonText: {
    color: 'white', // Default text color is white
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
