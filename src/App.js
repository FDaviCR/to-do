import { Container } from '@material-ui/core';
import ItemComponent from './components/item.component';
import AddComponent from './components/adicionarNovo.component';
import { useState, useEffect } from 'react';
import getTodos from "./services/todo.service";


function App() {
  const [itens, setItens] = useState([]);

  const handleAdd = (textoAtual) => {
    let newState = [];
    newState.push(textoAtual);
    newState = newState.concat(itens);
    setItens(newState);
  }

  const handleExcluir = (index) => {
    let newState = [];
    newState = newState.concat(itens);
    newState.splice(index, 1);
    setItens(newState);
  }

  const handleInit = async () => {
    const listApi = await getTodos();
    setItens(listApi.map((item) => { return item.title }));
  }

  useEffect(() => {
    handleInit();
  }, []);

  return (
    <Container maxWidth="sm">
      <AddComponent onAdd={handleAdd}/>
      {itens.map((item,index) => (<ItemComponent texto={item} index={index} onExcluir={handleExcluir}/>))}
    </Container>
  );
}

export default App;
