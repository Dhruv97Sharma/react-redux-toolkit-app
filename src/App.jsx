import { useState } from 'react'
import { useGetPokemonByNameQuery } from './services/pokeapi'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { POKEMON_NAMES } from './services/pokemon_names'

function Pokedex ({ pokemon_index }) {
  // const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  const { data, error, isLoading } = useGetPokemonByNameQuery(POKEMON_NAMES[pokemon_index])

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h1>{data.species.name}</h1>
          <img src={data.sprites.front_shiny} alt={data.species.name} width={250} height={250}/>
        </>
      ) : null}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [poke_index, set_poke_index] = useState(0)

  const handleClick = (button_side) => {
    if (button_side === 'left' && poke_index === 0){
      set_poke_index(POKEMON_NAMES.length - 1)
    }else{
      const index =  button_side === 'right' ? (poke_index + 1) % POKEMON_NAMES.length : (poke_index - 1) % POKEMON_NAMES.length
      set_poke_index(index)
    }
    
  }

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <div>
        <button onClick={ () => handleClick('left') }> Previous </button>
          <Pokedex pokemon_index = {poke_index} />
        <button onClick={ () =>handleClick('right')}> Next </button>
      </div>
     
    </>
  )
}

export default App
