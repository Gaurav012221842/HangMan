import { Route, Routes } from "react-router-dom";

import PlayGame from "./pages/PlayGame/PlayGame";
import StartGame from "./pages/StartGame/StartGame";
import './App.css';
function App() {
  return (
    <>
    <div>
      <h1 className="font-semibold text-3xl">Welcome to Hangman</h1>
      
    </div>

    
     
    <Routes>
      <Route path="/play" element={<PlayGame />} />
      <Route path="" element={<StartGame />} />
      <Route path="*" element={<div> not found </div>} />
    </Routes>
    </>
   
      
  );
}

export default App;