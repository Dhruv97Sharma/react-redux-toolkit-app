import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
// import { store } from './store'
import { pokemonApi } from './services/pokeapi'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* This is how we directly use just an ApiProvider, without using the redux store */}
    <ApiProvider api={pokemonApi}>
    {/* <Provider store={store}> */}
      <App />
    {/* </Provider> */}
    </ApiProvider>
  </StrictMode>,
)
