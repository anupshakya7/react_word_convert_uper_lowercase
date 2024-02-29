import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
      setAlert({
        msg: message,
        type:type        
      })
      setTimeout(()=>{
        setAlert(null);
      },3000);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#00192f';
      showAlert("Dark Mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      setInterval(()=>{
        document.title = 'TextUtils is Amazing Mode';
      },2000);

      setInterval(()=>{
        document.title = 'Install TextUtils Now';
      },1200);
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
      <Navbar nav_title="Text Utils" nav_about="About Us" mode={mode} toggleMode = {toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
