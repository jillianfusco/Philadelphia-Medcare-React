import './App.css';
import './Mediaqueries.css';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Aboutus from './components/AboutUs';
import OurServices from './components/OurServices';
import Location from './components/Location';
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
      <Location />
      <ChooseUs />
      <Schedule />
      <Contact />
    </div>
  );
}

export default App;
