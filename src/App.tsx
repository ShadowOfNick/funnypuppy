import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnorherPage, HomePage } from './pages';
import './styles/App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/another' element={<AnorherPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
