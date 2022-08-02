import React, { Component } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import Main from './containers/Main';
import './index.css'
function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='container'>
          <Main />
        </div>
      </PersistGate>

    </Provider>
  )
}

export default App
