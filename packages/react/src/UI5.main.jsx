import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


function onThemeChanged (sTheme) {  
  //Call central theme change function on App.jsx so it will serve standalone app and nested app
}

function onLocalizationChanged (sLocal) {  
  //Call central local change function on App.jsx so it will serve standalone app and nested app
 
}


export function loadReact(params) {
  const root = ReactDOM.createRoot(document.getElementById(params.ReactDivName));
  root.render(<App />);
  return () => {
    root.unmount();
  }
}


window['react'] = loadReact;
window['react_onThemeChanged'] = onThemeChanged ;
window['react_onLocalizationChanged'] = onLocalizationChanged ;
