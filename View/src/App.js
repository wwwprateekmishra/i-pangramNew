import './App.css';
import Pages from './Components/CreateStore/Pages';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Table from './Components/CreateStore/pageTable';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      <Route path='/' element={<Pages />} />
      <Route path='/table' element={<Table />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
