import React, { Component } from 'react'
import { View, Text } from 'react-native'
import AuthNav from './src/Navigation'
import Store from './src/Redux/Store'
import { Provider } from 'react-redux'

const App = () => {
  return (
    <Provider store={Store}>
      <AuthNav />
    </Provider>
  )
}

export default App