import React from 'react';
import './App.css';
import View from './components/View'
import Text from './components/Text'
import Input from './components/Input'

function App() {
  return (
    <View>
      <Text c="red">Hello World</Text>
      <Input bg="green" />
    </View>
  );
}

export default App;
