import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Next1 } from './pages/Next1';
import { Next2 } from './pages/Next2';
import { Next3 } from './pages/Next3';
import { Next4 } from './pages/Next4';
import { Next5 } from './pages/Next5'
import { Next6 } from './pages/Next6';
import { Next7 } from './pages/Next7';
import { Next8 } from './pages/Next8';
import { Next9 } from './pages/Next9';
import { Next10 } from './pages/Next10';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/next1' element={<Next1 />} />
        <Route path='/next2' element={<Next2 />} />
        <Route path='/next3' element={<Next3 />} />
        <Route path='/next4' element={<Next4 />} />
        <Route path='/next5' element={<Next5 />} />
        <Route path='/next6' element={<Next6 />} />
        <Route path='/next7' element={<Next7 />} />
        <Route path='/next8' element={<Next8 />} />
        <Route path='/next9' element={<Next9 />} />
        <Route path='/next10' element={<Next10 />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
