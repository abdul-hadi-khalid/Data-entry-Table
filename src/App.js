import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Header from './components/Header.js'
import store from './redux/Store.js'
import Table from './components/Table.js'

function App() {
  
  return (
    <Provider store={store}>
    <div id='page'>
      <Header />
      <Table />
    </div>
    </Provider>
  )
}

export default App
