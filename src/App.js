import React, { useEffect } from "react";

import logo from './logo.svg';
import './App.css';

function App() {


const loadGumletScript = () => {
    return new Promise(function (resolve, reject){
      // Checks if the script is already loaded on the page
      if(document.querySelector("script#gumlet-sdk-script")){
        resolve();
      }else {
        window.GUMLET_CONFIG = {
            hosts: [{
            current: "testwebsiteadn1.000webhostapp.com",
            gumlet: "webfolderanu.gumlet.io"
            }],
            lazy_load: true
        };
        // Loads the script and appends it on the page
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/gumlet.js@2.1/dist/gumlet.min.js";
        script.id = "gumlet-sdk-script";
        script.sync = true;
        script.onload = () => resolve();
        document.body.appendChild(script);
      }
    });
  }

  useEffect(() => {
    loadGumletScript();
  });


     

  return (
    <div className="App">
           <img data-src="https://webfolderanu.gumlet.io/spiritual.jpg" style={{width:"300px"}} />

    </div>
  );
}

export default App;
