import './App.css';
import Layout from './pages/Layout';
import Admin from './pages/Admin';
import Public from './pages/Public';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <h1>Könyváruház</h1>
      </header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <footer>
      Szedlár Krisztina
      </footer>
    </div>
  );
}

export default App;
