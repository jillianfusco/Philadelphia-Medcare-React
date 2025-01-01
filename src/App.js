import './App.css';
import './Mediaqueries.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Aboutus from './components/AboutUs';
import OurServices from './components/OurServices';
import OurLocations from './components/OurLocations';
import ChooseUs from './components/ChooseUs';
import Schedule from './components/Schedule';

function App() {
  return (
    <div >
      <Navbar />
      <Profile />
      <Aboutus />
      <OurServices />
      <OurLocations />
      <ChooseUs />
      <Schedule />
    </div>
  );
}

export default App;
