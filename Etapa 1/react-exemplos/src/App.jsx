import { useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  
  const updateCount = () => {
    return count + 1;
 }

 const updateCount1 = () => count + 1;
  
  const dados = {
    "nome": "fulano",
    "atualiza": (novo_nome) => `novo nome é ${novo_nome}`,
    "endereço": {
    "rua": "xyz",
    "numero": 111,
    "complemento": ["casa", "na esquina do supermercado ABC"]
    }

    };
    // é um objeto JS
    //dados.atualiza("gerson")
    //dados.endereço.complementos[1];
    

  return ( 
    <>
      <Counter title="Contando..."/>
      <Counter initial="100" />
    </>
  )
}

export default App;
