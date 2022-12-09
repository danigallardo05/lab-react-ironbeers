import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ListBeer from './pages/ListBeer';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import NewBeer from './pages/NewBeer';

function App() {





  return (
    <div className="App">



      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-beer" element={<ListBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/:id" element={<SingleBeer />} />

      </Routes>



    </div>
  );
}

export default App;
