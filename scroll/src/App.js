import React, { useEffect, useState }from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

function App() {

  const [color, setColor] = useState(false);

  useEffect(function(){
    function scrollPosition(){
      if(window.scrollY>40){
        setColor(true);
      } else{
        setColor(false);
      }
    }

    window.addEventListener('scroll', scrollPosition)
  },[])

  return (
    <div className="App">
      <Header action= {color}/>

      <Section />
    </div>
  );
}

export default App;

