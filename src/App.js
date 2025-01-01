import './App.css';
import './Mediaqueries.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Aboutus from './components/AboutUs';
import OurServices from './components/OurServices';
import OurLocations from './components/OurLocations';
import ChooseUs from './components/ChooseUs';
import Schedule from './components/Schedule';
import Contact from './components/Contact';

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
      <Contact />
    </div>
  );
}

export default App;
