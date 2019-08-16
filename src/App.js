import React from 'react';
import './App.css';
import View from './components/View'
import Text from './components/Text'
import Input from './components/Input'
import List from './components/List'
import EditPanel from './EditPanel'

function App() {
  return (
    <View
      horizontalAlign="between"
    >
      <List>
        <List.Item>View</List.Item>
        <List.Item>Text</List.Item>
        <List.Item>Input</List.Item>
      </List>
      <EditPanel />
    </View>
  );
}

export default App;
