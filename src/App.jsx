import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import MarketPlace from './pages/MarketPlace';


function App() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/nfts' element={<MarketPlace />}/>
    </Routes>
  );
}

export default App;
