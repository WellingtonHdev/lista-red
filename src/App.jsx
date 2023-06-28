import { GlobalStyle } from './GlobalStyled'
import { Lista } from './Lista'
import Bandeira from './assets/Bandeira.gif'
import './index.css'


function App() {


  return (
    <div>
      <GlobalStyle />
      <header>
        <img src={Bandeira}/>
        <h1>RED</h1>
        <img src={Bandeira}/>

      </header>
      <Lista/>


    </div>
  )
}


export default App
