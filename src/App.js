import './App.css';
import React, { useState, useEffect } from 'react'
import LanguageSwitch from './components/languageSwitch/LanguageSwitch'
import { formData, cardData } from './data/data'
import Mail from './components/form/mail'

function App() {
  const [languageState, setLanguageState] = useState('FR')
  let formDataBasedOnState = languageState === 'FR' ? formData[0] : formData[1];
  
  useEffect(() => {
    console.log(languageState)
    formDataBasedOnState = languageState === 'FR' ? formData[0] : formData[1];
  }, [languageState])
  
  return (
    <div className="App">
      <LanguageSwitch onChange={val => setLanguageState(val)}/>
      <Mail data={formDataBasedOnState}/>
    </div>
  );
}

export default App;
