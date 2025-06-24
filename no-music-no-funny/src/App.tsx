import './App.css'
import {BrowserRouter ,  Routes, Route } from 'react-router-dom';
import StartPage from "./components/StartPage.tsx";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="/startpage" element={<StartPage />} />
          </Routes>
      </BrowserRouter>

  )
}

export default App;
