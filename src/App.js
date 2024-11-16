import './App.css';
import MainSection from './Components/MainSection/MainSection';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<MainSection/>}/>
      </Routes>
    </div>
  );
}

export default App;
