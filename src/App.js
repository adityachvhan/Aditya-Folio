import './App.css';
import MainSection from './Components/MainSection/MainSection';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom'
import ProfileCard from './Components/ProfileCard/ProfileCard';
import Service from './Components/Service/Service';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<MainSection />} />
        <Route path='/service' element={<Service />} />
      </Routes>
    </div>
  );
}

export default App;
