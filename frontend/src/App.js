import './App.css';
import {  Routes, Route } from "react-router-dom";
import ChatPage from './Pages/ChatPage';
import HomePage from './Pages/HomePage';


function App() {
  return (
   
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chats" element={<ChatPage />} />
        </Routes>
      </div>
    
  );
}

export default App;
