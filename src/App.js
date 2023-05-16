import Home from './pages/Home'
import CountryDetail from './pages/CountryDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/countries/:countryCode' element={<CountryDetail/>} />
        <Route path='*' element={<h2>404 Page not found</h2>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
