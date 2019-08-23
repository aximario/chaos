import React from 'react';
import './App.css';
import View from './lib/View'
import List from './lib/List'
import EditPanel from './EditPanel'

function App() {
  return (
    <View
      horizontalAlign="between"
      h="100vh"
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
