import React,{useState, useEffect} from 'react';
import './css/globals.css';
// IMPORTACIÓN DE COMPONENTES 
import Header from './components/header';
import TopCardList from './components/top-card-list';
import Overview from './components/overview';
import Switch from './components/switch';

function App() {
  const [darkMode, SetDarkMode]= useState(false)
  const [checked, setChecked]= useState(false)
  const mainClass= darkMode ? 'is-dark-mode' : "is-light-mode"
  
  function changeMedia(mq) {
    SetDarkMode(mq.matches)
    setChecked(mq.matches)
  }
 

useEffect(() => {
  const  mq = window.matchMedia('(prefers-color-scheme: dark)')
  mq.addListener(changeMedia)
  SetDarkMode(mq.matches)
  setChecked(mq.matches)

  return() =>{
    mq.removeListener(changeMedia)
  }
},[])

  return (
    <main className={mainClass}>
    <Header>
      <h6>By Cristina</h6>
      <Switch SetDarkMode={SetDarkMode} 
      checked={checked} 
      setChecked={setChecked}>
      </Switch>
    </Header>
    <TopCardList/> 
    <Overview/>
    </main>
  );
}

export default App;
