import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegistrationScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    
    navigation.navigate('Ecommerce');
  };

  return (
    <View>
      <Text>Registration Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegistrationScreen;
